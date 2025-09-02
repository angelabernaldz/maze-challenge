function Instructions () {
  return (
    <div className="bg-blue-50 border-l-4 border-blue-400 p-6 rounded-lg max-w-md mx-auto md:mx-0 md:ml-6">
      <h2 className="text-3xl font-bold mb-4 text-blue-700 flex items-center">
        🧩 Maze Puzzle Instructions
      </h2>
      
      <p className="text-lg mb-3">
        Solve the maze by moving your player from <strong>S</strong> (Start) to <strong>E</strong> (Exit). Collect keys, open doors, and use portals wisely!
      </p>

      <ul className="list-disc list-inside text-lg space-y-2">
        <li>🟢 <strong>S - Start</strong>: Player start position</li>
        <li>🏁 <strong>E - Exit</strong>: Goal to reach to finish the puzzle</li>
        <li>🧱 <strong># - Wall</strong>: Impassable block</li>
        <li>⬜ <strong>. - Empty</strong>: Free space the player can move into</li>
        <li>🗝️ <strong>K - Key</strong>: Must be collected to open doors</li>
        <li>🚪 <strong>D - Door</strong>: Can only be passed if you have collected the key</li>
        <li>🌀 <strong>P1, P2 - Portals</strong>: Stepping on one instantly teleports the player to the other</li>
        <li>✅ Success only if <strong>E</strong> (Exit) is reached</li>
        <li>⏱️ <strong>Move Limit</strong>: Maximum of 20 moves per puzzle</li>
      </ul>

      <p className="mt-4 text-blue-700 font-semibold text-lg">
        Good luck and have fun! 🎉
      </p>
    </div>
  )
}

export default Instructions
