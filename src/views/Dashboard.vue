<template>
  <div class="dashboard">
    <NavbarView />

    <div class="content">
      <h2>Dashboard</h2>

      <p v-if="loading">Loading...</p>

      <!-- <div v-else class="card">
        <p><strong>Email:</strong> {{ user.email }}</p>
        <p><strong>Role:</strong> {{ user.role }}</p>
      </div> -->
    </div>
  </div>
</template>

<script>
// import { mapActions } from "vuex";

export default {
  name: "DashboardView",

  data() {
    return {
      user: null,
      loading: true,
    };
  },

  //   async mounted() {
  //     try {
  //       // backend se profile fetch
  //       const res = await this.$api.get("/profile");
  //       this.user = res.data.user;
  //     } catch (err) {
  //       this.$router.push("/login");
  //     } finally {
  //       this.loading = false;
  //     }
  //   },
};
</script>

<style scoped>
.dashboard {
  min-height: 100vh;
  background: #f4f6f8;
}

.content {
  padding: 24px;
}

.card {
  background: white;
  padding: 20px;
  max-width: 400px;
  border-radius: 8px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
}
</style>
