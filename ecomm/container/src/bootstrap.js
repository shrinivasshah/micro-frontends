import { mount as cartMount } from "cart/CartShow"

import { mount as productsMount } from 'products/ProductsIndex'

const productContainer = document.querySelector("#my-products")
const cartContainer = document.querySelector("#my-cart")

if (productContainer) productsMount(productContainer)
if (cartContainer) cartMount(cartContainer)