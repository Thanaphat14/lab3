<script setup lang="ts">
import { ref, onMounted } from 'vue'

import Student from '@/type/studentInfo'
import StudentCard from '@/components/StudentCard.vue'
import StudentService from '@/services/StudentService'
const students = ref<Student[]>([])
onMounted(() => {
  StudentService.getEvents()
    .then((response) => {
      students.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Student List</h1>
  <!-- new element -->
  <div class="events">
    <StudentCard v-for="student in students" :key="student.id" :event="student" />
  </div>
</template>

<style scoped>
.events {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
