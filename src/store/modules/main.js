import * as types from '../mutation-types'


const state = {
    isLoading: false,
    direction: 'forward'
}
const mutations = {
    [types.UPDATE_DIRECTION] (state, payload){
        state.direction = payload.direction;
    },
    [types.UPDATE_LOADING] (state, payload) {
        state.isLoading = payload.isLoading;
    }
}

export default {
    state,
    mutations
}