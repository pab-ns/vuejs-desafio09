import Vue from "vue";
import Router from "vue-router";

// const Inicio = () => import("./components/Inicio");
// import Inicio from "./components/Inicio.vue";

Vue.use(Router);

export default new Router({
  mode: "history",
  routes: [
    // {
    //   path: "",
    //   redirect: "/",
    // },
    {
      path: "/",
      name: "inicio",
      // component: Inicio,
      component: () => import("./components/Inicio.vue"),
      alias: ["/home", "/portada", "/inicio"],
    },
    {
      path: "/busquedad",
      name: "busquedad",
      component: () => import("./components/Busquedad.vue"),
    },
    {
      path: "/ventas",
      name: "ventas",
      component: () => import("./components/Ventas.vue"),
    },
    {
      path: "/total",
      name: "total",
      component: () => import("./components/Total.vue"),
    },
    // {
    //   path: "/inicio",
    //   redirect: "/",
    // },
    {
      path: "*",
      name: "notfound",
      component: () => import("./components/404.vue"),
    },
  ],
});
