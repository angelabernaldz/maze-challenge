const submitAttempt = (puzzleId, attempt) => {
    // attempt should be an object: { user_id, moves }
    const token = sessionStorage.getItem("token")

    return fetch(`${import.meta.env.VITE_API_URL}puzzles/${puzzleId}/attempts`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify(attempt)
    })
    .then(res => res.json().then(data => ({ status: res.status, data })))
    .then(({ status, data }) => {
        if (status === 201) {
            return data
        } else {
            throw new Error(data.detail || "Server error")
        }
    })
}

export default submitAttempt