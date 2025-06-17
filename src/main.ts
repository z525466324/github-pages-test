import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import "element-plus/dist/index.css";

console.log(import.meta);
import router from "@/routes";

createApp(App).use(router).mount("#app");
