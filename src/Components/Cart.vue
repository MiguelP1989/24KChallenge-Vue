<template>
  
<div class="cart_container">
  <h1 >Your shopping cart</h1>

<div v-if="cartList.length > 0">
  <div class="item_container" v-for="item in cartList" :key="item.name">
    <!-- <div v-for="product in item" :key="product.id"> -->
      <img :src="'../../public' + item.image" alt="">
      
    <div class="items">
    <div class="name_stock">
    <p class="item_name">{{item.name}}</p>
    <p> In Stock: {{item.stockCount}}</p>
  </div>
  <div class="btns_container">
    <!-- <button class="btn_cart" :disabled="isdesable(item)" @click="increasingQuantity(item)">+</button> --> 
   
      <!-- <button class="btn_cart" @click="decressingQuantity(item)">-</button>  -->
     <!-- <button class="btn_cart_REMOVE" @click="deleteItemFromCart(item)">x</button> -->
     </div>
    </div>
    <div class="price_quantity">
    <p>{{item.quantity}} Items selected</p>
    <!-- <p> {{totalpriceEachitem(item)}} {{item.currency}}</p> -->
    </div>
    <!-- </div> -->
    </div>
    <div class="total">
     
      <button>CHECK OUT</button>
     <h3>Your total: {{cartTotal}} € </h3>
   
    </div>

    
    
</div>

<h1 v-else class="cart_empty">Cart is empty!</h1>
</div>
</template>



<script>
export default {
    data() {
        return {
            cartList: []
        }
    },
    computed: {
       cartTotal() {
           let total = 0
           this.cartList.forEach((item => {
               total += item.quantity * item.price
           }))
           return total
       }
    },
    mounted() {
        this.cartList = this.$store.state.cart
        console.log("cartList", this.cartList);
        return true
        

    }
    
}
</script>




<style scoped>

</style>