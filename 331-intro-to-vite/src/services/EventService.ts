import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/thanaphat14/Lab2--MockServer',
  withCredentials: false,
  headers: {
    Accept: 'apalication/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents() {
    return apiClient.get('/events')
  },
  getEvent(id: number) {
    return apiClient.get('/events/' + id)
  }
}
