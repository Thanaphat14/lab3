export interface Event {
  id: number
  category: string
  title: string
  description: string
  location: string
  date: string
  time: string
  petAllowed: boolean
  organizer: string
}

export interface StudentInfo {
  id: number
  studentId: string
  name: string
  surname: string
  gpa: number
  image: string
}
