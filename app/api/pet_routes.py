from flask import Blueprint, request, render_template, redirect
from ..forms import NewPet, EditPet
from ..models import db, Pet, User, Reservation, Walker



pet_routes = Blueprint('pets', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@pet_routes.route('/', methods=["GET", 'POST'])
def pets():
    if request.method == 'GET':
        pets = Pet.query.all()
        if pets:
            return {"pets": [pet.to_dict() for pet in pets]}

        #else:
            #return {'error': ['No Pet Found']}

    if request.method =="POST":
        form = NewPet()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            new_pet = Pet(
                user_id=form.data["userId"],
                name=form.data["name"],
                profile_image=form.data["profileImage"],
                size=form.data["size"],
                age_year=form.data["ageYear"],
                age_month=form.data["ageMonth"],
                has_microchipped=form.data["hasMicrochipped"],
                has_spayed=form.data["hasSpayed"],
                has_trained=form.data["hasTrained"],
                is_friendly_with_children=form.data["isFriendlyWithChildren"],
                is_friendly_with_dogs=form.data["isFriendlyWithDogs"],
                sex=form.data["sex"],
                breed=form.data["breed"],
                description=form.data["description"],
                vet_info=form.data["vetInfo"],
            )
            db.session.add(new_pet)
            db.session.commit()
            return new_pet.to_dict()
        else:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401

#? how to show user have how many pets?
@pet_routes.route("/users/<int:id>")
def users_owned_pets(id):
    pets = Pet.query.filter(Pet.user_id == id).all()
    user = User.query.get(id)


    if pets:
        owned_pets={}
        for pet in pets:
            owned_pets[pet.id] = pet.to_dict
        for invited_trip in invited_on_trips:
            other_trips[invited_trip.id] = invited_trip.to_dict
        return {**owned_pets}
    else:
        return {'error': ['No Pets found for this User']}



#?? Get routes for all reservations in a single pet
@pet_routes.route('/<int:id>/reservations', methods=['GET'])
def pet_reservations(id):
    pet_reservations = Reservation.query.filter(Reservation.pet_id == id).all()
    if pet_reservations:
        all_reservations = {}
        for reservation in pet_reservations:
            all_reservations[reservation.id] = reservation.to_dict
        return all_reservations
    else:
        return {'error': ['No Reservation found for this Pet']}






@pet_routes.route("/<int:id>", methods=["GET", "PUT", "DELETE"])
def change_pet(id):
    if request.method == 'GET':
        pet = Pet.query.get(id)
        if pet:
            return pet.to_dict()
        else:
            return {'error': ['No Pet Found']}
    if request.method == 'PUT':
        form = EditPet()
        form['csrf_token'].data = request.cookies['csrf_token']
        if form.validate_on_submit():
            pet = Pet.query.get(id)
            pet.name= form.data["name"]
            pet.profile_image=form.data["profileImage"]
            pet.size=form.data["size"]
            pet.age_year=form.data["ageYear"]
            pet.age_month=form.data["ageMonth"]
            pet.has_microchipped=form.data["hasMicrochipped"]
            pet.has_spayed=form.data["hasSpayed"]
            pet.has_trained=form.data["hasTrained"]
            pet.is_friendly_with_children=form.data["isFriendlyWithChildren"]
            pet.is_friendly_with_dogs=form.data["isFriendlyWithDogs"]
            pet.sex=form.data["sex"]
            pet.breed=form.data["breed"]
            pet.description=form.data["description"]
            pet.vet_info=form.data["vetInfo"]

            db.session.add(pet)
            db.session.commit()
            return pet.to_dict()
        else:
            return {'errors': validation_errors_to_error_messages(form.errors)}, 401

    if request.method == "DELETE":
        pet = Pet.query.get(id)
        db.session.delete(pet)
        db.session.commit()
        return {}
