import Vue from "vue"
import Vuex from "vuex"



Vue.use(Vuex)

import products from "../../public/products"


export const store = new Vuex.Store({
    state: {
        products: products,
        cart: [],
     

    },
    actions: {
        addProductToCart: ({commit}, payload) => {
            commit("ADD_TO_CART", payload)
        },
        removeItemFromCart: ({commit}, payload) => {
            commit("REMOVE_ITEM", payload)
        },
        decreasingItems: ({commit}, payload) => {
            commit("DECREASE_ITEM_QUANTITY", payload)
        },
        increasingItems: ({commit}, payload) => {
            commit("IINCREASE_ITEM_QUANTITY", payload)
        },
        initialiseStoreg: ({commit}) => {
            commit("INITALISE_STOREG")
        }
    },
    mutations: {
        "ADD_TO_CART"(state, payload) { 

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
        "REMOVE_ITEM"(state, payload) {
             state.product = state.products.forEach(item => { 
                 if (item.id === payload.id) {    
                item.stockCount += payload.quantity
           }
        })
         },
         "DECREASE_ITEM_QUANTITY"(state, payload) {
        
             state.products.forEach(item => {
            if ( item.id == payload.id) {
                item.stockCount++
                 }          
             })
         },
         "IINCREASE_ITEM_QUANTITY" (state, payload) {
             state.product = state.products.forEach(item => {
            if ( item.id == payload.id) {
                item.stockCount--
            }   
        })
         },
         "INITALISE_STOREG"(state) {

            console.log(state)
             
            if(localStorage.getItem('store')) {
            this.replaceState(
                Object.assign(state, JSON.parse(localStorage.getItem('store')))
            )   
           }
         }
  
    },
    getters: {
        productList(state) {
            return state.products
        }
    }
  
})

store.subscribe((mutation, state) => {
    localStorage.setItem('store', JSON.stringify(state))
})