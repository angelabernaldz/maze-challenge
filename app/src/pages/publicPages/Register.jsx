import { useState } from 'react'

export default function Register() {
    const [username, setUsername] = useState("")
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const handleSubmit = (event) => {
        event.preventDefault()

        // call logic to register user. Can create register logic in the front end
        // that makes the call to corresponding end point in the back end
    }

}