<script setup lang="ts">
import { ref } from 'vue'
import studentInfo from '@/type/StudentInfo'
defineProps<{
  event: studentInfo
}>()
</script>

<template>
  <div class="student">
    <div class="student-card">
      <h2>{{ event.studentId }}</h2>
      <div>
        <span>{{ event.name }}</span>
        <span>{{ event.surname }}</span>
      </div>
      <p>{{ event.gpa }}</p>
    </div>
  </div>
</template>

<style scoped>
.student-card {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.student-card:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}

.student-card span {
  margin-left: 10px;
}
</style>
