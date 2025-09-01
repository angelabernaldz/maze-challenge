const loginUser = (email, password) => {
    // TODO: validate user data in form

    return fetch(`${import.meta.env.VITE_API_URL}auth/login`, {
        method: "POST",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify({ email, password})
    })
    .then((res) => {
        if (res.status == 200) return res.json()
        .then(body => sessionStorage.setItem('token', body.access_token))
        return res.json()
    })
    .catch((error) => {
        throw error
    }) 
}

export default loginUser