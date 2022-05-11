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



@reservation_routes.route('/', methods=['POST'])
def reservations():
    form = NewReservation()
    form['csrf_token'].data = request.cookies['csrf_token']
    if form.validate_on_submit():
        new_reservation = Reservation(
            user_id=form.data["userId"],
            walker_id=form.data["walkerId"],
            pet_id=form.data["petId"],
            task_type=form.data["taskType"],
            task_length=form.data["taskLength"],
            address=form.data["address"],
            comment=form.data["comment"],
            date=form.data["date"],
            time=form.data["time"],
        )
        db.session.add(new_reservation)
        db.session.commit()
        return new_reservation.to_dict
    else:
        return {'errors': validation_errors_to_error_messages(form.errors)}, 401




@reservation_routes.route("/<int:id>", methods=["GET", "PUT", "DELETE"])
def change_reservation(id):
    if request.method == 'GET':
        reservation = Reservation.query.get(id)
        if reservation:
            return reservation.to_dict
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
            return reservation.to_dict
        else:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401
    else:
        reservation = Reservation.query.get(id)
        db.session.delete(reservation)
        db.session.commit()
        return {}
