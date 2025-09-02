import { PuzzleSolver, Header } from '../../components'
import { useParams } from 'react-router-dom'
import { useState, useEffect } from 'react' 
import logic from '../../logic'

function PuzzleDetail({ onUserLoggedOut }) {

    const { puzzleId } = useParams() // puzzleId is obtained from the route
    const [puzzle, setPuzzle] = useState(null)

    useEffect(() => {
        logic.getPuzzleById(puzzleId)
        .then(puz => {
            const gridArray = puz.grid
            .replace(/[\{\}]/g, '') // quitar llaves
            .split(',') // separar por comas
            .reduce((acc, val, i, arr) => {
                const rowIndex = Math.floor(i / 5) // si tu grid siempre es 5x5
                acc[rowIndex] = acc[rowIndex] || []
                acc[rowIndex].push(val)
                return acc
            }, [])

            setPuzzle({ ...puz, grid: gridArray })
        })
        .catch(err => console.error(err))
    }, [puzzleId])

    if (!puzzle) return <p>Loading puzzle...</p>

    return (
        <div className="min-h-screen flex flex-col">
            <Header onUserLoggedOut={onUserLoggedOut} />
            <div className="flex w-screen justify-center items-center -mt-16 overflow-hidden">
                <PuzzleSolver puzzle={puzzle}/>
            </div>
        </div>
    )
}

export default PuzzleDetail