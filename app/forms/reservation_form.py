from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, SelectField, BooleanField, DateField, RadioField
from wtforms.validators import DataRequired, InputRequired


class NewReservation(FlaskForm):
    userId = IntegerField("User", validators=[DataRequired()])
    walkerId = IntegerField("Walker", validators=[DataRequired()])
    taskType = SelectField("Task Type", choices=["Dog Walking","Drop-In Visit"],validators=[InputRequired(message="Please provide the task type for your walker")])
    taskLength = SelectField("Task Length", choices=["30 Minutes","60 Minutes"],validators=[InputRequired(message="Please provide the task length for your walker")])
    address = StringField("Address", validators=[InputRequired(message="Please provide the address to pick up your pet")])
    comment = StringField("Message", validators=[InputRequired(message="Please leave a note for your walker")])
    date = DateField("Which Date?", validators=[InputRequired(message="Please provide a specific date for your walker")])
    time = SelectField("Between What Time?", choices=["6:00AM-9:00AM","9:00AM-12:00PM", "12:00PM-3:00PM", "3:00PM-6:00PM", "6:00PM-9:00PM","9:00PM-12:00AM"],validators=[InputRequired(message="Please provide a specific tima frame for your walker")])
    # submit = SubmitField("Submit")


class EditReservation(FlaskForm):
   taskType = SelectField("Task Type", choices=["Dog Walking","Drop-In Visit"],validators=[InputRequired(message="Please provide the task type for your walker")])
    taskLength = SelectField("Task Length", choices=["30 Minutes","60 Minutes"],validators=[InputRequired(message="Please provide the task length for your walker")])
    address = StringField("Address", validators=[InputRequired(message="Please provide the address to pick up your pet")])
    comment = StringField("Message", validators=[InputRequired(message="Please leave a note for your walker")])
    date = DateField("Which Date?", validators=[InputRequired(message="Please provide a specific date for your walker")])
    time = SelectField("Between What Time?", choices=["6:00AM-9:00AM","9:00AM-12:00PM", "12:00PM-3:00PM", "3:00PM-6:00PM", "6:00PM-9:00PM","9:00PM-12:00AM"],validators=[InputRequired(message="Please provide a specific time frame for your walker")])
