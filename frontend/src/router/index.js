import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    // HomePage
    {
      path: "/",
      name: "home",
      component: HomeView,
    },

    // Login
    {
      path: "/login",
      name: "login",
      component: () => import("@/views/LoginView.vue"),
    },

    // SignUp
    {
      path: "/signup",
      name: "signup",
      component: () => import("@/views/SignupView.vue"),
    },

    // Movies
    {
      path: "/movie",
      component: () => import("@/views/HomeView.vue"),
      children: [
        {
          path: "now-playing",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "upcoming",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "top-rated",
          component: () => import("@/views/HomeView.vue"),
        },
      ],
    },

    // TV Shows
    {
      path: "/tv",
      component: () => import("@/views/HomeView.vue"),
      children: [
        {
          path: "airing-today",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "on-the-air",
          component: () => import("@/views/HomeView.vue"),
        },
        {
          path: "top-rated",
          component: () => import("@/views/HomeView.vue"),
        },
      ],
    },

    // People
    {
      path: "/person",
      component: () => import("@/views/HomeView.vue"),
    },

    // More
    {
      path: "/discuss",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/leaderboard",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/talk",
      component: () => import("@/views/HomeView.vue"),
    },
    {
      path: "/api",
      component: () => import("@/views/HomeView.vue"),
    },

    // Movie/Tv Page
    {
      path: "/:type/:param",
      name: "movie-param",
      component: () => import("@/views/MoviePageView.vue"),
    },
  ],

  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) {
      return savedPosition;
    } else {
      return { top: 0 };
    }
  },
});

export default router;
