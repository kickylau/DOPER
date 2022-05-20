from app.models import db, Reservation
from datetime import date


def seed_reservations():
    today = date.today()
    reservation1 = Reservation(
        user_id=1,
        walker_id=1,
        pet_id=1,
        task_type="Dog Walking",
        task_length="30 minutes",
        address="15 hudson yards, new york, #78c",
        comment="Georgie is very active!",
        # date="date(2022,5,12),"
        date="2022-05-27",
        time="6:00AM-9:00AM",
        created_at=today,
        updated_at=today )


    db.session.add(reservation1)
    db.session.commit()



def undo_reservations():
    db.session.execute('TRUNCATE reservations RESTART IDENTITY CASCADE;')
    db.session.commit()
