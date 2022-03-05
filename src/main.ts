import { createApp } from "vue";
import mitt from "mitt";
import App from "./App.vue";
import mdiVue from "mdi-vue/v3";
import { mdiGithub, mdiFacebook, mdiLinkedin } from "@mdi/js";
import Toast from "vue-toastification";
import { VueReCaptcha } from "vue-recaptcha-v3";

import "@/assets/fonts/Inter/inter.css";
import "tippy.js/dist/tippy.css";
import "tippy.js/animations/shift-toward.css";
import "./index.scss";
import "flowbite";

const emitter = mitt();
const app = createApp(App);

// Add global event bus
app.config.globalProperties.emitter = emitter;

// Toastification default options
const toastOptions = {
    position: "bottom-right",
};

// Install reCAPTCHA v3
app.use(VueReCaptcha, {
    siteKey: "6Lf3dqkeAAAAAFGdbxvvff_hDK5xF5Jz-XeoVA_w"
});

// Install material icons
app.use(mdiVue, {
    icons: { mdiGithub, mdiFacebook, mdiLinkedin }
});

// Install toastification
app.use(Toast, toastOptions);

// Start app
app.mount("#app");

// Scroll to top on page unload
window.onbeforeunload = function () {
    window.scrollTo(0, 0);
}