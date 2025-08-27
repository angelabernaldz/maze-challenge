import os
from sqlalchemy import create_engine, text
from sqlalchemy.exc import OperationalError

DATABASE_URL = os.getenv(
    "DATABASE_URL",
    "postgresql+psycopg2://user:secret@db:5432/maze_db"
)

engine = create_engine(DATABASE_URL, future=True)

try:
    with engine.connect() as conn:
        # envolver el query con text()
        tables = conn.execute(
            text("SELECT table_name FROM information_schema.tables WHERE table_schema='public';")
        ).fetchall()
        print("Tables:", [t[0] for t in tables])
except OperationalError as e:
    print("❌ Error while connecting to DB:", e)





