<template>
  <!-- <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </nav> -->
  <LoginView />
  <router-view />
</template>

<script>
import LoginView from "./views/login.vue";
export default {
  name: "App",
  data() {
    return {};
  },
  components: { LoginView },
};
</script>
