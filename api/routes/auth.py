from fastapi import APIRouter, Depends, HTTPException, status
from fastapi.security import HTTPBearer, HTTPAuthorizationCredentials
from sqlalchemy.orm import Session 
from schemas.schemas import UserRegister, UserLogIn
from schemas.models import UserModel
from database.database import get_db
import jwt
import os
from utils.user import save_user_to_db
from utils.security import verify_password

router = APIRouter(prefix="/auth")

@router.post("/register", status_code=status.HTTP_201_CREATED)
def register(user: UserRegister, db: Session = Depends(get_db)):

    existing_user = db.query(UserModel).filter(UserModel.email == user.email).first()

    if existing_user:
        raise HTTPException(status_code=status.HTTP_400_BAD_REQUEST, detail='Email already in use')
    
    created_user = save_user_to_db(db, user)

    return {"Message": "User created successfully",
            "user": {
                "id": created_user.id,
                "username": created_user.username,
                "email": created_user.email,
                "created_at": created_user.created_at
            }
    }


@router.post("/login")
def login(request: UserLogIn, db: Session = Depends(get_db), status_code=status.HTTP_200_OK):
    # need to check that user exists and that password matches password in db
    user = db.query(UserModel).filter(UserModel.email == request.email).first()

    if not user:
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail='Invalid email')
    
    # Verify password
    if not verify_password(request.password, user.password):
        raise HTTPException(status_code = status.HTTP_401_UNAUTHORIZED, detail='Invalid password')
    
    token = jwt.encode({"userId": str(user.id)},
                        key=os.getenv("SECRET_KEY"), 
                        algorithm="HS256")
    
    return {"Message": "User logged in successfully",
            "access_token": token, 
            "token_type": "bearer"}


security = HTTPBearer()

def get_current_user(credentials: HTTPAuthorizationCredentials = Depends(security)):
    token = credentials.credentials
    try:
        payload = jwt.decode(token, os.getenv("SECRET_KEY"), algorithms=["HS256"])
        user_id = payload.get("userId")
        if user_id is None:
            raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
        return user_id
    except jwt.PyJWTError:
        raise HTTPException(status_code=status.HTTP_401_UNAUTHORIZED, detail="Invalid token")
    

@router.get("/me", status_code=status.HTTP_200_OK)
def read_current_user(user_id: str = Depends(get_current_user), db: Session = Depends(get_db)):
    user = db.query(UserModel).filter(UserModel.id == int(user_id)).first()

    if not user:
        raise HTTPException(status_code=status.HTTP_404_NOT_FOUND, detail="User not found")
    
    # Avoid sending password to front end
    return {
        "id": user.id,
        "username": user.username,
        "email": user.email,
        "created_at": user.created_at
    }












