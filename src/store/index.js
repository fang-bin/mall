import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'
import cart from './modules/cart'
import details from './modules/details'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

// const state = {
//     isLoading: false,
//     direction: 'forward'
// }

// export default new Vuex.Store({
//     state,
//     mutations: {
//         UPDATE_DIRECTION (state, direction){
//             state.direction = direction;
//         },
//         UPDATE_LOADING (state, status) {
//             state.isLoading = status;
//         }
//     }
// })

export default new Vuex.Store({
    modules: {
        main,
        cart
    },
    strict: debug,
})