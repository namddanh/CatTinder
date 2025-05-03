// NOTE: DEFINING ROUTING RULES //
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LikedView from "../views/LikedView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/liked",
      name: "liked",
      component: LikedView,
    },
  ],
});

export default router;
