import axios from 'axios'

export const getAllMessages = () => {
    return axios.get('http://localhost:3005/messages')
}

export const postMessage = (message) => {
    return axios.post(`http://localhost:3005/messages`, message)
}
