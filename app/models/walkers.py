from .db import db

class Walker(db.Model):
    __tablename__ = 'walkers'

    id = db.Column(db.Integer, primary_key=True)
    name = db.Column(db.String(50), nullable=False)
    summary = db.Column(db.String(100), nullable=False)
    description = db.Column(db.String(500), nullable=False)
    profile_image = db.Column(db.String, nullable=False)
    location = db.Column(db.String(100), nullable=False)
    created_at = db.Column(db.Date, nullable=False)
    updated_at = db.Column(db.Date, nullable=False)

    reservations = db.relationship("Reservation", back_populates="walkers", cascade="all, delete-orphan")


    @property
    def to_dict(self):
        return {
            "id": self.id,
            "name": self.name,
            "summary": self.summary,
            "description": self.description,
            "profileImage": self.profile_image,
            "location": self.location,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }
