import Public from './pages/Public.jsx'
import Authenticated from './pages/Authenticated.jsx'
import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logic from './logic/index.js'

function App() {

  const [tokenUpdated, setTokenUpdated] = useState(Date.now())

  return (
    <Router>
      <Routes>
        <Route path='/*' element={logic.isUserLoggedIn() ? <Authenticated onUserLoggedOut={() => setTokenUpdated(Date.now())}/> : <Public onUserLoggedIn={() => setTokenUpdated(Date.now())}/>} />
      </Routes>
    </Router>
  )
}

export default App