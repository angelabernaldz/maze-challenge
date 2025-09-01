from pydantic import BaseModel, EmailStr
from typing import Optional
from datetime import datetime
from typing import Any


class UserRegister(BaseModel):
    username: str
    email: EmailStr
    password: str


class UserLogIn(BaseModel):
    email: EmailStr
    password: str


class Puzzle(BaseModel):
    id: Optional[int]
    name: str
    grid: Any  # JSON -> may be dict or list
    created_at: Optional[datetime]


class AttemptCreate(BaseModel):
    user_id: int
    moves: str


class Attempt(BaseModel):
    id: Optional[int]
    user_id: int
    puzzle_id: int
    moves: Any  # JSON -> may be dict or list
    success: bool
    created_at: Optional[datetime]
