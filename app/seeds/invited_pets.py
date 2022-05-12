from app.models import db, reservation_invites

def seed_invited_pets():

    seed1 = reservation_invites.insert().values(pet_id = 1, reservation_id = 1)
    seed2 = reservation_invites.insert().values(pet_id = 2, reservation_id = 1)


    db.session.execute(seed1)
    db.session.execute(seed2)
    db.session.commit()


def undo_invited_pets():

    db.session.execute("TRUNCATE reservation_invites RESTART IDENTITY CASCADE")
    db.session.commit()
