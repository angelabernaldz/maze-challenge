import { Header, LeaderBoardTable } from '../../components'
import logic from '../../logic'
import { useState, useEffect } from 'react'

function Leaderboard({ onUserLoggedOut }) {

    const [leadearboardData, setLeadearboardData] = useState([])

  const leaderboardData = {
    users: [
    { username: "Alice", puzzle: "Maze 1", attempts: 5, success: 2, fails: 3 },
    { username: "Bob", puzzle: "Maze 1", attempts: 3, success: 1, fails: 2 },
    { username: "Charlie", puzzle: "Maze 2", attempts: 4, success: 4, fails: 0 },
    ]
  }

  useEffect(() => {
    logic.getLeaderBoard()
    .then((res) => {
        setLeadearboardData(res)
        console.log(res)
    })
  }, [])

return (
  <div className="p-4 w-screen h-screen">
    <Header onUserLoggedOut={onUserLoggedOut}/>
    
    <div className="flex justify-center gap-4 mt-4">
      {leadearboardData.map((puzzle) => (
        <div key={puzzle.puzzle_id} className="w-1/3 max-w-sm">
          <LeaderBoardTable puzzle={puzzle}/>
        </div>
      ))}
    </div>
  </div>
)
}

export default Leaderboard
