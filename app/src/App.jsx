import Public from './pages/Public.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import logic from './logic/index.js'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={logic.isUserLoggedIn() ? null : <Public onUserLoggedIn={() => setTokenUpdated(Date.now())}/>} />
      </Routes>
    </Router>
  );
}

export default App