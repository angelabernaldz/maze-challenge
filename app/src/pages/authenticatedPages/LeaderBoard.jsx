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
