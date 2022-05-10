from app.models import db, Reservation


def seed_reservations():
    reservation1 = Reservation(
        user_id=1,
        walker_id=1,
        pet_id=1,
        task_type="Dog Walking",
        task_length="https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        address="15 hudson yards, new york, #78c",
        comment="Georgie is very active!",
        date=(2022,5,12),
        time="6:00AM-9:00AM"
        created_at=today,
        updated_at=today )


    db.session.add(reservation1)
    db.session.commit()



def undo_reservations():
    db.session.execute('TRUNCATE reservations RESTART IDENTITY CASCADE;')
    db.session.commit()
