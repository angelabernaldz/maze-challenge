import { data } from "react-router-dom"

const loginUser = (email, password) => {
    // TODO: validate user data in form

    return fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password})
    })
    .then(res => res.json().then(data => ({ status: res.status, data })))
    .then(({ status, body }) => {
        if (status == 200) {
            if (data.access_token) {
                sessionStorage.setItem("token", data.access_token)
            }
            return data
        } else {
            throw new Error(data.detail || "Server error")
        }
    })
}

export default loginUser