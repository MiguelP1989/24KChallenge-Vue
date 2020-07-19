


# 24k_shopping_cart

> A Vue.js project 

A basic shopping cart application. 

* Rendering a list of products
* Adding items to the cart
* Removing items from the cart
* Displaying the number of items in the cart
* Displaying the total price of the items in the cart
* Displaying the total price for each group of items in the cart based on quantity.
* Changing “Add To Cart” button caption to “Sold Out” and disable it when inventory is deleted.


## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build
```


## Dependencies

> vue-router
npm install vue-router

* Used vue-router to link both components (Cart and Products)

> vuex
npm install vuex --save

* Used vuex to store the list of products and cart items in state for a better manage of data. Using mutations to update both components (Cart and Products) when removing or adding items.
Also, used localStorage with vuex store to persist data even after the browser is closed.













