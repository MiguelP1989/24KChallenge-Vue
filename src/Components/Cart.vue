<template>
  
<div class="cart_container">
  <h1 >Your shopping cart</h1>

<div class="item_outer_container" v-if="cartList.length > 0">
  <div class="item_container" v-for="(item, index) in cartList" :key="index">
 
      <img :src="'../../public' + item.image" alt="">
      
    <div class="items">
    <div class="name_stock">
      <div>
    <p class="item_name">{{item.name}}</p>
    <p> In Stock: {{item.stockCount}}</p>
    </div>
  <div class="btns_container">
    <button class="btn_cart" 
    :disabled="item.stockCount == 0"
    :class="{'buttonHover': item.stockCount == 0}"
     @click="increasingQuantity(item)">+</button> 
   
    <button class="btn_cart" 
    @click="decressingQuantity(item, index)">-</button> 
    <button class="btn_cart_remove"
     @click="deleteItemFromCart(item, index)">x</button>
     </div>
     </div>
    </div>
    <div class="price_quantity">
    <p>{{item.quantity}} Items selected</p>
    <p> {{totalPriceEachitem(item)}} {{item.currency}}</p>
    </div>

    </div>
    <div class="total">
     
      <button>CHECK OUT</button>
     <h3>Your total: {{cartTotalPrice}} € </h3>
   
    </div>

    
    
</div>

<h1 v-else class="cart_empty">Cart is empty!</h1>
</div>
</template>



<script>
export default {
    computed: {
       cartTotalPrice() {
           let total = 0
           this.cartList.forEach((item => {
               total += item.quantity * item.price
           }))
           return total
       },
       cartList() {
         return  this.$store.state.cart
       }
    },
    methods: {
        totalPriceEachitem(item) {
            return item.price * item.quantity
        },
         increasingQuantity(item) {
          item.stockCount--
          item.quantity++
          this.$store.commit("increasing", item)
    
       },
        decressingQuantity(item, index) {     
          item.quantity--
          item.stockCount++;
          if (item.quantity == 0) {
             this.deleteItemFromCart(item, index)
         }
             this.$store.commit("decreasing", item)
       },
        deleteItemFromCart(item, index) { 
             if (index !== -1) {
               this.cartList.splice(index, 1)
             }
          this.$store.commit("removeItemFromCart", item, index)
   
    }
    }
    
}
</script>




<style scoped>
.buttonHover:hover {
background-color: #330099;;

}

img {
  width: 200px;
}
.item_outer_container{
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
}
.item_container{
  width: 60%;
  display: flex;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  margin: 5px;
  background-color:  #eee;;;

}

.cart_container{
  padding: 20px;
}
.items{
  padding-left: 30px;
  width: 100%;;
  display: flex;
  flex-direction: row;
}

.btns_container{
  width: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  border-right: 0.5px solid grey;
  padding-right: 10px;;
}

.btn_cart, .btn_cart_remove{
  background:  #330099;
  width: 35px;
  cursor: pointer;
  border: none;
  padding: 8px;
  text-align: center;
   transition: 0.1s ease-in-out;
 
}

.btn_cart_remove {
  background-color: tomato
}
.btn_cart_remove:hover {
  background-color: red;
}


.price_quantity{
  padding-left: 20px;
  margin: auto ;
  position: relative;
}
.total {
  width: 83%;
  display: flex;
  justify-content: space-between;
  margin: 0 5px
}
button {
  background:  #330099;
  color: white;
  padding: 0 15px;
  width: 200px;
  margin: 7px 0 7px 10px;
  border:
}
button:hover {
  background-color:  #AA80FF;
  color:  #eee;;
}
h3 {
  margin-right: 20px;;
}
.cart_empty{
  width: 100%;
  height: 30vh;
  display: flex; 
   align-items: center;
  justify-content: center; 
}

h1{
  text-align: center;
}

@media screen and (max-width: 600px) {

.item_name{
  font-size: 20px;
  font-weight: 200px
}

.item_container{
width: 100%;
display: flex;
flex-direction: column;
}
.items {
  margin: 0;
  width: 77%;

}
img{
  width: 80%;
  margin-top: 10px;
}
.btn_cart, .btn_cart_remove{
margin-right: 20px;
}
.price_quantity{
  text-align: center;
  width: 80%;
}
.btns_container{
  margin-top: 4px;
  display: flex;
  flex-direction: row;
  border: none
}
.name_stock {
  width: 100%;
  margin-right: 29px;
}
.total {
  width: 100%;
  display: flex;
  justify-content: space-between;
}

h3{
  margin-left: 25px;;
}
}
@media screen and (min-width: 600px) {
  .btns_container{

  display: flex;
  align-items: flex-end;
  }
  .item_container{
    width: 80%;
  }
  .name_stock {
    width: 100%;
    display: flex;
    flex-direction: row;
  }
}

</style>