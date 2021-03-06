import Vue from "vue";
import VueRouter from "vue-router";
import Home from "../views/Home.vue";
import Login from "../views/Login.vue";
import myprofile from "../views/myprofile.vue";
import imageGallery from "../components/imageGallery.vue";
import UploadImage from "../views/UploadImage.vue";
import Header from "../components/Header";

Vue.use(VueRouter);

const routes = [
  {
    path: "/Home",
    name: "Home",
    component: Home,
  },
  {
    path: "/Header",
    name: "Header",
    component: Header,
  },
  {
    path: "/",
    name: "Login",
    component: Login,
  },
  {
    path: "/myprofile",
    name: "myprofile",
    component: myprofile,
  },
  {
    path: "/UploadImage",
    name: "UploadImage",
    component:UploadImage,
  },
  {
    path: "/imageGallery",
    name: "imageGallery",
    component:imageGallery,
  },
  {
    path: "/Signup",
    name: "Signup",
    // route level code-splitting
    // this generates a separate chunk (about.[hash].js) for this route
    // which is lazy-loaded when the route is visited.
    component: () =>
      import(/* webpackChunkName: "about" */ "../views/Signup.vue"),
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

export default router;
