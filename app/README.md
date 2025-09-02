# 🧩🧠 PuzzleBreaker

**MindBreaker** is a fun puzzle-solving platform where users can register, log in, and test their logic skills.  
The gameplay is simple but challenging:

- 🗝️ Collect keys before opening doors  
- 🚪 Avoid walls  
- 🌀 Use portals to navigate faster  
- ✅ All attempts are recorded (successes & fails)  

Currently, there are **3 puzzles available**.  
For each puzzle, the platform stores user attempts and validates correct/incorrect solutions.  
A dedicated **statistics page** shows results per puzzle for all users (leaderboard style).

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React** (with Vite)  
- 🎨 **TailwindCSS** for styling  

### Backend
- 🐍 **Python** with **FastAPI**  
- 🗄️ **PostgreSQL** as the database  
- 🔐 **JWT** for authentication  
- 🔑 **bcrypt** for password hashing  

### Other
- 🐳 **Docker & Docker Compose** for setup and environment   

---

## 🚀 Getting Started

### Requirements
- **Node.js** (>= 18)
- **pnpm** (install globally with: `npm install -g pnpm`)
- **React** (installed automatically via pnpm)
- **Vite** (installed automatically via pnpm)
- **Docker & Docker Compose** (for backend)

# 🌀💥 MazeBreaker

**MazeBreaker** is a fun puzzle-solving platform where users can register, log in, and test their logic skills.  
The gameplay is simple but challenging:

- 🗝️ Collect keys before opening doors  
- 🚪 Avoid walls  
- 🌀 Use portals to navigate faster  
- ✅ All attempts are recorded (successes & fails)  

Currently, there are **3 puzzles available**.  
For each puzzle, the platform stores user attempts and validates correct/incorrect solutions.  
A dedicated **statistics page** shows results per puzzle for all users (leaderboard style).

---

## 🛠️ Tech Stack

### Frontend
- ⚛️ **React** (with Vite)  
- 🎨 **TailwindCSS** for styling  

### Backend
- 🐍 **Python** with **FastAPI**  
- 🗄️ **PostgreSQL** as the database  
- 🔐 **JWT** for authentication  
- 🔑 **bcrypt** for password hashing  

### Other
- 🐳 **Docker & Docker Compose** for setup and environment  
- 🧪 **Unit & Component Tests** with Python (pytest) and React (Jest/React Testing Library)  

---

## 🚀 How to Run the Project

To run **MazeBreaker**, you need the following:

- **Node.js** (>= 18)  
- **pnpm** (install globally with `npm install -g pnpm`)  
- **Docker & Docker Compose** (for backend)  

### Backend
The backend runs inside Docker. Simply run Docker Compose to start the FastAPI server along with the PostgreSQL database. This sets up all necessary backend services automatically and will make the API available on `http://localhost:8000`.  

### Frontend
The frontend is a React application built with Vite. Navigate to the `frontend` folder, install dependencies using `pnpm install`, and start the development server with `pnpm run dev`. The frontend will run on `http://localhost:5173` and connect to the backend automatically.  

> ⚠️ **Note:** For simplicity in this test project, we have included a `.env` file in the repo. Although it is not a best practice to commit environment variables, this allows you to run the project without manually setting all required environment variables.



