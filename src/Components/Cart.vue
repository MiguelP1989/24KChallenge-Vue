<template>
  
<div class="cart_container">
  <h1 >Your shopping cart</h1>

<div v-if="cartList.length > 0">
  <div class="item_container" v-for="item in cartList" :key="item.name">
      <img :src="'../../public' + item.image" alt="">
      
    <div class="items">
    <div class="name_stock">
    <p class="item_name">{{item.name}}</p>
    <p> In Stock: {{item.stockCount}}</p>
  </div>
  <div class="btns_container">
    <button class="btn_cart" :disabled="isDesabled(item)" @click="increasingQuantity(item)">+</button> 
   
      <button class="btn_cart" @click="decressingQuantity(item)">-</button> 
     <button class="btn_cart_remove" @click="deleteItemFromCart(item)">x</button>
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
    data() {
        return {
            cartList: [],
            disabled: false
        }
    },
    computed: {
       cartTotalPrice() {
           let total = 0
           this.cartList.forEach((item => {
               total += item.quantity * item.price
           }))
           return total
       }
       
    
    },
    methods: {
        totalPriceEachitem(item) {
            return item.price * item.quantity
        },
         increasingQuantity(item) {
    item.stockCount--
    item.quantity++

    
    },
        decressingQuantity(item) {   
      item.quantity--
     
      item.stockCount++;
      if (item.quantity == 0) {
          this.deleteItemFromCart(item)
        
      }

    },
     deleteItemFromCart(item) {
          var index = this.cartList.indexOf(item);
          console.log(index);
          
      if (index !== -1) {
        this.cartList.splice(index, 1);

      }
    },
    isDesabled(item) {
        if (item.stockCount == 0) {
            return !this.disabled 
       
        }
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

img {
  width: 200px;
}

.item_container{
  display: flex;
  border: 1px solid gray;
  align-items: center;
  flex-direction: row;
  padding: 10px;
  margin: 5px;
}

.cart_container{
  padding: 20px;
  /* border: 2px solid red; */
}

.items{
  padding-left: 30px;
  width: 100%;;
  display: flex;
  /* border: 2px solid blue; */
  margin: auto
}

.item_name{
  font-size: 20px;;
}

.btns_container{
  /* display: flex; */
  /* margin: auto; */
  /* border: 2px solid yellow; */
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: flex-end;
  flex-direction: column;
  /* float: left; */

}

.btn_cart, .btn_cart_remove{
  background:  #330099;
  color: white;
  width: 27px;
  cursor: pointer;
  border: none;
  padding: 8px;
  text-align: center;
   transition: 0.1s ease-in-out;
 
}

.btn_cart_remove {
  background-color: red;
}


.price_quantity{
  padding-left: 20px;
  /* border: 1px solid brown; */
  margin: auto ;
}
.total {
  width: 100%;
  /* border: 1px solid red; */
  display: flex;
  justify-content: space-between;
  margin: 0 5px

 
}
button {
  background:  #330099;
  color: white;
  padding: 0 15px;
  width: 200px;
  margin: 7px 0 7px 10px
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

</style>