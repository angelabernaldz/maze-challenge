from fastapi import APIRouter, Depends, HTTPException, status
from sqlalchemy.orm import Session 
from schemas.schemas import User
from schemas.models import UserModel
from database import get_db
import jwt
import os
from utils.user import save_user_to_db
from utils.security import verify_password

router = APIRouter(prefix='/auth')


@router.post('/register', status_code = 201)
def register(user: User, db: Session = Depends(get_db)):

    existing_user = db.query(UserModel).filter(UserModel.email == user.email).first()

    if existing_user:
        raise HTTPException(status_code=400, detail='Email already in use')
    
    created_user = save_user_to_db(db, user)

    return {"Message": "User created successfully",
            "user": {
                "id": created_user.id,
                "username": created_user.username,
                "email": created_user.email,
                "created_at": created_user.created_at
            }
    }


@router.post('/login')
def login(email: str, password: str, db: Session = Depends(get_db)):
    # need to check that user exists and that password matches password in db
    user = db.query(UserModel).filter(UserModel.email == email).first()

    if not user:
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail='Invalid email')
    
    # Verify password
    if not verify_password(password, user.password):
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail='Invalid password')
    
    token = jwt.encode({"payload": str(user.id)},
                        key=os.getenv("SECRET_KEY"), 
                        algorithm="HS256")
    
    return {"Message": "User logged in successfully",
            "access_token": token, 
            "token_type": "bearer"}








