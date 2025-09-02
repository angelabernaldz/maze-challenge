from typing import List
from sqlalchemy.orm import Session
from sqlalchemy import func, Integer 
from schemas.models import AttemptModel, UserModel, PuzzleModel


def verify_puzzle_solution(input_moves: List[str], correct_moves: List[str]):
    return input_moves == correct_moves


def get_leaderboard(db: Session):
    # Group results by puzzle and then user
    results = (
        db.query(
            AttemptModel.puzzle_id,
            PuzzleModel.title.label("puzzle_title"),
            AttemptModel.user_id,
            UserModel.username,
            func.count(AttemptModel.id).label("attempts"),
            func.sum(func.cast(AttemptModel.success, Integer)).label("success"),
            func.sum(func.cast(~AttemptModel.success, Integer)).label("fails")
        )
        .join(UserModel, UserModel.id == AttemptModel.user_id)
        .join(PuzzleModel, PuzzleModel.id == AttemptModel.puzzle_id)
        .group_by(AttemptModel.puzzle_id, PuzzleModel.title, AttemptModel.user_id, UserModel.username)
        .all()
    )

    # Reorder by puzzle id
    leaderboard = {}
    for r in results:
        puzzle_id = r.puzzle_id
        if puzzle_id not in leaderboard:
            leaderboard[puzzle_id] = {
                "puzzle_id": puzzle_id,
                "puzzle_title": r.puzzle_title,
                "users": []
            }
        leaderboard[puzzle_id]["users"].append({
            "user_id": r.user_id,
            "username": r.username,
            "attempts": r.attempts,
            "success": r.success,
            "fails": r.fails
        })

    return list(leaderboard.values())