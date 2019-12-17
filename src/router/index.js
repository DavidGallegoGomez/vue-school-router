import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true
  },
  {
    path: "/details/:slug",
    name: "DestinationDetails",
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "@/views/DestinationDetails"
      ),
    props: true
  }
];

const router = new VueRouter({
  mode: "history", // DGG: Para evitar los '#' en las URLs de las rutas
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "vue-school-active-class"
});

export default router;
