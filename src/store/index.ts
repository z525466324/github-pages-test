import { defineStore } from "pinia";

export const homes = defineStore("home", {
  state: () => ({
    count: 1,
  }),

  actions: {
    addCount() {
      this.count++;
    },
  },
});
