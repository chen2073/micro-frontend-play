<script setup lang="ts">
import { usePeopleStore } from '../store'

interface User {
  firstName: string;
  lastName: string;
  email: string;
  id: string;
  createdTimestamp: number;
}

const people: any = usePeopleStore()

people.fetchUsers()
</script>

<template>
  <div>
    <h1><span>users</span></h1>
    <ul v-for="user in people.users" :key="user.id">
      <li>Name: {{ user.firstName + ' ' + user.lastName }}</li>
      <li>Email: {{ user.email }}</li>
    </ul>
  </div>
</template>