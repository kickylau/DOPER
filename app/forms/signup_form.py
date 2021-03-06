from flask_wtf import FlaskForm
from wtforms import StringField
from wtforms.validators import DataRequired, Email, ValidationError, Length
from app.models import User


def user_exists(form, field):
    # Checking if user exists
    email = field.data
    user = User.query.filter(User.email == email).first()
    if user:
        raise ValidationError('Email address is already in use.')


def username_exists(form, field):
    # Checking if username is already in use
    username = field.data
    user = User.query.filter(User.username == username).first()
    if user:
        raise ValidationError('Username is already in use.')


class SignUpForm(FlaskForm):
    username = StringField('username', validators=[DataRequired(), Length(min=2, max=50, message="Please provide 2-50 characters"),username_exists])
    email = StringField('email', validators=[DataRequired(),Email(message="Please provide a valid email address", granular_message=False, check_deliverability=False, allow_smtputf8=True, allow_empty_local=False), user_exists])
    password = StringField('password', validators=[DataRequired(), Length(min=5, max=50, message="Please provide 5-50 characters")])
