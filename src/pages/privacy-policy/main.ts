import { createApp } from "vue";
import App from "./App.vue";

import "@/assets/fonts/Inter/inter.css";
import "./index.css";

const app = createApp(App);

// Start app
app.mount("#app");

// Scroll to top on page unload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}