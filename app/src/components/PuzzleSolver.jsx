import { useEffect, useState } from 'react'
import logic from '../logic'
import { cellColor, moveToArrow } from '../utils/puzzleHelpers.jsx'

function PuzzleSolver({ puzzle }) {
  const maze = puzzle.grid
  const [moves, setMoves] = useState([])
  const [attemptSuccess, setAttemptSuccess] = useState(null)

  const [userStats, setUserStats] = useState({
    totalAttempts: 0,
    totalSuccess: 0,
    totalFails: 0
  })

  const handleKeyDown = (event) => {
    event.preventDefault()

    let move 
    switch(event.key) {
      case "ArrowUp":
        move = "up"
        break
      case "ArrowDown":
        move = "down"
        break
      case "ArrowLeft":
        move = "left"
        break
      case "ArrowRight":
        move = "right"
        break
      default: 
        return
    }
    setMoves(prev => {
      if (prev.length >= 20) return prev
      return [...prev, move]
    })
  } 

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown)
    return () => window.removeEventListener("keydown", handleKeyDown)
  }, [])

  const handleSubmit = () => {
    logic.getUser()
    .then(user => {
      const attempt = {
        user_id: user.id,
        moves: moves,
      }
      console.log(attempt, 'ATTEMPT TO SUBMIT')
      logic.submitAttempt(puzzle.id, attempt)
      .then(createdAttempt => {
        setAttemptSuccess(createdAttempt.success)
          console.log(createdAttempt, 'created attemtp')
          setUserStats(prev => ({
            totalAttempts: prev.totalAttempts + 1,
            totalSuccess: prev.totalSuccess + (createdAttempt.success ? 1 : 0),
            totalFails: prev.totalFails + (createdAttempt.success ? 0 : 1)
          }))
          setMoves([])
      })
      .catch(err => {
        console.error('Error submitting attempt', err)
      })
    })
  }

  const cellSize = 85

return (
  <div className="flex flex-col justify-start items-center min-h-0 w-full">
    {/* Puzzle container */}
    <div className="text-center w-full max-w-3xl p-0">
      <h2 className="text-3xl font-bold mb-4">Maze Puzzle: {puzzle.title}</h2>

      <div className="flex mb-4 justify-start items-center">
        {/* Statistics */}
        <div className="flex flex-col justify-center text-left text-white mr-6">
          <h3 className="text-3xl font-bold mb-2">Statistics</h3>
          <div className="text-2xl">🟢 Attempts: {userStats.totalAttempts}</div>
          <div className="text-2xl">✅ Success: {userStats.totalSuccess}</div>
          <div className="text-2xl">❌ Fails: {userStats.totalFails}</div>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${maze[0].length}, ${cellSize}px)`,
            gap: "6px",
            marginLeft: "120px", 
          }}
        >
          {maze.map((row, rowIndex) =>
            row.map((cell, colIndex) => (
              <div
                key={`${rowIndex}-${colIndex}`}
                style={{
                  width: cellSize,
                  height: cellSize,
                  backgroundColor: cellColor(cell),
                  borderRadius: 4,
                  border: "1px solid #ccc",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  fontWeight: "bold",
                  color: "#000",
                }}
              >
                {cell !== "." && cell}
              </div>
            ))
          )}
        </div>
      </div>

      <p className="mt-2 text-gray-700 text-xl">{puzzle.description}</p>

      <div className="mt-4 text-xl text-white mb-4 text-left mr-8">
        <strong>Movements:</strong>   
        {moves.map((m, i) => (
          <span 
            key={i} 
            className="mx-1">{moveToArrow(m)}
          </span>
        ))}
      </div>

      <div className="flex justify-center mt-2">
        <button
          onClick={handleSubmit}
          className="btn btn-ghost px-6 py-2 text-white rounded-lg bg-blue-400 text-xl hover:scale-105"
        >
          Submit solution
        </button>
      </div>
    </div>
  </div>
)


}

export default PuzzleSolver