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
            state.products = payload
            
        },
        addProductToCart(state, payload) {
           
            if (!state.cart.length) {
                state.cart.push(payload)
            } else {
                state.cart.forEach(item => {
                    if (item.id === payload.id) {
                        const updatedItem = [...state.cart]
                        updatedItem[0].quantity++
                        updatedItem[0].stockCount--
                        console.log("updatedItem", updatedItem);
                        // state.cart = updatedItem
                    }
                })           
            } 
        if (state.cart) {
            state.cart.forEach(el => {
                if (el.id !== payload.id) {
                    console.log("el", el.id, "payload.id", payload.id);
                    state.cart.push(payload)
                } 
            })
        }

        console.log("payload", payload);   
            
    }
    
    }
})

