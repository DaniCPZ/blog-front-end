<template>
  <div class="flex flex-col h-full">
    <Navbar />

    <div class="flex-1">
      <router-view />
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from "./components/layouts/Footer.vue";
import Navbar from "./components/layouts/Navbar.vue";
export default {
  components: {
    Navbar,
    Footer,
  },
};
</script>
