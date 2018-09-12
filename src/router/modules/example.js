import About from "../../views/About.vue";

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
  }
];
