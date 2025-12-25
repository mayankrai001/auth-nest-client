<template>
  <router-view />
</template>

<script>
// import { getCsrfToken } from "./services/auth";
export default {
  name: "App",
  data() {
    return {};
  },
  async mounted() {
    // const res = await getCsrfToken();
    // console.log("Fetched CSRF Token:", res.csrfToken);
    // localStorage.setItem("csrfToken", res.csrfToken);
  },
};
</script>
