from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, SelectField, BooleanField, DateField, RadioField
from wtforms.validators import DataRequired, InputRequired, NumberRange, URL


class NewPet(FlaskForm):
    userId = IntegerField("User", validators=[DataRequired()])
    name = StringField("Name", validators=[DataRequired(message="Please provide a name for your pet")])
    profileImage = StringField("Profile Image", validators=[DataRequired(), URL(require_tld=True, message="Please provide a valid image URL")])
    size = IntegerField("Size", validators=[InputRequired(), NumberRange(min=1,message="Size has to be a positive integer")])
    ageYear = IntegerField("Age(Year)", validators=[InputRequired(), NumberRange(min=0,message="Age has to be 0 or a positive integer")])
    ageMonth = IntegerField("Age(Month)", validators=[InputRequired(), NumberRange(min=0,max=12,message="Month has to be an integer between 0-12")])
    hasMicrochipped = SelectField("Has Microchipped?", choices=["Yes","No"], validators=[InputRequired(message="Please respond this field")])
    hasSpayed = SelectField("Has Spayed?", choices=["Yes","No"], validators=[InputRequired(message="Please respond this field")])
    hasTrained = SelectField("Has trained?", choices=["Yes","No"], validators=[InputRequired(message="Please respond this field")])
    isFriendlyWithChildren = SelectField("Is it friendly with children?", choices=["Yes","No","Unsure","Depends"], validators=[InputRequired(message="Please respond this field")])
    isFriendlyWithDogs = SelectField("Is it friendly with other dogs?", choices=["Yes","No","Unsure","Depends"], validators=[InputRequired(message="Please respond this field")])
    sex = SelectField("Sex", choices=["Male","Female"], validators=[InputRequired("Please respond this field")])
    breed = StringField("Breed", validators=[DataRequired(message="Please provide the breed for your pet")])
    description = StringField("Description", validators=[DataRequired(message="Please provide a description for your pet")])
    vetInfo = StringField("Vet Information", validators=[DataRequired(message="Please provide the vet info for your pet")])
    #submit = SubmitField("Submit")


class EditPet(FlaskForm):
    name = StringField("Name", validators=[DataRequired(message="Please provide a name for your pet")])
    profileImage = StringField("Profile Image", validators=[DataRequired(), URL(require_tld=True, message="Please provide a valid image URL")])
    size = IntegerField("Size", validators=[InputRequired(), NumberRange(min=1,message="Size has to be a positive integer")])
    ageYear = IntegerField("Age(Year)", validators=[InputRequired(), NumberRange(min=0,message="Age has to be 0 or a positive integer")])
    ageMonth = IntegerField("Age(Month)", validators=[InputRequired(), NumberRange(min=0,max=12,message="Month has to be an integer between 0-12")])
    hasMicrochipped = SelectField("Has Microchipped?", choices=["Yes","No"], validators=[InputRequired(message="Please respond this field")])
    hasSpayed = SelectField("Has Spayed?", choices=["Yes","No"], validators=[InputRequired(message="Please respond this field")])
    hasTrained = SelectField("Has trained?", choices=["Yes","No"], validators=[InputRequired(message="Please respond this field")])
    isFriendlyWithChildren = SelectField("Is it friendly with children?", choices=["Yes","No","Unsure","Depends"], validators=[InputRequired(message="Please respond this field")])
    isFriendlyWithDogs = SelectField("Is it friendly with other dogs?", choices=["Yes","No","Unsure","Depends"], validators=[InputRequired(message="Please respond this field")])
    sex = SelectField("Sex", choices=["Male","Female"], validators=[InputRequired("Please respond this field")])
    breed = StringField("Breed", validators=[DataRequired(message="Please provide the breed for your pet")])
    description = StringField("Description", validators=[DataRequired(message="Please provide a description for your pet")])
    vetInfo = StringField("Vet Information", validators=[DataRequired(message="Please provide the vet info for your pet")])
