<script setup lang="ts">
import type { Event } from '@/types'
import { ref } from 'vue'
import EventService from '@/services/EventService'
import { useRouter } from 'vue-router' // Change to useRouter
import { useMessageStore } from '@/stores/message'
const event = ref<Event>({
  id: 0,
  category: '',
  title: '',
  description: '',
  location: '',
  date: '',
  time: '',
  petAllowed: false,
  organizer: ''
})
const router = useRouter()
const store = useMessageStore()
function saveEvent() {
  EventService.saveEvent(event.value)
    .then((response) => {
      router.push({ name: 'event-detail-view', params: { id: response.data.id } })
      store.updateMessage('You are the successfully add a new event for ' + response.data.title)
      setTimeout(() => {
        store.resetMessage()
      }, 3000)
    })
    .catch(() => {
      router.push({ name: 'network-error-view' })
    })
}
</script>

<template>
  <div>
    <h1>Create an Evnet</h1>
    <form @submit.prevent="saveEvent">
      <label>Category</label>
      <input v-model="event.category" type="text" placeholder="Category" class="field" />
      <h3>Name & describe you Event</h3>
      <label>Title</label>
      <input v-model="event.title" type="text" placeholder="Title" class="field" />
      <label>Description</label>
      <input v-model="event.description" type="text" placeholder="Description" class="field" />
      <h3>Where is your Event?</h3>
      <Label>Location</Label>
      <input v-model="event.location" type="text" placeholder="Location" class="field" />
      <button class="button" type="submit">Submit</button>
    </form>

    <pre>{{ event }}</pre>
  </div>
</template>
