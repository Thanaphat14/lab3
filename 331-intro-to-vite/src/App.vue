<script setup lang="ts">
import { RouterLink, RouterView, useRoute, useRouter } from 'vue-router'
import { ref, watch } from 'vue'

const route = useRoute()
const router = useRouter()

const pageSize = ref(route.query.pageSize || 2)

watch(pageSize, (newSize) => {
  router.push({ query: { ...route.query, pageSize: newSize } })
})
</script>

<template>
  <div id="layout">
    <header>
      <div class="wrapper">
        <nav>
          <RouterLink :to="{ name: 'event-list-view' }">Home</RouterLink> |
          <RouterLink :to="{ name: 'event-list-view' }">Event</RouterLink> |
          <RouterLink :to="{ name: 'about' }">About</RouterLink> |
          <RouterLink :to="{ name: 'student' }">Student</RouterLink>
        </nav>
        <div>
          <label for="pageSize">Page Size:</label>
          <select id="pageSize" v-model="pageSize">
            <option :value="2">2</option>
            <option :value="5">5</option>
            <option :value="10">10</option>
          </select>
        </div>
      </div>
    </header>
    <RouterView />
  </div>
</template>

<style>
#layout {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a:first-of-type {
  border: 0;
}
nav a.router-link-exact-active {
  color: #42b983;
}
h2 {
  font-size: 20px;
}
</style>
