import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        products: [],
        cart: []

    },

    mutations: {
        getCartList(state) {
            console.log("stateeeeeeeee", state);
            
        },

        getListProducts(state, payload) {
            state.products = payload
            
        },
        addProductToCart(state, payload) {
            // state.cart.push(payload)
           
            if (state.cart.length == 0) {
                state.cart.push(payload)
            } else {
                state.cart.forEach(item => {
                    if (item.id === payload.id) {
                        const updatedItem = state.cart
                        updatedItem[0].quantity++
                        updatedItem[0].stockCount--
                        console.log("updatedItem", updatedItem);
                        // state.cart = updatedItem
                    }
                })           
            } 
        if (state.cart) {
            state.cart.forEach((item, idx) => {
                // console.log("idx", idx);
                
                if (item.id !== payload.id) {
                    console.log("el", item.id, "payload.id", payload.id);
                    state.cart.push(payload)
                } 
            })
        }

        // console.log("payload", payload);   
            
    },
    removeItemFromCart(state, payload) {
        state.cart = state.cart.filter(item => item.id  !== payload.id)
        
       state.product = state.products.forEach(item => { 
           if (item.id === payload.id) {    
                item.stockCount += payload.quantity
           }
        })

    },
    decressing(state, payload) {
        state.product = state.products.forEach(item => {
            if ( item.id == payload.id) {
                item.stockCount ++
            }          
        })
        
    },
    incressing(state, payload) {
        state.product = state.products.forEach(item => {
            if ( item.id == payload.id) {
                item.stockCount --
            }
               
            
        })
    }
    }
})

