import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
  },
  {
    path: "/gallery",
    name: "gallery",
    component: () => import("../views/Gallery.vue"),
  },
  {
    path: "/locations",
    name: "locations",
    component: () => import("../views/Locations.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
