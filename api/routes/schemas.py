from sqlalchemy import Column, Integer, String, TIMESTAMP, ForeignKey, JSON, Boolean
from sqlalchemy.sql import func
from database import Base


class User(Base):
    __tablename__ = 'users'
    id = Column(Integer, primary_key=True)
    username = Column(String, nullable=False)
    email = Column(String, unique=True, nullable=False)
    password = Column(String, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())


class Puzzle(Base):
    __tablename__ = 'puzzles'
    id = Column(Integer, primary_key=True)
    name = Column(String, nullable=False)
    grid = Column(JSON, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())


class Attempt(Base):
    __tablename__ = 'attempts'
    id = Column(Integer, primary_key=True)
    user_id = Column(Integer, ForeignKey('users.id'), nullable=False)
    puzzle_id = Column(Integer, ForeignKey('puzzles.id'), nullable=False)
    moves = Column(JSON, nullable=False)
    success = Column(Boolean, nullable=False)
    created_at = Column(TIMESTAMP(timezone=True), server_default=func.now())