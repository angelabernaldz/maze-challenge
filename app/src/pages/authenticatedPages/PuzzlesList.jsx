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
    <div className="min-h-screen flex flex-col">
        <Header onUserLoggedOut={onUserLoggedOut} />
        <main className="flex-1 w-screen flex flex-col items-center">
            <div className="text-center my-6">
                <h1 className="text-5xl font-bold mb-2">Puzzles List</h1>
                <p className="text-gray-600 text-2xl mb-6">Choose one option from below</p>
            </div>
            <div className="flex flex-col gap-6 w-full max-w-5xl mx-auto">
                {puzzles.map((puzzle) => (
                <PuzzleCard
                    key={puzzle.id}
                    puzzle={puzzle}
                    onSelect={handleSelect}
                />
                ))}
            </div>
        </main>
    </div>
    )

}

export default PuzzlesList

