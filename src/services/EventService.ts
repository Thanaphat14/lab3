import axios from 'axios'

const apiClient = axios.create({
  baseURL: import.meta.env.VITE_BACKEND_URL as string,
  withCredentials: false,
  headers: {
    Accept: 'application/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getEvents(perPage: number, page: number) {
    return apiClient.get(`/events?_limit=${perPage}&_page=${page}`)
  },
  getEvent(id: number) {
    return apiClient.get(`/events/${id}`)
  },
  saveEvent(event: any) {
    return apiClient.post('/events', event) // Adjust the endpoint as needed
  }
}
