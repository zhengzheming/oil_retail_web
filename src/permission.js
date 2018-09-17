import router from "./router";
import store from "./store/index";
// import { Notification } from "element-ui";
import NProgress from "nprogress"; // progress bar
import "nprogress/nprogress.css"; // progress bar style
import { getToken } from "@/utils/auth"; // getToken from cookie
import authCodesMap from "@/services/authCodes";
NProgress.configure({ showSpinner: false }); // NProgress Configuration

const whiteList = ["/login", "/auth-redirect"]; // no redirect whitelist

function verifyRouteAuth({ routeName }) {
  const authCodes = authCodesMap[routeName];
  if (!authCodes) return true;
  const module = store.getters.authCodes.find(authCode => {
    console.log(authCode.code, authCodes[0]);
    return authCode.code == authCodes[0];
  });
  console.log(module, authCodes[0]);
  if (!module) return false;
  const hasAction = module.actions.some(action => action.code == authCodes[1]);
  console.log(module, hasAction, authCodes);
  if (!hasAction) return false;
  return true;
}

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
      console.log(`no userId....`);
      return store
        .dispatch("GetUserInfo")
        .then(() => {
          const hasAuth = verifyRouteAuth({ routeName: to.name });
          if (!hasAuth) return next("/401");
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
    const hasAuth = verifyRouteAuth({ routeName: to.name });
    console.log(`has userId...`, hasAuth, to.name);
    if (!hasAuth) return next("/401");
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
