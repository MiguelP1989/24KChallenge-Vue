<template>
<div>
  <header>
    <h1>Products</h1>
  </header>
<div class="products_container">
 <section class="products" v-for="product in products" :key="product.id">
      <img class="product_image" :src="'../../public' + product.image" alt="Cameras" />
      <h2>{{product.name}}</h2>
      <p>{{product.description}}</p>
      <aside>
        <ul>
          <li>{{product.price}} {{product.currency}}</li>
          <li>In Stock: {{product.stockCount}} items</li>
        </ul>
        <button 
         @click.prevent="addProductToCart(product)"
         :disabled="isDisabel(product)"
        >{{button.text}}</button>
      </aside>
    </section>
    {{getProductsList}}

    </div>
</div>
    
</template>


<script>
import productsList from "../../public/products.js"

export default {
    data() {
        return {
            products: [],
            
            cart: {
                items: []
            },
            button: {
                text: "",
            },
            disabled: false,
            
        }
    },
      computed: {

    },
    methods: {
        addProductToCart(product) {

            product.stockCount--
            const updatedItems = {
                ...product,
                quantity: 1
            }
           this.$store.commit("addProductToCart", updatedItems) 
            },
    
        isDisabel(product) {
            if (product.stockCount == 0) {
                this.button.text = "Sold out" 
                return !this.disabled
            } else {
                this.button.text = "Add to Cart"
           
         }
        } 
    
  },
    mounted() {
        this.$store.commit("getListProducts", productsList)
        // console.log("productsList", productsList)
    }   
}
</script>


<style scoped>

button {
  margin: 18px 0;
  width: 50%;
  background: #330099;
  color: white;
  text-transform: uppercase;
  cursor: pointer;
   transition: 0.1s ease-in-out;
 
}
button:hover{
  background-color: blueviolet;
}
aside {
  height: 0 auto;
  display: flex;
  justify-content: space-between;
}

.products_container {
 display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: auto;  
    
}
.products {
margin: 5px 10px;
  padding: 5px;
  width: 40%;
    
}

</style>