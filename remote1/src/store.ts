import { defineStore } from 'pinia'

export const useCounterStore = defineStore('counter', {
  state: () => ({count: 0}),

  actions: {
    increment() {
      this.count++
    },
    decrement() {
      this.count--
    },
  },
})

export const usePeopleStore = defineStore('People', {
  state: () => ({
    users: []
  }),

  actions: {
    async fetchUsers() {
      const res = await fetch('http://localhost:3001/api/users')
      this.users = await res.json()
    }
  },
})