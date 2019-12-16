import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Brazil from "../views/Brazil.vue";
import Hawaii from "../views/Hawaii.vue";
import Panama from "../views/Panama.vue";
import Jamaica from "../views/Jamaica.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home
  },
  {
    path: "/brazil",
    name: "brazil",
    component: Brazil
  },
  {
    path: "/hawaii",
    name: "hawaii",
    component: Hawaii
  },
  {
    path: "/panama",
    name: "panama",
    component: Panama
  },
  {
    path: "/jamaica",
    name: "jamaica",
    component: Jamaica
  }
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes
});

export default router;
