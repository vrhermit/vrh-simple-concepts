import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import aframe from "aframe";

createApp(App).use(router).use(aframe).mount("#app");
