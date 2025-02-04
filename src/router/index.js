import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import CategoryView from "@/views/CategoryView.vue";
import CategoryImage from "@/views/CategoryImage.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      // route level code-splitting
      // this generates a separate chunk (About.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import("../views/AboutView.vue"),
    },
    {
      path: "/category/:club",
      name: "category",
      component: CategoryView,
      // children: [
      //   {
      //     path: "images/:id",
      //     name: "event-images",
      //     component: CategoryImage,
      //     meta: {
      //       layout: "full-page", // Optional: if you want a different layout
      //     },
      //   },
      // ],
    },
    {
      path: "/category/:club/images/:id",
      name: "event-images",
      component: CategoryImage,
    },
  ],
});

export default router;
