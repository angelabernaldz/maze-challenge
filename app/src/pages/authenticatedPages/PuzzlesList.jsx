import { PuzzleGrid, Header } from '../../components'

function PuzzlesList({ onUserLoggedOut }) {

    return (
        <div>
            <p className="text-lg">
                <Header onUserLoggedOut={onUserLoggedOut}/>
                <PuzzleGrid />
            </p>
        </div>
    )
}

export default PuzzlesList

