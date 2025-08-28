from sqlalchemy.orm import Session
from schemas.models import UserModel
from schemas.schemas import User
from utils.security import hash_password


def save_user_to_db(db: Session, user: User):

    hashed_pw = hash_password(user.password)

    db_user = UserModel(
        username=user.username,
        email=user.email,
        password=hashed_pw
    )
    db.add(db_user)
    db.commit()
    db.refresh(db_user)
    return db_user


