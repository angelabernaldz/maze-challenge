import { useNavigate } from 'react-router-dom'

function LogOutButton({ onUserLoggedOut }) {

    const navigate = useNavigate()
    
    const handleLogout = () => {
        onUserLoggedOut()
        sessionStorage.clear()
        navigate('/login')

    }
    
    return (
        <div className='w-full h-full'>
            <button
                className='btn btn-ghost px-6 py-2 text-white rounded-lg text-xl  hover:scale-105'
                onClick={handleLogout}
            >
                Log out
            </button>

        </div>
    )
}

export default LogOutButton