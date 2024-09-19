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
  saveOrganizer(organizer: any) {
    return apiClient.post('/organizers', organizer) // Adjust the endpoint as needed
  }
}
