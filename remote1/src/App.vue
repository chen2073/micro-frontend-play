<script setup lang="ts">
import { ref } from 'vue'
import { useCounterStore } from './store'
import People from './components/People.vue'

const counter = useCounterStore()
</script>

<template>
  <div>
    <h3>This is remote 1 Vue App</h3>
    <div>Counetr: {{ counter.count }}</div>
    <button @click="counter.increment">+</button>
    <button @click="counter.decrement">-</button>
  </div>
  <People />
</template>