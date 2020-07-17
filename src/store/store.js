import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        products: [],
        cart: []

    },
    mutations: {
        getListProducts(state, payload) {
            // console.log("state", state, "payload", payload);
            this.state.products = payload
            
        }
    }
})