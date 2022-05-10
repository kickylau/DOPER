from flask_wtf import FlaskForm
from wtforms import StringField, IntegerField, SubmitField, SelectField, BooleanField, DateField
from wtforms.validators import DataRequired


class NewPet(FlaskForm):
    userId = IntegerField("User", validators=[DataRequired()])
    name = StringField("Name", validators=[DataRequired()])
    profileImage = StringField("Profile Image", validators=[DataRequired()])
    size = IntegerField("Size", validators=[DataRequired()])
    ageYear = IntegerField("Age(Year)", validators=[DataRequired()])
    ageMonth = IntegerField("Age(Month)", validators=[DataRequired()])
    hasMicrochipped = BooleanField("Has Microchipped?", validators=[DataRequired()])
    hasSpayed = BooleanField("Has Spayed?", validators=[DataRequired()])
    hasTrained = BooleanField("Has trained?", validators=[DataRequired()])
    isFriendlyWithChildren = SelectField("Is it friendly with children?", choices=[(1,"Yes"),(2,"No"),(3,"Unsure"),(4,"Depends")], validators=[DataRequired()])
    isFriendlyWithDogs = SelectField("Is it friendly with other dogs?", choices=[(1,"Yes"),(2,"No"),(3,"Unsure"),(4,"Depends")], validators=[DataRequired()])
    sex = SelectField("Sex", choices=[(1,"Male"),(2,"Female")], validators=[DataRequired()])
    breed = StringField("Breed", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    vetInfo = StringField("Vet Information", validators=[DataRequired()])
    submit = SubmitField("Submit")


class EditPet(FlaskForm):
    name = StringField("Name", validators=[DataRequired()])
    profileImage = StringField("Profile Image", validators=[DataRequired()])
    size = IntegerField("Size", validators=[DataRequired()])
    ageYear = IntegerField("Age(Year)", validators=[DataRequired()])
    ageMonth = IntegerField("Age(Month)", validators=[DataRequired()])
    hasMicrochipped = BooleanField("Has Microchipped?", validators=[DataRequired()])
    hasSpayed = BooleanField("Has Spayed?)", validators=[DataRequired()])
    hasTrained = BooleanField("Has trained", validators=[DataRequired()])
    isFriendlyWithChildren = SelectField("Is it friendly with children?", choices=[(1,"Yes"),(2,"No"),(3,"Unsure"),(4,"Depends")], validators=[DataRequired()])
    isFriendlyWithDogs = SelectField("Is it friendly with other dogs?", choices=[(1,"Yes"),(2,"No"),(3,"Unsure"),(4,"Depends")], validators=[DataRequired()])
    sex = SelectField("Sex", choices=[(1,"Male"),(2,"Female")], validators=[DataRequired()])
    breed = StringField("Breed", validators=[DataRequired()])
    description = StringField("Description", validators=[DataRequired()])
    vetInfo = StringField("Vet Information", validators=[DataRequired()])
