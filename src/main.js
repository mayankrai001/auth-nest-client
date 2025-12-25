import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import NavbarView from "@/components/Navbar.vue";

const app = createApp(App);

app.use(store);
app.use(router);

// ✅ global component registration
app.component("NavbarView", NavbarView);

app.mount("#app");
