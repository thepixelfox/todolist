import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import { createPinia } from "pinia";
import Toast from "vue-toastification";
import "vue-toastification/dist/index.css";

const pinia = createPinia();
const app = createApp(App);

app.use(pinia);
app.use(Toast, {
  transition: "Vue-Toastification__bounce",
  maxToasts: 20,
  newestOnTop: true,
});

app.mount("#app");
