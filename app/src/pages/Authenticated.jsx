import { Route, Routes } from 'react-router-dom'
import { PuzzlesList } from './authenticatedPages/'

function Authenticated({ onUserLoggedOut }) {
  return <>
        <div className="container">
            <Routes>
                <Route path="/puzzles" element={<PuzzlesList onUserLoggedOut={onUserLoggedOut}/>} />
            </Routes>
        </div>
    </>
}

export default Authenticated