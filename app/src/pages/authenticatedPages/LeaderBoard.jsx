import { Header, LeaderBoardTable } from '../../components'
import logic from '../../logic'
import { useState, useEffect } from 'react'

function Leaderboard({ onUserLoggedOut }) {

    const [leadearboardData, setLeadearboardData] = useState([])

    useEffect(() => {
        logic.getLeaderBoard()
        .then((res) => {
            setLeadearboardData(res)
        })
    }, [])

    return (
  <div className="min-h-screen flex flex-col">
    <Header onUserLoggedOut={onUserLoggedOut} />

    <div className="flex-1 w-screen flex flex-row justify-start">
      {leadearboardData.map((puzzle) => (
        <div key={puzzle.puzzle_id} className="w-full m-4">
          <LeaderBoardTable puzzle={puzzle} />
        </div>
      ))}
    </div>
  </div>
)


}

export default Leaderboard
