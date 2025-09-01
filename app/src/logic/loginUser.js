const loginUser = (email, password) => {
    // TODO: validate user data in form

    return fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password})
    })
    .then(res => res.json().then(body => ({ status: res.status, body }))) 
    .then(({ status, body }) => {
        if (status === 200) {
            sessionStorage.setItem('token', body.access_token)
            return body
        } else {
            throw new Error(`Error authenticating user: ${status}`)
        }
    })
    .catch((error) => {
        throw error
    }) 
}

export default loginUser