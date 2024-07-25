import axios from 'axios'

const apiClient = axios.create({
  baseURL: 'https://my-json-server.typicode.com/thanaphat14/Student-list',
  withCredentials: false,
  headers: {
    Accept: 'apalication/json',
    'Content-Type': 'application/json'
  }
})

export default {
  getStudents() {
    return apiClient.get('/students')
  }
}
