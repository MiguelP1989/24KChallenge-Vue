import Vue from "vue"
import Vuex from "vuex"

Vue.use(Vuex)

import products from "../../public/products"

export const store = new Vuex.Store({
    state: {
        products: products,
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
        },
        removeItemFromCart(state, payload) {
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
         },
         initialiseStore(state) {
          if(localStorage.getItem('store')) {
            this.replaceState(
                Object.assign(state, JSON.parse(localStorage.getItem('store')))
            )
        }
     }
  
    }
  
})

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state))
})