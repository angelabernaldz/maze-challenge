import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Login } from './publicPages'
import Register from './publicPages/Register'

function Public() {
  return <>
        <div className="container">
            <Routes>
                <Route path="/login" element={<Login />} />
                <Route path="/register" element={<Register />} />
            </Routes>
        </div>
    </>
}

export default Public