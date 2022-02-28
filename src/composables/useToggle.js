import { ref } from "vue";

export function useToggle() {
  let isVisible = ref(false);

  function show() {
    isVisible.value = true;
  }

  function hide() {
    isVisible.value = false;
  }

  function toggle() {
    isVisible.value = !isVisible.value;
  }

  return {
    isVisible,
    show,
    hide,
    toggle,
  }
}