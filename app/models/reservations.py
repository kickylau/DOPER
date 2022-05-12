from .db import db
from datetime import datetime, date
from .reservation_invites import reservation_invites


class Reservation(db.Model):
    __tablename__ = 'reservations'

    id = db.Column(db.Integer, primary_key=True)
    user_id = db.Column(db.Integer, db.ForeignKey("users.id"), nullable=False)
    walker_id = db.Column(db.Integer, db.ForeignKey("walkers.id"), nullable=False)
    task_type = db.Column(db.String, nullable=False)
    task_length = db.Column(db.String, nullable=False)
    address = db.Column(db.String(255), nullable=False)
    comment = db.Column(db.String(255), nullable=False)
    date = db.Column(db.Date, nullable=False)
    time = db.Column(db.String, nullable=False)
    created_at = db.Column(db.DateTime, nullable=False, default=datetime.now())
    updated_at = db.Column(db.DateTime, nullable=False, default=datetime.now())

    user = db.relationship("User", back_populates="reservations")
    walkers = db.relationship("Walker", back_populates="reservations")

    invited_pets = db.relationship("Pet", secondary=reservation_invites, back_populates="invited_reservations")

    #secondary should be tne jointable name

    @property
    def to_dict(self):
        return {
            "id": self.id,
            "userId": self.user_id,
            "walkerId": self.walker_id,
            "taskType": self.task_type,
            "taskLength": self.task_length,
            "address": self.address,
            "comment": self.comment,
            "date": self.date,
            "time": self.time,
            "createdAt": self.created_at,
            "updatedAt": self.updated_at,
        }
