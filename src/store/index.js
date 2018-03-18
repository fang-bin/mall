import Vue from 'vue'
import Vuex from 'vuex'
import main from './modules/main'
import cart from './modules/cart'
import details from './modules/details'

Vue.use(Vuex)

const debug = process.env.NODE_ENV !== 'production'

export default new Vuex.Store({
    modules: {
        main,
        cart
    },
    strict: debug,
})