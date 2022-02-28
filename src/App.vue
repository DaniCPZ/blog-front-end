<template>
  <div>
    <NavBar />
    <router-view />
    <footer>Footer</footer>
  </div>
</template>

<script>
import NavBar from "./components/layouts/Navbar.vue";
export default {
  components: {
    NavBar,
  },
};
</script>
