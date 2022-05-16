from app.models import db, Pet
from datetime import date


def seed_pets():
    today = date.today()
    pet1 = Pet(
        user_id=1,
        name="Georgie",
        profile_image="https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        size=85,
        age_year=2,
        age_month=2,
        has_microchipped="Yes",
        has_spayed="Yes",
        has_trained="Yes",
        is_friendly_with_children="Yes",
        is_friendly_with_dogs="Yes",
        sex="Male",
        breed="German Shepherd",
        description="say hi to georgie",
        vet_info="Pure Paws at Hells Kitchen",
        created_at=today,
        updated_at=today )


    pet2 = Pet(
        user_id=1,
        name="Hulu",
        profile_image="https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        size=25,
        age_year=3,
        age_month=0,
        has_microchipped="Yes",
        has_spayed="No",
        has_trained="No",
        is_friendly_with_children="Yes",
        is_friendly_with_dogs="No",
        sex="Female",
        breed="shibayinu",
        description="say hi to hulu",
        vet_info="No Vet",
        created_at=today,
        updated_at=today )


    db.session.add(pet1)
    db.session.add(pet2)
    db.session.commit()


# Uses a raw SQL query to TRUNCATE the users table.
# SQLAlchemy doesn't have a built in function to do this
# TRUNCATE Removes all the data from the table, and RESET IDENTITY
# resets the auto incrementing primary key, CASCADE deletes any
# dependent entities
def undo_pets():
    db.session.execute('TRUNCATE pets RESTART IDENTITY CASCADE;')
    db.session.commit()
