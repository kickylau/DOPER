from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, SelectField, BooleanField, DateField, RadioField
from wtforms.validators import DataRequired, InputRequired, NumberRange


class NewPet(FlaskForm):
    userId = IntegerField("User", validators=[DataRequired()])
    name = StringField("Name", validators=[DataRequired()])
    profileImage = StringField("Profile Image", validators=[DataRequired()])
    size = IntegerField("Size", validators=[DataRequired(), NumberRange(min=0,message="Size has to be a positive number")])
    ageYear = IntegerField("Age(Year)", validators=[DataRequired(), NumberRange(min=0,message="Size has to be a positive number")])
    ageMonth = IntegerField("Age(Month)", validators=[DataRequired(), NumberRange(min=0,message="Size has to be a positive number")])
    hasMicrochipped = SelectField("Has Microchipped?", choices=["Yes","No"], validators=[DataRequired()])
    hasSpayed = SelectField("Has Spayed?", choices=["Yes","No"], validators=[DataRequired()])
    hasTrained = SelectField("Has trained?", choices=["Yes","No"], validators=[DataRequired()])
    isFriendlyWithChildren = SelectField("Is it friendly with children?", choices=["Yes","No","Unsure","Depends"],  validators=[InputRequired()])
    isFriendlyWithDogs = SelectField("Is it friendly with other dogs?", choices=["Yes","No","Unsure","Depends"], validators=[InputRequired()])
    sex = SelectField("Sex", choices=["Male","Female"], validators=[InputRequired()])
    breed = StringField("Breed", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    vetInfo = StringField("Vet Information", validators=[DataRequired()])
    #submit = SubmitField("Submit")


class EditPet(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    profileImage = StringField("Profile Image", validators=[DataRequired()])
    size = IntegerField("Size", validators=[DataRequired(), NumberRange(min=0,message="Size has to be a positive number")])
    ageYear = IntegerField("Age(Year)", validators=[DataRequired(), NumberRange(min=0,message="Size has to be a positive number")])
    ageMonth = IntegerField("Age(Month)", validators=[DataRequired(), NumberRange(min=0,message="Size has to be a positive number")])
    hasMicrochipped = SelectField("Has Microchipped?", choices=["Yes","No"], validators=[DataRequired()])
    hasSpayed = SelectField("Has Spayed?", choices=["Yes","No"], validators=[DataRequired()])
    hasTrained = SelectField("Has trained?", choices=["Yes","No"], validators=[DataRequired()])
    isFriendlyWithChildren = SelectField("Is it friendly with children?", choices=["Yes","No","Unsure","Depends"], validators=[InputRequired()])
    isFriendlyWithDogs = SelectField("Is it friendly with other dogs?", choices=["Yes","No","Unsure","Depends"], validators=[InputRequired()])
    sex = SelectField("Sex", choices=["Male","Female"], validators=[InputRequired()])
    breed = StringField("Breed", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    vetInfo = StringField("Vet Information", validators=[DataRequired()])
