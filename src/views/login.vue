<template>
  <div class="login-wrapper">
    <div class="login-card">
      <h2>Welcome Back 👋</h2>
      <p class="subtitle">Login to your account</p>

      <form @submit.prevent="submit">
        <div class="field">
          <label>Email</label>
          <input
            v-model="email"
            type="email"
            placeholder="you@example.com"
            required
          />
        </div>

        <div class="field">
          <label>Password</label>
          <input
            v-model="password"
            type="password"
            placeholder="••••••••"
            required
          />
        </div>

        <button :disabled="loading">
          {{ loading ? "Logging in..." : "Login" }}
        </button>

        <p v-if="error" class="error">{{ error }}</p>
      </form>
      <p class="signup-link">
        Don’t have an account?
        <router-link to="/signup">Sign up</router-link>
      </p>
    </div>
  </div>
</template>
<script>
// import { getCsrfToken } from "../services/auth";
import { mapActions } from "vuex";

export default {
  name: "LoginView",

  data() {
    return {
      email: "",
      password: "",
      loading: false,
      error: "",
    };
  },

  async mounted() {
    // const res = await getCsrfToken();
    // console.log("Fetched CSRF Token:", res.csrfToken);
    // localStorage.setItem("csrfToken", res.csrfToken);
  },

  methods: {
    ...mapActions("auth", ["login"]),

    async submit() {
      try {
        this.error = "";
        this.loading = true;
        const payload = {
          email: this.email,
          password: this.password,
        };
        let res = await this.login(payload);
        console.log("Login response:", res);
        this.$router.push("/dashboard");
      } catch (err) {
        this.error = "Invalid email or password";
      } finally {
        this.loading = false;
      }
    },
  },
};
</script>

<style scoped>
.login-wrapper {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #f4f6f8;
}

.login-card {
  width: 100%;
  max-width: 380px;
  background: #ffffff;
  padding: 32px;
  border-radius: 10px;
  box-shadow: 0 10px 25px rgba(0, 0, 0, 0.08);
}

.login-card h2 {
  margin-bottom: 4px;
  text-align: center;
}

.subtitle {
  text-align: center;
  color: #6b7280;
  font-size: 14px;
  margin-bottom: 24px;
}

.field {
  margin-bottom: 16px;
}

.field label {
  display: block;
  margin-bottom: 6px;
  font-size: 14px;
  color: #374151;
}

.field input {
  width: 100%;
  padding: 10px 12px;
  border: 1px solid #d1d5db;
  border-radius: 6px;
  font-size: 14px;
}

.field input:focus {
  outline: none;
  border-color: #6366f1;
}

button {
  width: 100%;
  margin-top: 10px;
  padding: 10px;
  background: #6366f1;
  color: white;
  border: none;
  border-radius: 6px;
  font-size: 15px;
  cursor: pointer;
}

button:disabled {
  opacity: 0.6;
  cursor: not-allowed;
}

.error {
  margin-top: 12px;
  color: #dc2626;
  font-size: 14px;
  text-align: center;
}

.signup-link {
  margin-top: 18px;
  text-align: center;
  font-size: 14px;
  color: #6b7280;
}

.signup-link a {
  color: #6366f1;
  font-weight: 500;
  text-decoration: none;
}

.signup-link a:hover {
  text-decoration: underline;
}
</style>
