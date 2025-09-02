import { Route, Routes } from 'react-router-dom'
import { PuzzlesList, PuzzleDetail } from './authenticatedPages/'

function Authenticated({ onUserLoggedOut }) {
  return <>
        <div className="container">
            <Routes>
                <Route path="/puzzles" element={<PuzzlesList onUserLoggedOut={onUserLoggedOut}/>} />
                <Route path="/puzzles/:puzzleId" element={<PuzzleDetail onUserLoggedOut={onUserLoggedOut}/>}/>
            </Routes>
        </div>
    </>
}

export default Authenticated