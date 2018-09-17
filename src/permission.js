import router from "./router";
import store from "./store/index";
// import { Notification } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // getToken from cookie
NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login", "/auth-redirect"]; // no redirect whitelist

router.beforeEach((to, from, next) => {
  NProgress.start(); // start progress bar
  if (getToken()) {
    // determine if there has token
    /* has token*/
    if (to.path === "/login") {
      next({ path: "/" });
      return NProgress.done();
    }
    if (!store.state.user.userId) {
      store
        .dispatch("GetUserInfo")
        .then(() => {
          next();
        })
        .catch(err => {
          console.log(err);
          store.dispatch("FedLogOut").then(() => {
            console.log(`退出登录....`);
            next({ path: "/login" });
          });
        });
    }
    next();
  } else {
    /* has no token*/
    if (whiteList.indexOf(to.path) !== -1) {
      // 在免登录白名单，直接进入
      next();
    } else {
      next("/login"); // 否则全部重定向到登录页
      NProgress.done(); // if current page is login will not trigger afterEach hook, so manually handle it
    }
  }
});

router.afterEach(() => {
  NProgress.done(); // finish progress bar
});
