<template>
  <div>HI from login</div>
  <button @click="checkStatus">Check Status</button>
</template>
<script>
import { getStatus } from "../services/status";

export default {
  name: "LoginView",
  data() {
    return {};
  },
  methods: {
    async checkStatus() {
      try {
        const response = await getStatus();
        console.log("Status response:", response.data);
      } catch (error) {
        console.error("Error fetching status:", error);
      }
    },
  },
};
</script>
