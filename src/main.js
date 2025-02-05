// main.js
import "./assets/main.css";
import "material-icons/iconfont/material-icons.css";

import { createApp } from "vue";
import { createPinia } from "pinia";
import App from "./App.vue";
import router from "../router"; // Importez le router ici
import './index.css';

const app = createApp(App);

app.use(createPinia());
app.use(router); // Utilisez le router ici

app.mount("#app");
