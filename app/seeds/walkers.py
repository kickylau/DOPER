from app.models import db, Walker
from datetime import date
#from PIL import Image


def seed_walkers():
    today = date.today()
    # myImage = Image.open("man.png")
    # myImage.show()
    walker1 = Walker(
        name="Jenny G.",
        summary="I grow up with German Shepherds!",
        description="I care and provide the experience your puppy will have.",
        profile_image="https://i.ibb.co/JtgzPNx/woman-2.png",
        location="Hudson Yards, New York, 10001",
        created_at=today,
        updated_at=today )
    walker2 = Walker(
        name="Lauren F.",
        summary="Upper East Side animal advocate",
        description="I live on the Upper East Side (6 blocks away from Central Park). I have been caring for animals since I was 5 years old (dogs, cats, reptiles, hamsters, mice, rabbits, fish etc). I have lived with dogs and cats my entire life. Being around animals make me happy. I consider and prioritize every single animal’s safety and well being that has ever been in my care.",
        profile_image="https://i.ibb.co/JtgzPNx/woman-2.png",
        location="Upper East Side, NYC",
        created_at=today,
        updated_at=today )
    walker3 = Walker(
        name="Marcelo B.",
        summary="Experienced Responsible Dog Sitter",
        description="Taking care of dogs is something that has followed me throughout my life. It started with my own family dog, a basset hound named Carmelo. My neighbors soon realized how good I was with dogs and would ask me to take care of them while they were away. I continued doing so throughout my whole life and now I have my own dog, a little Auggie named Orson",
        profile_image="https://i.ibb.co/PGpYHXc/man-1.png",
        location="Brooklyn",
        created_at=today,
        updated_at=today )
    walker4 = Walker(
        name="Gabriel A.",
        summary="Dog Owner & Dog Lover!!",
        description="I used to be a full time Walker in the city for years, I specialized in Dog Running as well as pet senior care! I have owned and worked with Dogs of all shapes, sizes and temperaments.",
        profile_image="https://i.ibb.co/JtgzPNx/woman-2.png",
        location="Midtown, NYC",
        created_at=today,
        updated_at=today )
    walker5 = Walker(
        name="Irene R.",
        summary="Rain or shine, I got your canine!",
        description="I have raised my pug since he was 9 weeks old, now 3. He is obedient & in great health. I was raised on a 60 acre farm, where my mother bred German Shepards. So I’m VERY familiar with large dogs as well. ",
        profile_image="https://i.ibb.co/JtgzPNx/woman-2.png",
        location="Upper East Side, NYC",
        created_at=today,
        updated_at=today )
    walker6 = Walker(
        name="Tristen N.",
        summary="Caring and fun doggie experiences.",
        description="I along with 2 other people and a dog, care and provide the experience your puppy will have. Each having multiple years experience in dog care. I am a full time dog care provider. I have all the amenities your doggies will need. Most of their experience will be physical activities. All dogs will spend most of the time having outdoor adventures. ",
        profile_image="https://i.ibb.co/PGpYHXc/man-1.png",
        location="Astoria-Long Island City, Long Island City, NY",
        created_at=today,
        updated_at=today )
    walker7 = Walker(
        name="Alvin W.",
        summary="Some of my best friends are dogs!",
        description="Some of my best friends are dogs. And I hang out with the coolest cats! As a kid, I have always believed dogs were part of the family. ",
        profile_image="https://i.ibb.co/PGpYHXc/man-1.png",
        location="Upper East Side, NYC",
        created_at=today,
        updated_at=today )
    walker8 = Walker(
        name="Devon F.",
        summary="Upper East Side animal advocate",
        description="I am an NYC-based performer & dance teacher living in a beautiful spacious apartment at 73rd & Columbus. I LOVE dogs and love having a furry friend at home to look after and play with! I grew up with three beautiful yellow labradors at home and was always drawn to dogs; being a dogsitter has been the perfect way for me to get my fix of puppy love! ",
        profile_image="https://i.ibb.co/PGpYHXc/man-1.png",
        location="Upper West Side, NYC",
        created_at=today,
        updated_at=today )
    walker9 = Walker(
        name="Georgia J.",
        summary="Dog-crazy experienced owner&sitter!",
        description="My name is Georgie, I was born and raised in London but have been in the city on and off for 7 years! I live in leafy & doggy friendly Chelsea, on the West side, and have been a full-time Rover sitter for the past few years which has been a JOY! I grew up owning Springer Spaniels and Daschunds which, I suppose, is where I got my love of animals!",
        profile_image="https://i.ibb.co/PGpYHXc/man-1.png",
        location="Chelsea, NYC",
        created_at=today,
        updated_at=today )
    walker10 = Walker(
        name="Jade B.",
        summary="Home away from home for fur babies",
        description="I have over three decades of experience in caring for dogs large and small. I've attended to senior dogs, puppies, expectant canines and even a three legged Great Dane. Ive always loved dogs. its amazing what they can do for your heart. Use code JADEB07295 to receive $20 off your first booking with me.",
        profile_image="https://i.ibb.co/JtgzPNx/woman-2.png",
        location="Hoboken, NJ",
        created_at=today,
        updated_at=today )


    db.session.add(walker1)
    db.session.add(walker2)
    db.session.add(walker3)
    db.session.add(walker4)
    db.session.add(walker5)
    db.session.add(walker6)
    db.session.add(walker7)
    db.session.add(walker8)
    db.session.add(walker9)
    db.session.add(walker10)
    db.session.commit()



def undo_walkers():
    db.session.execute('TRUNCATE walkers RESTART IDENTITY CASCADE;')
    db.session.commit()
