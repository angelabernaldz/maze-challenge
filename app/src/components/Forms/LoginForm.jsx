import { Link } from 'react-router-dom'
import logic from '../../logic/index.js'
import { useNavigate } from 'react-router-dom'

function LoginForm({ onUserLoggedIn }) {

    const navigate = useNavigate()

    const sendLoginForm = (event) => {
        event.preventDefault()

        const {email, password} = event.target // get email and password from form to be sent to back end

        try {
            logic.loginUser(email.value, password.value)
            .then(() => {
                navigate("/puzzles")
                onUserLoggedIn()
            })
        } catch(error) {
            console.log(error) 
        }
    }

      return (
        <div className="flex items-center justify-center w-full">
            <form
                onSubmit={sendLoginForm}
                className="bg-white p-16 rounded-3xl shadow-2xl w-full max-w-md text-center"
            >
                <h1 className="text-4xl font-extrabold mb-4 text-blue-600">🧩 PuzzleBreaker</h1>
                <p className="text-gray-600 mb-6 text-2xl">Log in to access your account</p>

                <div className="mb-6">
                    <input
                        type="email"
                        id="email"
                        placeholder="Enter your email"
                        className="w-full h-12 p-4 border border-gray-300 rounded-2xl text-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
                        required
                    />
                </div>

                <div className="mb-8">
                    <input
                        type="password"
                        id="password"
                        placeholder="Enter your password"
                        className="w-full h-12 p-4 border border-gray-300 rounded-2xl text-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
                        required
                    />
                </div>

                <button
                    type="submit"
                    id="submit"
                    className="w-full py-4 bg-blue-500 text-white text-2xl font-bold rounded-2xl hover:bg-blue-600 transition"
                    >
                    Log In
                </button>

                <p className="mt-6 text-gray-500 text-lg">
                    Don't have an account?{" "}
                <Link 
                to="/register"
                    className="text-blue-500 cursor-pointer font-semibold"
                >
                    Register
                </Link>
                </p>
            </form>
        </div>
    )
}

export default LoginForm