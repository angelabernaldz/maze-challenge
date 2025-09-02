import { useLocation, useNavigate } from 'react-router-dom'

function NavigationButton() {

    const location = useLocation()
    const navigate = useNavigate()

    let label, target

    if (location.pathname === '/leaderboard') {
        label = '🧩 Puzzles'
        target = '/puzzles'
    } else {
        label = '🏆 Leaderboard'
        target = "/leaderboard"
    }

    const onClick = () => {
        navigate(target)
    }
    return (
        <button
            onClick={onClick}
            className="btn btn-ghost px-6 py-2 bg-blue-500 text-white hover:bg-blue-400 rounded-lg text-xl hover:scale-105"
        >
            {label}
        </button>
    )
}

export default NavigationButton