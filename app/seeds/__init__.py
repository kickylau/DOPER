from flask.cli import AppGroup
from .users import seed_users, undo_users
from .pets import seed_pets, undo_pets
from .reservations import seed_reservations, undo_reservations
from .walkers import seed_walkers, undo_walkers

# Creates a seed group to hold our commands
# So we can type `flask seed --help`
seed_commands = AppGroup('seed')


# Creates the `flask seed all` command
@seed_commands.command('all')
def seed():
    seed_users()
    seed_pets()
    seed_reservations()
    seed_walkers()




# Creates the `flask seed undo` command
@seed_commands.command('undo')
def undo():
    undo_users()
    undo_pets()
    undo_reservations()
    undo_walkers()
    # Add other undo functions here
