<script setup>
import { useCartStore } from '@/stores/cart';
import { formatMoney } from '@/utils';

const cartStore = useCartStore()
const props = defineProps({
    item: {
        type: Object,
        required: true
    }


})
</script>

<template>

    <tr class="pt-4">
        <td><img :src="item.image" alt="" class="rounded mt-4 max-w-6">
            <p class=" text-sm  md:text-sm name text-nowrap uppercase font-bold overflow-hidden text-gray-600 px-2 text-ellipsis">{{ item.drink }}</p>
        </td>

        <td>

            {{ formatMoney(item.price * item.amount) }}
        </td>
        <td>

            <div class="amount-container flex flex-col    text-center gap-1 md:gap-0  md:flex-row">
                <button @click="cartStore.addToCart(item)" class="bg-amber-400  md:mx-2 md:px-1 font-extrabold text-white">
                    +
                </button>
                <b> {{ item.amount }}</b>
                <button @click="cartStore.deleteOnCart(item)" class="bg-amber-400 md:mx-2 md:px-1  font-extrabold text-white">
                    -
                </button>

                <button @click="cartStore.deleteItemOnCart(item)"
                    class="bg-red-600 md:rounded-full p-0 md:px-2 font-bold text-white">
                    X
                </button>
            </div>
        </td>

    </tr>

</template>

<style scoped>
.name{
    max-width: 20ch;
}
img{
    max-width: 30vw;
    margin: auto;
}
.amount-container{
    margin-top: 10px;
}@media (min-width:500px){
    img{
    max-width: 20vw;

    }
}
@media (min-width:768px){
    .amount-container{
    margin-top: 0px;
}
img{
    max-width: 12vw;
    padding-right: 10px;
}
}
</style>