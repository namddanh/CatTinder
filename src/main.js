import { createApp } from "vue";
import App from "./App.vue";
import router from "./router/index";

import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faUser,
  faClock,
  faCat,
  faSquareCheck,
  faCheckCircle,
  faCheckToSlot,
  faSliders,
  faLocationDot,
  faMagnifyingGlass,
  faHouse,
  faPaw,
  faCircleRight,
  faCircleLeft,
  faIcons,
  faHeart,
  faRuler,
  faThumbsDown,
} from "@fortawesome/free-solid-svg-icons";
import "./assets/main.css";
library.add(
  faUser,
  faClock,
  faCat,
  faSquareCheck,
  faCheckCircle,
  faCheckToSlot,
  faSliders,
  faLocationDot,
  faMagnifyingGlass,
  faHouse,
  faPaw,
  faCircleRight,
  faCircleLeft,
  faIcons,
  faHeart,
  faRuler,
  faThumbsDown
);

const app = createApp(App);

app.use(router);
app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
