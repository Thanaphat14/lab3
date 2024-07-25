<script setup lang="ts">
import CardStudents from '@/components/CardStudents.vue'
import Student from '@/types/Student'
import { ref, onMounted } from 'vue'
import EventStudent from '@/services/EventStudent'

const students = ref<Student[]>(null)

onMounted(() => {
  EventStudent.getStudents()
    .then((response) => {
      students.value = response.data
    })
    .catch((error) => {
      console.error('There was an error!', error)
    })
})
</script>

<template>
  <h1>Students view</h1>
  <!-- new element -->
  <div class="students">
    <CardStudents v-for="student in students" :key="student.id" :student="student" />
  </div>
</template>

<style scoped>
.students {
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
