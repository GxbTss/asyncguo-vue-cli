import * as types from './mutation-types'

export const setNeedLogin = ({ commit, state }, boolean ) => commit(types.SET_NEEDLOGIN, boolean)

export const showLoading = ({ commit, state }) => commit(types.SHOW_LOADING)

export const hideLoading = ({ commit, state }) => {
  commit(types.HIDE_LOADING)
}

export const setMsgTip = ({ commit, state }, msgObj) => {
  let timer = setTimeout(() => {
    commit(types.HIDE_MSGTIP)
  }, 6000)
  msgObj.timer = timer
  commit(types.SET_MSGTIP, msgObj)
}
export const setMsgTipStyle = ({ commit, state }, styleObj) => {
  commit(types.SET_MSGTIPSTYLE, styleObj)
}
