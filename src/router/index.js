import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/opiniones/",
    name: "opinions",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "opinions" */ "../views/OpinionsView.vue"),
  },
  {
    path: "/opiniones/:nombre",
    name: "opinions",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "opinions" */ "../views/OpinionsView.vue"),
    props: true,
  },
  {
    path: "/administracion/:nombre",
    name: "administration",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/AdministrationView.vue"),
    props: true,
  },
  {
    path: "*",
    name: "error",
    component: () =>
      import(/* webpackChunkName: "error" */ "../views/ErrorView.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
