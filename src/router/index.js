import { createRouter, createWebHistory } from "vue-router";
import DashboardView from "../views/Dashboard.vue";
import LoginView from "../views/login.vue";
import SignUp from "../views/SignUp.vue";

const routes = [
  { path: "/login", name: "LoginView", component: LoginView },
  { path: "/signup", name: "SignupView", component: SignUp },
  {
    path: "/dashboard",
    name: "DashboardView",
    component: DashboardView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
