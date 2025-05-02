import { createApp } from "vue";
import App from "./App.vue";

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
  faRuler
);

const app = createApp(App);

app.component("font-awesome-icon", FontAwesomeIcon);
app.mount("#app");
