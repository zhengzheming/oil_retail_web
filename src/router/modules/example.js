import About from "../../views/About.vue";
import resetPwd from "@/views/resetPwd";

export default [
  {
    path: "",
    name: "home",
    meta: { title: "首页" }
  },
  {
    path: "/about",
    name: "about",
    component: About,
    meta: { title: "About" }
  },
  {
    path: "/reset",
    name: "reset-pwd",
    component: resetPwd
  }
];
