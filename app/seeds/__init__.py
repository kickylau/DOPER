from flask.cli import AppGroup
from .users import seed_users, undo_users
from .pets import seed_pets, undo_pets
from .walkers import seed_walkers, undo_walkers
from .reservations import seed_reservations, undo_reservations
from .invited_pets import seed_invited_pets, undo_invited_pets


# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_pets()
    seed_walkers()
    seed_reservations()
    seed_invited_pets()





# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_pets()
    undo_walkers()
    undo_reservations()
    undo_invited_pets()

    # Add other undo functions here



#seeding has order matter
