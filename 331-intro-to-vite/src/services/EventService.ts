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
  getEvents(perPage: Number,page: Number) {
    return apiClient.get('/events?_limit=' + perPage + '&_page =' + page)
  },
  getEvent(id: number) {
    return apiClient.get('/events/' + id)
  }
}
