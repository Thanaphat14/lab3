<script setup lang="ts">
import { defineProps } from 'vue'
import Event from '@/types/Event'

defineProps<{
  event: Event
}>()
//const event = ref({
//  id: 5928101,
//  category: 'animal welfare',
//  title: 'Cat Adoption Day',
//  description: 'Find your new feline friend at this event.',
//  location: 'Meow Town',
//  date: 'January 28, 2022',
//  time: '12:00',
//  petsAllowed: true,
//  organizer: 'Kat Laydee'
//})
</script>

<template>
  <div class="event-class">
    <div class="event-details">
      <h2>{{ event.title }}</h2>
      <h2>{{ event.category }} on {{ event.organizer }}</h2>
    </div>
  </div>
</template>

<style scoped>
.event-details {
  padding: 20px;
  width: 250px;
  cursor: pointer;
  border: 1px solid #39495c;
  margin-bottom: 18px;
}

.event-details p {
  margin: 0;
}
.event-details:hover {
  transform: scale(1.01);
  box-shadow: 0 3px 12px 0 rgba(0, 0, 0, 0.2);
}
</style>
