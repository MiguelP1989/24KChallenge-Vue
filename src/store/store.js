import Vue from "vue"
import Vuex from "vuex"


Vue.use(Vuex)


export const store = new Vuex.Store({
    state: {
        products: [],
        cart: [],
     

    },

    mutations: {

        getListProducts(state, payload) {
            state.products = payload
            
        },
        addProductToCart(state, payload) { 

        if (state.cart.length == 0) {
                state.cart.push(payload)
         } else {
              const updateItem = state.cart.find(item => item.id === payload.id)
            if (!updateItem) {
                state.cart.push(payload)
              } else {
                updateItem.quantity+=1
                updateItem.stockCount--
              }
         }    
            console.log(state.cart);

        

            
    },
    removeItemFromCart(state, payload) {
        // state.cart = state.cart.filter(item => item.id  !== payload.id)
        
       state.product = state.products.forEach(item => { 
           if (item.id === payload.id) {    
                item.stockCount += payload.quantity
           }
        })

    },
    decreasing(state, payload) {
        
       state.products.forEach(item => {
            if ( item.id == payload.id) {
                item.stockCount++
            }          
        })
        
    },
    increasing(state, payload) {
        state.product = state.products.forEach(item => {
            if ( item.id == payload.id) {
                item.stockCount--
            }
               
            
        })
    }
    }
})

