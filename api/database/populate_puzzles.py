from schemas.models import PuzzleModel
from datetime import datetime, timezone

# S - Start - player start position
# E - Exit - Goal to reach to finish the puzzle
# # - Wall - Impassable block
# . Empty -  Free space the player can move into
# K - Key - Must be collected to open doors
# D - Door - Can only be passed if the player has collected the key
# P1, P2 - Portals - Stepping on one instantly teleports the player to the other 
# Success only if E (Exit) is reached
puzzles_data = [
    {
        "title": "Key Door Unique 5x5",
        "description": "Pick up the key and unlock the door to reach the exit. Solo hay un camino posible.",
        "grid": [
            ["S", "#", "#", "#", "#"],
            [".", ".", ".", "K", "#"],
            ["#", "#", ".", ".", "#"],
            ["#", "#", "D", "#", "#"],
            ["#", "#", ".", ".", "E"]
        ],
        "solution": [
            "down", "right", "right", "right", "down", "left", "down", "down", "right", "right"]
    },
    {
        "title": "Portal Hop",
        "description": "Use portals in sequence to reach the exit.",
        "grid": [
            ["S", ".", ".", "#", "."],
            ["#", "P1", "#", ".", "."],
            [".", ".", ".", "#", "."],
            [".", "P2", ".", "#", "."],
            ["#", "#", ".", ".", "E"]
        ],
        "solution": ["right","down","right","down","right","right"]
    },
    {
        "title": "Key, Door and Portal",
        "description": "Collect the key, unlock the door, then use the portal to finish.",
        "grid": [
            ["S", ".", "#", ".", "P1"],
            [".", "#", ".", ".", "."],
            ["K", ".", "D", "#", "."],
            [".", "#", ".", "#", "."],
            [".", ".", "P2", ".", "E"]
        ],
        "solution": ["down","down","right","right","up","right","up","right","right","right"]
    }
]



def populate_puzzles(db):
    for puzzle in puzzles_data:
        puzzle_obj = PuzzleModel(
            title=puzzle['title'],
            description=puzzle['description'],
            grid=puzzle['grid'],
            solution=puzzle['solution'],
            created_at=datetime.now(timezone.utc)
        )
        db.add(puzzle_obj)
    db.commit()
    print("3 puzzles have been added to the database")



