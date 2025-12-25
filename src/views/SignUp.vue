<template>
  <div class="wrap">
    <div class="card">
      <h1>Create account</h1>
      <p class="sub">No fluff. Just get started.</p>

      <form @submit.prevent="submit">
        <input v-model="name" placeholder="Name" required />
        <input v-model="email" type="email" placeholder="Email" required />
        <input
          v-model="password"
          type="password"
          placeholder="Password"
          required
        />

        <button :disabled="loading">
          {{ loading ? "Creating..." : "Sign up" }}
        </button>

        <p v-if="error" class="error">{{ error }}</p>

        <p class="link">
          Already have an account?
          <router-link to="/login">Log in</router-link>
        </p>
      </form>
    </div>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "SignupView",
  data() {
    return {
      name: "",
      email: "",
      password: "",
      loading: false,
      error: "",
    };
  },
  methods: {
    ...mapActions("auth", ["signup"]),
    async submit() {
      this.error = "";
      this.loading = true;
      try {
        await this.signup({
          name: this.name,
          email: this.email,
          password: this.password,
        });
        this.$router.push("/login");
      } catch (e) {
        this.error = e?.response?.data?.message || "Signup failed. Try again.";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
/* Layout */
.wrap {
  min-height: 100vh;
  display: grid;
  place-items: center;
  background: #f8fafc;
}

/* Card */
.card {
  width: 100%;
  max-width: 360px;
  background: #ffffff;
  border: 1px solid #e5e7eb;
  border-radius: 12px;
  padding: 28px;
}

/* Headings */
h1 {
  margin: 0 0 6px;
  font-size: 22px;
  font-weight: 600;
}
.sub {
  margin: 0 0 20px;
  color: #6b7280;
  font-size: 14px;
}

/* Inputs */
input {
  width: 100%;
  padding: 11px 16px; /* 👈 right side space increased */
  margin-bottom: 12px;
  border-radius: 8px;
  border: 1px solid #d1d5db;
  font-size: 14px;
  box-sizing: border-box; /* 👈 IMPORTANT */
}
input:focus {
  outline: none;
  border-color: #111827;
}

/* Button */
button {
  width: 100%;
  padding: 11px;
  border-radius: 8px;
  border: none;
  background: #111827;
  color: #ffffff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
button:disabled {
  opacity: 0.6;
}

/* Error */
.error {
  margin-top: 10px;
  font-size: 13px;
  color: #dc2626;
}

/* Footer */
.link {
  margin-top: 14px;
  text-align: center;
  font-size: 13px;
  color: #6b7280;
}
.link a {
  color: #111827;
  font-weight: 500;
}
</style>
