<template>
  <nav class="navbar">
    <h3>AuthNest</h3>
    <button @click="doLogout">Logout</button>
  </nav>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "NavbarView",

  methods: {
    ...mapActions("auth", ["logout"]),

    async doLogout() {
      await this.logout();
      this.$router.push("/login");
    },
  },
};
</script>

<style scoped>
.navbar {
  height: 60px;
  background: #111827;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 24px;
}

button {
  background: #ef4444;
  border: none;
  padding: 8px 14px;
  color: white;
  border-radius: 6px;
  cursor: pointer;
}
</style>
