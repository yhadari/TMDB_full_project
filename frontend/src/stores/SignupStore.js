import { defineStore } from 'pinia'
import axios from 'axios'

export const useSignupStore = defineStore('signupStore', {
  state: () => { },
  actions: {
    // POST
    async signup(info) {
      try {
        const response = await axios.post('http://localhost:3000/api/signup', info)
        console.log('response', response)
        return response
      } catch (error) {
        console.log('error: ', error)
        throw error
      }
    }
  }
})
