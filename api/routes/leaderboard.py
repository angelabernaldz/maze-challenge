from fastapi import APIRouter, Depends, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session 
from utils.puzzle import get_leaderboard
from database.database import get_db


router = APIRouter(prefix="/leaderboard")

security = HTTPBearer()

@router.get("/", status_code=status.HTTP_200_OK)
def get_leaderboared(credentials: HTTPAuthorizationCredentials = Depends(security), db: Session = Depends(get_db)):
    token = credentials.credentials

    return get_leaderboard(db)

