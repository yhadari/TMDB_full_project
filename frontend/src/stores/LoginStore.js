import { defineStore } from "pinia";
import axios from "axios";

export const useLoginStore = defineStore("loginStore", {
  state: () => { },
  actions: {
    //POST
    async login(info) {
      try {
        const response = await axios.post('http://localhost:3000/api/login', info, { withCredentials: true })
        console.log('response', response)
        return response
      } catch (error) {
        console.log('error: ', error);
        throw error
      }
    },
  },
});
