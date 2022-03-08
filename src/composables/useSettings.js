import { ref } from "vue";
import api from "../apis/api.js"

let settings = ref({});

export function useSettings() {
  function fetchSettings() {
    api.get('/settings')
      .then(res => {
        settings.value = res.data.data
      })
  }

  return {
    settings,
    fetchSettings,
  }
}