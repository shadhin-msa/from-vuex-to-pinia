import { defineStore } from "pinia";

export const useUserStore = defineStore('userStore', {
  state: () => ({ user: 'MD Shahinur Alam Shadhin' }),
  getters: {
    lastName: (state) => state.user.split(' ')[state.user.split(' ').length - 1]
  }
})