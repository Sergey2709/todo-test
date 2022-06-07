import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    visibilityLogin: true,
    visibilityTodo: false,
    name: '',
    tasksList: [],
  },
  getters: {
    GET_visibilityTodo: (state) => {
      return state.visibilityTodo;
    },
    GET_visibilityLogin: (state) => {
      return state.visibilityLogin;
    },
    GET_name: (state) => {
      return state.name;
    },
    GET_tasks: (state) => {
      return state.tasksList;
    }
  },
  mutations: {
    SET_visibilityTodo: (state, payload) => {
      state.visibilityTodo = payload;
    },
    SET_visibilityLogin: (state, payload) => {
      state.visibilityLogin = payload;
    },
    SET_name: (state, payload) => {
      state.name = payload;
    },
    SET_task: (state, payload) => {
      state.tasksList = [...state.tasksList, payload];
    },
    CHANGE_taskList: (state, payload) => {
      const indexTask = state.tasksList.map((el, index) => {
        if (+payload === el.id) {
          return index;
        }
      });
      state.tasksList.splice(indexTask, 1);
    },
    CHANGE_task: (state, payload) => {
      state.tasksList.map((el, index) => {
        if (+payload.id === el.id) {
          return el.text = payload.text;
        }
      });
    },
  },
  actions: {
    ADD_visibilityTodo({commit}) {
      commit("SET_visibilityTodo", true)
    },
    ADD_visibilityLogin({commit}) {
      commit("SET_visibilityLogin", false)
    },
    ADD_name({commit}, name) {
      commit("SET_name", name)
    },
    ADD_task({commit}, data) {
      commit("SET_task", data)
    },
    DEL_task({commit}, id) {
      commit("CHANGE_taskList", id)
    },
    EDIT_task({commit}, data) {
      commit("CHANGE_task", data)
    },
  },
  modules: {
  }
})
