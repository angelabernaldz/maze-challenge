import { LoginForm } from '../../components'

function Login ({ onUserLoggedIn }) {
    return (
        <div className="w-screen h-screen flex justify-center items-center">
            <LoginForm onUserLoggedIn={onUserLoggedIn}/>
        </div>
    )
}

export default Login