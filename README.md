# 🧩🧠 PuzzleBreaker

**PuzzleBreaker** is a fun puzzle-solving platform where users can register, log in, and test their logic skills.  
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

## 🚀 How to Run the Project

To run **PuzzleBreaker**, you need the following:

- **Node.js** (>= 18)  
- **pnpm** (install globally with `npm install -g pnpm`)  
- **Docker & Docker Compose** (for backend)  

### Backend
The backend runs inside Docker. Simply run Docker Compose to start the FastAPI server along with the PostgreSQL database. This sets up all necessary backend services automatically and will make the API available on `http://localhost:8001`.  

### Frontend
The frontend is a React application built with Vite. Navigate to the `app` folder, install dependencies using `pnpm install`, and start the development server with `pnpm run dev`. The frontend will run on `http://localhost:5173` and connect to the backend automatically.  

> ⚠️ **Note:** For simplicity in this test project, an `.env` file has been added to the repo. Although it is not a best practice to commit environment variables, this allows you to run the project without manually setting all required variables.  
> 
> You may still need to adjust some paths or settings, such as the local database connection or other environment-specific configurations, depending on your setup.
