<script setup lang="ts">
import { defineProps, withDefaults } from 'vue'
</script>

<template>
  <div class="networkError">
    <h1>Uh-Oh!</h1>
    <h3>
      It look like you'r experiecing some network issues. please take a breath and
      <a href="#" on-click="$router.go(-1)">click here</a> to try again.
    </h3>
  </div>
</template>
