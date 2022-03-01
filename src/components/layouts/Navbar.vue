<template>
  <nav
    id="navbar"
    class="
      px-4
      py-4
      sm:py-6
      bg-white
      shadow
      sm:fixed
      w-full
      z-10
      transitions-colors
      duration-500
    "
    :class="{ 'sm:bg-transparent sm:shadow-none': !showWhiteBackground }"
  >
    <div
      class="
        container
        mx-auto
        flex flex-col
        sm:flex-row
        items-center
        justify-between
      "
    >
      <div class="w-full flex flex-row items-center justify-between">
        <div class="text-3xl font-bold">
          <span :class="{ 'sm:text-white': !showWhiteBackground }">Lara</span>
          <span class="text-primary">Tips</span>
        </div>
        <div>
          <button v-show="!isVisible" class="sm:hidden" @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
          <button v-show="isVisible" class="sm:hidden" @click="toggle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              class="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
      </div>
      <div
        class="mt-4 sm:mt-0 w-full sm:space-x-4 sm:text-right sm:block"
        :class="{ hidden: !isVisible, 'sm:text-white': !showWhiteBackground }"
      >
        <NavbarLink to="/" label="Home" />
        <NavbarLink to="/articles" label="Articles" />
        <NavbarLink to="/about" label="About" />
        <NavbarLink to="/contact" label="Contact" />
      </div>
    </div>
  </nav>
</template>
<script>
import NavbarLink from "./NavbarLink.vue";
import { useToggle } from "../../composables/useToggle";
import { ref } from "@vue/reactivity";
export default {
  name: "Navbar",
  components: {
    NavbarLink,
  },

  setup() {
    let { isVisible, toggle } = useToggle();
    let showWhiteBackground = ref(false);

    document.addEventListener("scroll", function () {
      let bodyTopPosition = document.body.getBoundingClientRect().top;

      if (bodyTopPosition < -150) {
        showWhiteBackground.value = true;
      } else {
        showWhiteBackground.value = false;
      }
    });

    return {
      isVisible,
      toggle,
      showWhiteBackground,
    };
  },
};
</script>
