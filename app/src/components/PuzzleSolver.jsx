import { useEffect, useState } from 'react'
import logic from '../logic'

function PuzzleSolver({ puzzle }) {
  const maze = puzzle.grid
  const [moves, setMoves] = useState([])
  const [attemptSuccess, setAttemptSuccess] = useState(null)

  const cellColor = (cell) => {
    switch(cell) {
      case "S": return "#4ade80"   // green start
      case "E": return "#f87171"   // red exit
      case "K": return "#facc15"   // yellow key
      case "D": return "#60a5fa"   // blue door
      case "P1":
      case "P2": return "#a78bfa"  // purple portals
      case "#": return "#333"      // wall
      case ".": return "#fff"      // empty
      default: return "#fff"
    }
  }

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
    console.log('Here we send movs to back end')
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
      })
      .catch(err => {
        console.error('Error submitting attempt', err)
      })
    })
  }

  const cellSize = 85

  return (
    <div className="min-h-screen flex flex-col justify-start items-center m-0">
      <div className="text-center w-full max-w-3xl p-0">
        <h2 className="text-3xl font-bold mb-4">Maze Puzzle: {puzzle.title}</h2>
        <div className="flex justify-center mb-4">
          <div
            style={{
              display: "grid",
              gridTemplateColumns: `repeat(${maze[0].length}, ${cellSize}px)`,
              gap: "6px",
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

        <div className="mt-4 text-xl text-white mb-2 text-left mr-8">
          <strong>Movements:</strong> {moves.join(", ")}
        </div>

        <div className="flex justify-center">
          <button
            onClick={handleSubmit}
            className="mt-2 p-2 text-xl bg-blue-500 text-white rounded"
          >
            Submit
          </button>
        </div>
      </div>
    </div>
  )
}

export default PuzzleSolver