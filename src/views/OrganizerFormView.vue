<script setup lang="ts">
import type { organizer } from '@/types'
import { ref } from 'vue'
import { useRouter } from 'vue-router' // Change to useRouter
import { useMessageStore } from '@/stores/message'
import OrganizerService from '@/services/OrganizerService'
const Organizer = ref<organizer>({
  id: 0,
  name: '',
  address: ''
})
const router = useRouter()
const store = useMessageStore()
function saveOrganizer() {
  OrganizerService.saveOrganizer(Organizer.value)
    .then((response) => {
      store.updateMessage('You are the successfully add a new organizer for ' + response.data.title)
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
    <h1>Create an Organizer</h1>
    <form @submit.prevent="saveOrganizer">
      <h3>Name</h3>
      <label>Name</label>
      <input v-model="Organizer.name" type="text" placeholder="Title" class="field" />
      <label>address</label>
      <input v-model="Organizer.address" type="text" placeholder="Description" class="field" />
      <button class="button" type="submit">Submit</button>
    </form>

    <pre>{{ Organizer }}</pre>
  </div>
</template>
