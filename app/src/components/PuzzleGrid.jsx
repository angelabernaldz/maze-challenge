import { useState } from 'react'

// 0 = camino, 1 = pared
const mazes = [
  [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ],
  [
    [1, 1, 1, 1, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 1, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ],
  [
    [1, 1, 1, 1, 1],
    [1, 0, 0, 1, 1],
    [1, 1, 0, 0, 1],
    [1, 0, 0, 0, 1],
    [1, 1, 1, 1, 1]
  ]
];

function EmptyMaze() {
  const [currentMazeIndex, setCurrentMazeIndex] = useState(0)
  const maze = mazes[currentMazeIndex];

  const nextMaze = () => {
    setCurrentMazeIndex((currentMazeIndex + 1) % mazes.length);
  }

  return (
    <div>
      <h2>Maze Puzzle {currentMazeIndex + 1}</h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: `repeat(${maze[0].length}, 50px)`,
          gap: "4px",
          marginBottom: "10px"
        }}
      >
        {maze.map((row, rowIndex) =>
          row.map((cell, colIndex) => (
            <div
              key={`${rowIndex}-${colIndex}`}
              style={{
                width: 50,
                height: 50,
                backgroundColor: cell === 1 ? "#333" : "#fff",
                borderRadius: 4,
                border: "1px solid #ccc"
              }}
            />
          ))
        )}
      </div>
      <button onClick={nextMaze}>Next Maze</button>
    </div>
  );
}


export default EmptyMaze