// NOTE: DEFINING ROUTING RULES //
import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import LikedView from "../views/LikedView.vue";
import CatProfileView from "../views/CatProfileView.vue";

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
    {
      path: "/cat/:id",
      name: "cat-profile",
      component: CatProfileView,
      props: true,
    },
  ],
});

export default router;
