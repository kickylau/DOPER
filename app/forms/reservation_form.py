from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, SelectField, BooleanField, DateField, RadioField
from wtforms.validators import DataRequired, InputRequired


class NewReservation(FlaskForm):
    userId = IntegerField("User", validators=[DataRequired()])
    walkerId = IntegerField("Walker", validators=[DataRequired()])
    taskType = SelectField("Task Type", choices=["Dog Walking","Drop-In Visit"],validators=[InputRequired()])
    taskLength = SelectField("Task Length", choices=["30 Minutes","60 Minutes"],validators=[InputRequired()])
    address = StringField("Address", validators=[DataRequired()])
    comment = StringField("Message", validators=[DataRequired()])
    date = DateField("Which Date?", validators=[DataRequired()])
    time = SelectField("Between What Time?", choices=["6:00AM-9:00AM","9:00AM-12:00PM", "12:00PM-3:00PM", "3:00PM-6:00PM", "6:00PM-9:00PM","9:00PM-12:00AM"],validators=[InputRequired()])
    # submit = SubmitField("Submit")


class EditReservation(FlaskForm):
    taskType = SelectField("Task Type", choices=["Dog Walking","Drop-In Visit"],validators=[InputRequired()])
    taskLength = SelectField("Task Length", choices=["30 Minutes","60 Minutes"],validators=[InputRequired()])
    address = StringField("Address", validators=[DataRequired()])
    comment = StringField("Message", validators=[DataRequired()])
    date = DateField("Which Date?", validators=[DataRequired()])
    time = SelectField("Between What Time?", choices=["6:00AM-9:00AM","9:00AM-12:00PM", "12:00PM-3:00PM", "3:00PM-6:00PM", "6:00PM-9:00PM","9:00PM-12:00AM"],validators=[InputRequired()])
    # submit = SubmitField("Submit")
