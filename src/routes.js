import Products from "./components/Products.vue"
import Cart from "./components/Cart.vue"


export const routes = [
    {path: "/", component: Products},
    {path: "/cart", component: Cart}
]