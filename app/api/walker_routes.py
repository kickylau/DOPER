from flask import Blueprint, jsonify
from app.models import Walker

walker_routes = Blueprint('walkers', __name__)

def validation_errors_to_error_messages(validation_errors):
    """
    Simple function that turns the WTForms validation errors into a simple list
    """
    errorMessages = []
    for field in validation_errors:
        for error in validation_errors[field]:
            errorMessages.append(f'{field} : {error}')
    return errorMessages



@walker_routes.route('/')
def walkers():
    walkers = Walker.query.all()
    return {'walkers': [walker.to_dict() for walker in walkers]}

@walker_routes.route('/<int:id>')
def walker(id):
    walker = Walker.query.get(id)
    return walker.to_dict()
