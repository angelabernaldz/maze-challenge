const getUser = () => {
    const token = sessionStorage.getItem("token")

    return fetch (`${import.meta.env.VITE_API_URL}auth/me`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Error fetching user data: ${res.status}`)
        }
        return res.json()
    })
    .then(data => data)
}

export default getUser