import { refresh } from "@/services/auth";
import { login, logout, signup } from "@/services/auth";

const state = () => ({
  refreshing: false,
  queue: [],
});

const mutations = {
  SET_REFRESHING(state, value) {
    state.refreshing = value;
  },
  PUSH_QUEUE(state, promise) {
    state.queue.push(promise);
  },
  CLEAR_QUEUE(state) {
    state.queue = [];
  },
};

const actions = {
  async handleRefresh({ state, commit }) {
    if (state.refreshing) {
      // already refreshing → wait
      return new Promise((resolve, reject) => {
        commit("PUSH_QUEUE", { resolve, reject });
      });
    }
    commit("SET_REFRESHING", true);
    try {
      await refresh();
      // resolve all queued requests
      state.queue.forEach((p) => p.resolve());
      commit("CLEAR_QUEUE");
    } catch (err) {
      // reject all queued requests
      state.queue.forEach((p) => p.reject(err));
      commit("CLEAR_QUEUE");
      throw err;
    } finally {
      commit("SET_REFRESHING", false);
    }
  },
  async login(_, postData) {
    console.log("Logging in with store", postData);
    await login(postData);
    console.log("Logging in with", postData);
  },
  async logout() {
    await logout();
  },
  async signup(_, postData) {
    await signup(postData);
  },
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
};
