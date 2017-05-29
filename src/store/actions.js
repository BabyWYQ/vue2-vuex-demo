import * as types from './mutation-types'

export const showModalAction = ({ commit }, info) => {
  if (info) {
    commit(types.SHOW_MODAL, {
      message: info
    })
  } else {
    commit(types.HIDE_MODAL, {
      message: info
    })
  }
}
