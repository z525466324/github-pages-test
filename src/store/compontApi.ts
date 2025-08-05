import { defineStore } from "pinia";
import { ref } from "vue";

export const c_store = defineStore("cStore", () => {
  const c_count = ref(1);

  const add_cCount = () => {
    c_count.value++;
  };

  return { c_count, add_cCount };
});
