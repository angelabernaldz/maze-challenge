from sqlalchemy import create_engine
from sqlalchemy.orm import sessionmaker
from dotenv import load_dotenv
from schemas.models import Base, PuzzleModel
from database.populate_puzzles import populate_puzzles
import os

load_dotenv()   

DATABASE_URL = os.getenv("DATABASE_URL")

engine = create_engine(DATABASE_URL)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base.metadata.create_all(bind=engine)

# TODO: remove populating DB with puzzles, only to be done once 
db = SessionLocal()
try:
    puzzle_count = db.query(PuzzleModel).count()
    if puzzle_count == 0:
        populate_puzzles(db)
finally:
    db.close()

# Dependency for FastAPI
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()
