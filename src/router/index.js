import { createRouter, createWebHistory } from "vue-router";
import GalleriaView from "../views/GalleriaView.vue";
import SlideView from "../views/SlideView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "index",
      component: GalleriaView,
    },
    {
      path: "/:slideSlug",
      name: "slide",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      // component: () => import("../views/AboutView.vue"),
      component: SlideView,
    },
  ],
});

export default router;
