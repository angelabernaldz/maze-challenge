from schemas.models import PuzzleModel
from datetime import datetime, timezone


puzzles_data = [
    {
        "title": "Maze 1",
        "description": "To be added...",
        "grid": "to be added"
    },
    {
        "title": "Maze 2",
        "description": "To be added...",
        "grid": "to be added"
    },
    {
        "title": "Maze 3",
        "description": "To be added...",
        "grid": "to be added"
    }
]


def populate_puzzles(db):
    for puzzle in puzzles_data:
        puzzle_obj = PuzzleModel(
            title=puzzle['title'],
            description=puzzle['description'],
            grid=puzzle['grid'],
            created_at=datetime.now(timezone.utc)
        )
        db.add(puzzle_obj)
    db.commit()
    print("3 puzzles have been added to the database")



