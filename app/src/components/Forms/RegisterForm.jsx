import { Link } from 'react-router-dom'
import logic from '../../logic/index.js'
import { useNavigate } from 'react-router-dom'

function RegisterForm() {

    const navigate = useNavigate()

    const sendLoginForm = (event) => {
        event.preventDefault()

        const {username, email, password, repeatPassword} = event.target // get data to be sent to back end

        if (password !== repeatPassword)
            throw new Error("Passwords do not match")

        try {
            logic.registerUser(username.value, email.value, password.value)
            .then(() => {
                navigate("/login")
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
            <p className="text-gray-600 mb-6 text-2xl">Create an account below</p>

            <div className="mb-6">
                <input
                    type="text"
                    id="username"
                    placeholder="Enter your username"
                    className="w-full h-12 p-4 border border-gray-300 rounded-2xl text-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
                    required
                />
            </div>
            
            <div className="mb-6">
                <input
                    type="email"
                    id="email"
                    placeholder="Enter your email"
                    className="w-full h-12 p-4 border border-gray-300 rounded-2xl text-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
                    required
                />
            </div>

            <div className="mb-6">
                <input
                    type="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full h-12 p-4 border border-gray-300 rounded-2xl text-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
                    required
                />
            </div>


            <div className="mb-8">
                <input
                    type="password"
                    id="repeatPassword"
                    placeholder="Repeat your password"
                    className="w-full h-12 p-4 border border-gray-300 rounded-2xl text-xl focus:outline-none focus:ring-4 focus:ring-blue-400 transition"
                    required
                />
            </div>

            <button
                type="submit"
                id="submit"
                className="w-full py-4 bg-blue-500 text-white text-2xl font-bold rounded-2xl hover:bg-blue-600 transition"
                >
                Register
            </button>

            <p className="mt-6 text-gray-500 text-lg">
                Already have an account?{" "}
                <Link 
                    to="/login"
                    className="text-blue-500 cursor-pointer font-semibold"
                >
                    Log in
                </Link>
            </p>
        </form>
    </div>
)
}

export default RegisterForm



