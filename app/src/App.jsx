import Public from './pages/Public.jsx'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Routes>
        <Route path='/*' element={<Public />} />
      </Routes>
    </Router>
  );
}

export default App