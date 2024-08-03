
<script setup>
import { useCartStore } from '@/stores/cart';
const cartStore = useCartStore()
</script>


<template>
<p class="bg-lime-500 text-white rounded-full text-center  m-0" v-if="cartStore.itemsOnCart<1" id="quantity" >0</p>
<p class="bg-lime-500 text-white rounded-full text-center  m-0" v-else-if="cartStore.itemsOnCart>9" id="quantity" >9+</p>
<p  class="bg-lime-500 text-white rounded-full text-center  m-0" v-else="cartStore.itemsOnCart>9" id="quantity" >{{cartStore.itemsOnCart}}</p>
</template>

<style>
#quantity{
    position: absolute;
    width: 15px  ;
    height: 20px;
    font-size: smaller;
    transform: translate(10px,-10px);
}
</style>