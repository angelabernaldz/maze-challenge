import { PuzzleCard, Header } from '../../components'
import logic from '../../logic'
import { useEffect, useState } from "react"
import { useNavigate } from 'react-router-dom'


function PuzzlesList({ onUserLoggedOut }) {

    const [puzzles, setPuzzles] = useState([])
    const navigate = useNavigate()
    
    useEffect(() => {
        logic.getAllPuzzles()
        .then((puzzles) => {
            setPuzzles(puzzles)
        })
        .catch((err) => {
            console.error("Error fetching puzzles:", err);
        })
    }, [])

    const handleSelect = (puzzleId) => {
        navigate(`/puzzles/${puzzleId}`) // redirect to that puzzle page
    }

    return (
        <div>
            <div className="text-lg">
                <Header onUserLoggedOut={onUserLoggedOut}/>
                {puzzles.map((puzzle) => (
                    <PuzzleCard 
                        key={puzzle.id}
                        puzzle={puzzle}
                        onSelect={handleSelect}
                    />
                ))}
            </div>
        </div>
    )
}

export default PuzzlesList

