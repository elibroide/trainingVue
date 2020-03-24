import usersApi from "@/api/users";

const MUTATIONS = {
  SET_USERS: "SET_USERS",
  REMOVE_USER: "REMOVE_USER",
  ADD_USER: "ADD_USER",
  SET_IS_FETCHING: "SET_IS_FETCHING"
};

const ACTIONS = {
  GET_USERS: "getUsers",
  REMOVE_USER: "removeUser",
  ADD_USER: "addUser"
};

const state = {
  isFetching: Boolean,
  userList: Array
};

const actions = {
  async [ACTIONS.GET_USERS]({ commit }) {
    try {
      commit(MUTATIONS.SET_IS_FETCHING, true);
      const users = await usersApi.getUsers();
      commit(MUTATIONS.SET_USERS, users);
    } catch (err) {
      // TODO: Handle error
      console.log("catch " + err);
    } finally {
      commit(MUTATIONS.SET_IS_FETCHING, false);
    }
  },
  async [ACTIONS.REMOVE_USER]({ commit }, id) {
    try {
      await usersApi.removeUser(id);
      commit(MUTATIONS.REMOVE_USER, id);
    } catch (err) {
      // TODO: Handle error
      console.log("catch " + err);
    }
  },
  async [ACTIONS.ADD_USER]({ commit }, user) {
    try {
      const newUser = await usersApi.addUser(user);
      commit(MUTATIONS.ADD_USER, newUser);
    } catch (err) {
      // TODO: Handle error
      console.log("catch " + err);
    }
  }
};

const mutations = {
  [MUTATIONS.SET_USERS](state, status) {
    state.userList = status;
  },
  [MUTATIONS.REMOVE_USER](state, id) {
    const index = state.userList.findIndex(user => user.id === id);
    if (index >= 0) {
      state.userList.splice(index, 1);
    }
  },
  [MUTATIONS.ADD_USER](state, newUser) {
    const index = state.userList.findIndex(user => user.id === newUser.id);
    if (index === -1) {
      state.userList.push(newUser);
    }
  },
  [MUTATIONS.SET_IS_FETCHING](state, status) {
    state.isFetching = status;
  }
};

const getters = {
  usersCount: state => state.userList.length
};

export default {
  namespaced: true,
  state,
  actions,
  mutations,
  getters
};
