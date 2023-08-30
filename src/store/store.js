import { createStore } from "vuex";

const store = createStore({
  state: {
    user: {},
    token: "",
    patient: {},
  },
  getters: {
    user(state) {
      return state.user;
    },
    token(state) {
      return state.token;
    },
    patient(state) {
      return state.patient;
    },
  },
  mutations: {
    setUser(state, user) {
      state.user = user;
    },
    setToken(state, token) {
      state.token = token;
    },
    setPatient(state, patient) {
      state.patient = patient;
    },
  },
});

export default store;
