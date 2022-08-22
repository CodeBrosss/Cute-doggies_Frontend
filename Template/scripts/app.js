const API = "http://localhost:3000/api/v1";

const fetchAPI  = async (data, endPoint, method) => {
    try {
        const response = await fetch(`${API}/${endPoint}`, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

        const result = await response.json()
        console.log(result);
    } catch (error) {
        console.log(error)
    }
};