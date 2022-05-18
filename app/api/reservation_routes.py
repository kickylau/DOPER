from flask import Blueprint, request, render_template, redirect
from ..forms import NewReservation, EditReservation
from ..models import db, Pet, User, Reservation, Walker, reservation_invites
from datetime import date


reservation_routes = Blueprint('reservations', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@reservation_routes.route('/', methods=["GET", 'POST'])
def reservations():
    if request.method == 'GET':
        reservations = Reservation.query.all()
        # if reservations:
        return {"reservations": [reservation.to_dict() for reservation in reservations]}
            #return reservation.to_dict
        #else:
        #FOR GET, DONT RETURN ANY ERROR SINCE NO AVAILABLE RESERVATION
            #return {'error': ['No Reservation Found']}

    if request.method == "POST":
        form = NewReservation()
        #this way is to grab data from the json body in the front end since the petId is not in the backend form data
        reservation_data = request.get_json(force=True)
        #print("..................")
        form['csrf_token'].data = request.cookies['csrf_token']
        #print("FORM OF THE WALKER ID-----------------------------", form.data)
        if form.validate_on_submit():
            new_reservation = Reservation(
                user_id=form.data["userId"],
                walker_id=form.data["walkerId"],
                task_type=form.data["taskType"],
                task_length=form.data["taskLength"],
                address=form.data["address"],
                comment=form.data["comment"],
                date=form.data["date"],
                time=form.data["time"],
                pet_id=reservation_data["petId"]
            )
            #print("NEW RESERVATION", new_reservation)
            db.session.add(new_reservation)
            db.session.commit()
            return new_reservation.to_dict()
        else:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401




@reservation_routes.route("/<int:id>", methods=["GET", "PUT", "DELETE"])
def change_reservation(id):
    if request.method == 'GET':
        reservation = Reservation.query.get(id)
        if reservation:
            return reservation.to_dict()
        else:
            return {'error': ['No Reservation Found']}
    if request.method == 'PUT':
        form = EditReservation()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            reservation = Reservation.query.get(id)
            reservation.task_type = form.data["taskType"]
            reservation.task_length = form.data["taskLength"]
            reservation.address = form.data["address"]
            reservation.comment = form.data["comment"]
            reservation.date = form.data["date"]
            reservation.time = form.data["time"]


            db.session.add(reservation)
            db.session.commit()
            return reservation.to_dict()
        else:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401

    if request.method == "DELETE":
        reservation = Reservation.query.get(id)
        db.session.delete(reservation)
        db.session.commit()
        return {}





#??to check one reservation have all pets
@reservation_routes.route("/<int:id>/pets", methods=["GET"])
def reservation_pets(id):

    if request.method == "GET":
        reservstion = Reservation.query.get(id)
        all_pets = reservation.invited_pets
        pets = {}
        for pet in all_pets:
            pets[pet.id] = pet.to_dict()
        return pets
