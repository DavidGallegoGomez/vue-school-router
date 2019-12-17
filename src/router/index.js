import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import store from "@/data/store.js";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: Home,
    props: true
  },
  {
    path: "/destination/:slug",
    name: "DestinationDetails",
    props: true,
    component: () =>
      import(
        /* webpackChunkName: "DestinationDetails" */ "@/views/DestinationDetails"
      ),
    children: [
      {
        path: ":experienceSlug",
        name: "experienceDetails",
        props: true,
        component: () =>
          import(
            /* webpackChunkName: "ExperienceDetails" */ "@/views/ExperienceDetails"
          ),
        meta: { requiresAuth: true } // DGG: Prueba (Hay que logarse para ver los detalles de las experiencias)
      }
    ],
    beforeEnter: (to, from, next) => {
      const exists = store.destinations.find(
        destination => destination.slug === to.params.slug
      )
      if (exists) {
        next()
      }
      else {
        next({ name: "notFound" });
      }
    }
  },
  {
    path: "/user",
    name: "user",
    component: () =>
      import(
        /* webpackChunkName: "User" */ "@/views/User"
      ),
    meta: { requiresAuth: true }
  },
  {
    path: "/login",
    name: "login",
    component: () =>
      import(
        /* webpackChunkName: "Login" */ "@/views/Login"
      )
  },
  {
    path: "/invoices",
    name: "invoices",
    component: () =>
      import(
        /* webpackChunkName: "Invoices" */ "@/views/Invoices"
      ),
    meta: { requiresAuth: true }
  },
  {
    path: "/404",
    alias: "*",
    name: "notFound",
    component: () =>
      import(
        /* webpackChunkName: "NotFound" */ "@/views/NotFound"
      )
  }
];

const router = new VueRouter({
  mode: "history", // DGG: Para evitar los '#' en las URLs de las rutas
  base: process.env.BASE_URL,
  routes,
  linkExactActiveClass: "vue-school-active-class",
  scrollBehavior (to, from, savedPosition) {
    if (savedPosition) { return savedPosition; }
    else {
      const position = {}
      if (to.hash) {
        position.selector = to.hash;
        if (to.hash === "#experience") {
          position.offset = { y: 150 }
        }
        if (document.querySelector(to.hash)) {
          return position;
        }
        return false;
      }
    }
  }
});

// DGG: Para las 'guardas' de navegación
router.beforeEach( (to, from, next) => {
  // if (to.meta.requiresAuth) { // DGG: Es una forma menos óptima
  if (to.matched.some( record => record.meta.requiresAuth )) {
    // need to login
    if (!store.user) {
      next({
        name: "login",
        query: { redirect: to.fullPath }
      });
    } else { 
      next();
    }
  } else {
    next();
  }
} );

export default router;
