const getPuzzleById = (id) => {
    const token = sessionStorage.getItem("token")

    return fetch (`${import.meta.env.VITE_API_URL}puzzles/${id}`, {
        method: "GET",
        headers: {
            Authorization: `Bearer ${token}`
        },
    })
    .then(res => {
        if (!res.ok) {
            throw new Error(`Error fetching puzzle: ${res.status}`)
        }
        return res.json()
    })
    .then(data => data)
}

export default getPuzzleById