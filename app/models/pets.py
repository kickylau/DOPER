from .db import db
from datetime import datetime
from .reservation_invites import reservation_invites

class Pet(db.Model):
    __tablename__ = 'pets'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    name = db.Column(db.String(50), nullable=False)
    profile_image = db.Column(db.String, nullable=False)
    size = db.Column(db.Integer, nullable=False)
    age_year = db.Column(db.Integer, nullable=False)
    age_month = db.Column(db.Integer, nullable=False)
    has_microchipped = db.Column(db.Boolean, default=False,nullable=False)
    has_spayed = db.Column(db.Boolean, default=False,nullable=False)
    has_trained = db.Column(db.Boolean, default=False,nullable=False)
    is_friendly_with_children = db.Column(db.String, nullable=False)
    is_friendly_with_dogs = db.Column(db.String, nullable=False)
    sex = db.Column(db.String, nullable=False)
    breed = db.Column(db.String(50), nullable=False)
    description = db.Column(db.String(255), nullable=False)
    vet_info = db.Column(db.String(255), nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship("User", back_populates="pets")

    invited_reservations = db.relationship("Reservation", secondary=reservation_invites, back_populates="invited_pets")

    # @property
    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "name": self.name,
            "profileImage": self.profile_image,
            "size": self.size,
            "ageYear": self.age_year,
            "ageMonth": self.age_month,
            "hasMicrochipped": self.has_microchipped,
            "hasSpayed": self.has_spayed,
            "hasTrained": self.has_trained,
            "isFriendlyWithChildren": self.is_friendly_with_children,
            "isFriendlyWithDogs": self.is_friendly_with_dogs,
            "sex": self.sex,
            "breed": self.breed,
            "description": self.description,
            "vetInfo": self.vet_info,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }
