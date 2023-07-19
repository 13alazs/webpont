import { createApp } from "vue";
import App from "./App.vue";
import { createI18n } from "vue-i18n";
import { createRouter, createWebHistory } from "vue-router"; // Import router functions
import LanguagePicker from "@/components/LanguagePicker";

import LoginPage from "@/views/Login.vue";
import DashboardPage from "@/views/Dashboard.vue";

const i18n = createI18n({
  locale: "en",
  messages: {
    en: require("@/assets/language.json").en,
    hu: require("@/assets/language.json").hu,
  },
});

const router = createRouter({
  history: createWebHistory(),
  routes: [
    { path: "/", redirect: "/login" },
    { path: "/login", component: LoginPage },
    { path: "/dashboard", component: DashboardPage },
  ],
});

const app = createApp(App);
app.use(router);
app.use(i18n);
app.component("LanguagePicker", LanguagePicker);
app.mount("#app");
