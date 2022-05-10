from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, SelectField, BooleanField, DateField
from wtforms.validators import DataRequired


class NewReservation(FlaskForm):
    userId = IntegerField("User", validators=[DataRequired()])
    walkerId = IntegerField("Walker", validators=[DataRequired()])
    petId = IntegerField("Pet", validators=[DataRequired()])
    taskType = SelectField("Task Type", choices=[(1,"Dog Walking"),(2,"Drop-In Visits")], validators=[DataRequired()])
    taskLength = IntegerField("Task Length", choices=[(1,"30 minutes"),(2,"60 minutes")], validators=[DataRequired()])
    address = IntegerField("Address", validators=[DataRequired()])
    comment = IntegerField("Message", validators=[DataRequired()])
    date = DateField("Which Date?", validators=[DataRequired()])
    time = SelectField("Between What Time?", choices=[(1,"6:00AM-9:00AM"),(2,"9:00AM-12:00PM"),(2,"12:00PM-3:00PM"),(3,"3:00PM-6:00PM"), (4,"6:00PM-9:00PM"), (5,"9:00PM-12:00AM")], validators=[DataRequired()])
    submit = SubmitField("Submit")


class EditReservation(FlaskForm):
    taskType = SelectField("Task Type", choices=[(1,"Dog Walking"),(2,"Drop-In Visits")], validators=[DataRequired()])
    taskLength = IntegerField("Task Length", choices=[(1,"30 minutes"),(2,"60 minutes")], validators=[DataRequired()])
    address = IntegerField("Address", validators=[DataRequired()])
    comment = IntegerField("Message", validators=[DataRequired()])
    date = DateField("Which Date?", validators=[DataRequired()])
    time = SelectField("Between What Time?", choices=[(1,"6:00AM-9:00AM"),(2,"9:00AM-12:00PM"),(2,"12:00PM-3:00PM"),(3,"3:00PM-6:00PM"), (4,"6:00PM-9:00PM"), (5,"9:00PM-12:00AM")], validators=[DataRequired()])
    submit = SubmitField("Submit")
