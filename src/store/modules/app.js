import Cookies from "js-cookie";
import { getMenu } from "@/api/app";
import { traverseTree } from "@/utils/helper";
import { resetPwd } from "@/api/app";
import { Message } from "element-ui";
import router from "@/router/index";

function generateMenu(data) {
  traverseTree({ children: data }, "children", function(child) {
    child.meta = {
      icon: child.icon,
      title: child.name
    };
    child.name = child.code;
    child.path = child.page_url;
  });
  return data;
}
const app = {
  state: {
    sidebar: {
      opened: !+Cookies.get("sidebarStatus"),
      items: []
    },
    device: "desktop",
    language: Cookies.get("language") || "en"
  },
  mutations: {
    UPDATE_SIDEBAR_ITEMS: (state, items) => {
      state.sidebar.items = items;
    },
    TOGGLE_SIDEBAR: state => {
      if (state.sidebar.opened) {
        Cookies.set("sidebarStatus", 1);
      } else {
        Cookies.set("sidebarStatus", 0);
      }
      state.sidebar.opened = !state.sidebar.opened;
    },
    CLOSE_SIDEBAR: (state, withoutAnimation) => {
      Cookies.set("sidebarStatus", 1);
      state.sidebar.opened = false;
      state.sidebar.withoutAnimation = withoutAnimation;
    },
    TOGGLE_DEVICE: (state, device) => {
      state.device = device;
    },
    SET_LANGUAGE: (state, language) => {
      state.language = language;
      Cookies.set("language", language);
    }
  },
  actions: {
    updateSidebarItems({ commit }) {
      getMenu().then(res => {
        commit("UPDATE_SIDEBAR_ITEMS", generateMenu(res.data));
      });
    },
    toggleSideBar({ commit }) {
      commit("TOGGLE_SIDEBAR");
    },
    closeSideBar({ commit }, { withoutAnimation }) {
      commit("CLOSE_SIDEBAR", withoutAnimation);
    },
    toggleDevice({ commit }, device) {
      commit("TOGGLE_DEVICE", device);
    },
    setLanguage({ commit }, language) {
      commit("SET_LANGUAGE", language);
    },
    resetPwd(context, form) {
      resetPwd(form).then(() => {
        Message.success("修改密码成功");
        router.push("/login");
      });
    }
  }
};

export default app;
