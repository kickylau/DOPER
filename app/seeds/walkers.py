from app.models import db, Walker


def seed_walkers():
    walker1 = Walker(
        name="Jenny G",
        summary="I grow up with German Shepherds!",
        description="I care and provide the experience your puppy will have.",
        profile_image="https://images.unsplash.com/photo-1598135753163-6167c1a1ad65?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1469&q=80",
        location="Hudson Yards, New York, 10001",
        created_at=today,
        updated_at=today )


    db.session.add(walker1)
    db.session.commit()



def undo_walkers():
    db.session.execute('TRUNCATE walkers RESTART IDENTITY CASCADE;')
    db.session.commit()
