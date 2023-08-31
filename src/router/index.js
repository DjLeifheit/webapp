import { createRouter, createWebHistory } from "vue-router";
import HomeView from "@/views/HomeView.vue";
import getraenkeKarteView from "@/views/GetraenkeKarteView.vue";
import SpeisekarteView from "@/views/SpeisekarteView.vue";
import OeffnungsZeitenView from "@/views/OeffnungsZeitenView.vue";
import DiensteView from "@/views/DiensteView.vue";

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "@/views/AboutView.vue"),
  },
  {
    path: "/getraenkekarte",
    name: "Getraenkekarte",
    component: getraenkeKarteView,
  },
  {
    path: "/speisekarte",
    name: "Speisekarte",
    component: SpeisekarteView,
  },
  {
    path: "/oeffnungszeiten",
    name: "Oeffnungszeiten",
    component: OeffnungsZeitenView,
  },
  {
    path: "/dienste",
    name: "Dienste",
    component: DiensteView,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
