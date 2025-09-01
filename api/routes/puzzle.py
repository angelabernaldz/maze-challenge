from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session 
from database.database import get_db
from schemas.models import PuzzleModel, AttemptModel
from datetime import datetime, timezone
from schemas.schemas import AttemptCreate

router = APIRouter(prefix="/puzzles")

@router.get("/", status_code=status.HTTP_200_OK)
def get_all_puzzles(db: Session =  Depends(get_db)):
    puzzles = db.query(PuzzleModel).all()
    return puzzles


@router.post("/{puzzle_id}/attempts", status_code=status.HTTP_201_CREATED)
def submit_attempt(puzzle_id: int, attempt: AttemptCreate, db: Session = Depends(get_db)):
    puzzle = db.query(PuzzleModel).filter(PuzzleModel.id == puzzle_id)
    if not puzzle:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="Puzzle not found")

    success = True # need to check if attempt is successful or not (call auxiliary function)

    new_attempt = AttemptModel(
        user_id=attempt.user_id, 
        puzzle_id=puzzle_id,
        moves=attempt.moves,
        success=success,
        created_at=datetime.now(timezone.utc)

    )
    db.add(new_attempt)
    db.commit()
    db.refresh(new_attempt)

    return new_attempt 



