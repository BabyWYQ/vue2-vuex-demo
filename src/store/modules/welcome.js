import * as types from '../mutation-types'

// initial state
const state = {
  message: "",
  show: false
}

// getters
const getters = {
  message: state => state.message,
  show: state => state.show
}

// actions
const actions = {
  isShowModal({ commit, state }, user) {
    const message = state.message
    commit(types.SHOW_MODAL)
  }
}

// mutations
const mutations = {
  [types.SHOW_MODAL](state, { message }) {
    state.show = true;
    state.message = ' 用户的详细信息';
  },
  [types.HIDE_MODAL](state, { message }) {
    state.show = false;
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}
