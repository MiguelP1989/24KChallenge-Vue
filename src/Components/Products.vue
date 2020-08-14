<template>
<div>
  <header>
    <h1>Products</h1>
  </header>
<div class="products_container">
 <section class="products" v-for="(product, index) in productList" :key="index">
   <div>
      <img class="product_image" :src="'../../public' + product.image" alt="Cameras" />
      <div>
      <h2>{{product.name}}</h2>
      <p>{{product.description}}</p>
      </div>
      </div>
      <aside>
        <ul>
          <li>{{product.price}} {{product.currency}}</li>
          <li>In Stock: {{product.stockCount}}</li>
        </ul>
        <button 
  
         :disabled="product.stockCount == 0"
         v-if="product.stockCount == 0 ? buttonText = 'sold out' : buttonText = 'add to cart'"
         :class="{'buttonColor': product.stockCount == 0}"
         @click="addProductToCart(product)"
        >{{buttonText}}</button>
      </aside>
    </section>
    </div>
</div>
    
</template>


<script>
export default {
    computed: {
        productList() {   
          return this.$store.getters.productList
        }
    },
    methods: {
        addProductToCart(product) {

          product.stockCount--
        
           const item = {
            ...product,
            quantity: 1
           };

        // this.$store.commit("addProductToCart", item) 
          this.$store.dispatch('addProductToCart', item)
  
        }
        

  }, 
}
</script>


<style scoped>

.buttonColor {
  background: tomato;
}
.buttonColor:hover {
    background: tomato;
}

button {
  margin: 18px 5px;;
  width: 50%;
  background: #330099;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
   transition: 0.1s ease-in-out;
   border: none
 
}
button:hover{
  background-color: blueviolet;
}
aside {
  height: auto;
  display: flex;
  justify-content: space-between;
  width: 100%;
}

.products_container {
 display: flex;
  flex-wrap: wrap;
  justify-content: center;
    
}
.products {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  margin: 5px 10px;
  padding: 30px;
  width: 30%;
  background-color: #eee;;

    
}
@media screen and (max-width: 500px) {
.products {
width: 80%;
}

}
@media screen and (min-width: 500px) and (max-width: 820px) {

aside{
  display: flex;
  flex-direction: column;
}

button {
  width: 100%;
  padding: 10px;
}
}


</style>