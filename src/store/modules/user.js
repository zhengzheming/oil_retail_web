import { loginByUsername, logout } from "@/api/login";
import { getUserInfo } from "@/api/app";
import { getToken, setToken, removeToken } from "@/utils/auth";
// import { Message } from 'element-ui'
import router from "@/router/index";
function initState() {
  return {
    userId: "",
    email: "",
    mainRole: "",
    mainRoleId: "",
    phone: "",
    roles: [],
    status: "",
    token: getToken(),
    name: "",
    authCodes: []
  };
}
const user = {
  state: initState(),
  mutations: {
    SET_USERID: (state, userId) => {
      state.userId = userId;
    },
    SET_TOKEN: (state, token) => {
      state.token = token;
    },
    SET_STATUS: (state, status) => {
      state.status = status;
    },
    SET_NAME: (state, name) => {
      state.name = name;
    },
    SET_MAIN_ROLE: (state, { mainRole, mainRoleId }) => {
      state.mainRole = mainRole;
      state.mainRoleId = mainRoleId;
    },
    SET_AUTH_CODES: (state, authCodes) => {
      state.authCodes = authCodes;
    },
    CLEAR_USER: state => {
      Object.keys(state).forEach(key => {
        state[key] = initState()[key];
      });
    }
  },

  actions: {
    // 用户名登录
    LoginByUsername({ commit }, userInfo) {
      const username = userInfo.username.trim();
      return new Promise((resolve, reject) => {
        loginByUsername(username, userInfo.password)
          .then(response => {
            commit("SET_TOKEN", getToken());
            resolve(response.data);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 获取用户信息
    GetUserInfo({ commit, state }) {
      return new Promise((resolve, reject) => {
        getUserInfo(state.token)
          .then(response => {
            if (response.state !== 0) {
              reject(response.data);
            }
            const data = $utils.renameKeys(
              { user_right: "authCodes" },
              response.data
            );
            // if (data.authCodes && data.authCodes.length > 0) {
            //   // 验证返回的roles是否是一个非空数组
            //   commit("SET_AUTH_CODES", data.authCodes);
            // } else {
            //   Message.error("getInfo: authCodes must be a non-null array !")
            //   reject("getInfo: authCodes must be a non-null array !");
            // }
            commit("SET_AUTH_CODES", data.authCodes);
            commit("SET_NAME", data.name);
            commit("SET_USERID", data.user_id);
            commit("SET_STATUS", data.status);
            commit("SET_MAIN_ROLE", {
              mainRoleId: data.main_role_id,
              mainRole: data.main_role_name
            });
            resolve(response);
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 登出
    LogOut({ commit, state }) {
      return new Promise((resolve, reject) => {
        logout(state.token)
          .then(() => {
            commit("CLEAR_USER");
            removeToken();
            router.push("/login");
            resolve();
          })
          .catch(error => {
            reject(error);
          });
      });
    },

    // 前端 登出
    FedLogOut({ commit }) {
      return new Promise(resolve => {
        commit("SET_TOKEN", "");
        removeToken();
        resolve();
      });
    },

    // 动态修改权限
    ChangeRoles({ commit }, role) {
      return new Promise(resolve => {
        commit("SET_TOKEN", role);
        setToken(role);
        getUserInfo(role).then(response => {
          const data = response.data;
          commit("SET_AUTH_CODES", data.authCodes);
          commit("SET_NAME", data.name);
          resolve();
        });
      });
    }
  }
};

export default user;
