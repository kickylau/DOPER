from flask import Blueprint, request, render_template, redirect
from flask_login import login_required
from ..models import db, Pet, Reservation

invited_pets_routes = Blueprint('invited_pets', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@invited_pets_routes.route('/', methods=["POST"])
@login_required
def pets():
    data = request.get_json(force=True)
    reservationId = data["reservsationId"]
    pet = Pet.query.filter(Pet.name == data["name"]).one()
    if pet:
        return {
            "invitedPet": pet.to_dict(), "reservationId": reservationId
        }
    else:
        return {
            "errors" : ["This pet does not exist. Please type an existing pet."]
        }

@invited_pets_routes.route('/<int:id>/reservations')
@login_required
def invited_pet_reservations(id):
    pet = Pet.query.get(id)
    all_reservations = pet.invited_reservations
    reservations = {}
    for reservation in all_reservations:
        reservations[reservation.id] = reservation.to_dict

    return reservations
