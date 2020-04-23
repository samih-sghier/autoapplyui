export const request = axios.put(url, "\"" + values.guid + "\"", {
    headers: {
        "Accept": "application/json",
        "Content-type": "application/json",
        "Authorization": "Bearer " + sessionStorage.getItem('jwt')
    }
})