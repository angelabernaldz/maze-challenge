import os
from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from routes.auth import router as auth_router
from routes.puzzle import router as puzzle_router
from routes.leaderboard import router as leaderboard_router
from dotenv import load_dotenv

load_dotenv()  

app = FastAPI()
app.include_router(auth_router)
app.include_router(puzzle_router)
app.include_router(leaderboard_router)

origins = [os.getenv("FRONTEND_URL")]

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)
