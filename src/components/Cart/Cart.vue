<script setup>
import { useCartStore } from '@/stores/cart';
import { formatMoney } from '@/utils';
import Bubble from './Bubble.vue';
import ItemCart from './ItemCart.vue';

const cartStore = useCartStore()
</script>

<template>
    <div class="cart z-50">
        <div class="cart-icon">
            <div @click="cartStore.handleShowCart">
                <Bubble class="cursor-pointer"></Bubble>

                <img src="/public/img/cart.png" class="max-w-7 cursor-pointer" alt="">
            </div>
            <div v-if="cartStore.showCart" id="cart-products"
                class=" w-90vw md:w-30vw rounded shadow-lg bg-white mt-2 px-4 overflow-y-scroll max-h-80vh">
                <div class="pb-12 pt-2">
                    <b  @click="cartStore.handleShowCart" class=" rounded-full float-right  bg-red-600 text-white px-4 py-2 cursor-pointer" >
                        X
                    </b>
                </div>
                <div v-if="cartStore.cart.length > 0">


                    <table class="mx-auto">
                        <thead class=" text-gray-900 font-bold ">
                            <tr>
                                <td>Product</td>
                                <td>Price</td>
                                <td>Amount</td>
                            </tr>

                        </thead>

                        <tbody>

                            <ItemCart v-for="item in cartStore.cart" :item="item">

                            </ItemCart>
                          
                        </tbody>
                    </table>
                    <hr>
                        <p class="uppercase text-slate-500 font-extrabold pt-2 text-right">
                            Total:
                            {{formatMoney( cartStore.totalCart) }}
                        </p>
                        <button class="w-full font-extrabold text-center p-3 bg-red-600 my-2 rounded text-white uppercase"
                        @click="cartStore.$patch({
                            cart: []
                        }), cartStore.handleShowCart()">
                        Clean Cart
                    </button>
                </div>

                <p v-else class="uppercase  text-black my-3 font-bold text-center">
                    Cart is EMpty <span class ="text-lime-500">add products</span>
                </p>
            </div>
        </div>



    </div>
</template>

<style>
#cart-products {
    position: absolute;
    min-height: 10vh;
    right: 10px;
    min-width: max-content;

}
</style>