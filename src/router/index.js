import Vue from "vue";
import VueRouter from "vue-router";
import Signed from "../views/Signed.vue";
import Login from "../views/Login.vue";
import Register from "../views/Register.vue";
import Wildcard from "../views/Wildcard.vue";

import firebase from "firebase/app";
import "firebase/auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "login",
    component: Login,
  },
  {
    path: "/register",
    name: "register",
    component: Register,
  },
  {
    path: "/signed",
    name: "signed",
    component: Signed,
    meta: { requiresAuth: true },
  },
  {
    path: "*",
    name: "wildcard",
    component: Wildcard,
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  const requiresAuth = to.matched.some((record) => record.meta.requiresAuth);
  const isAuthenticated = firebase.auth().currentUser;
  if (requiresAuth && !isAuthenticated) {
    next("*");
  } else {
    next();
  }
});

export default router;
