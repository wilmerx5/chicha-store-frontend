<script setup>
import { formatMoney } from '@/utils';

const props=defineProps({
    drink:{
        type:Object,
        required:true
    }
})
</script>
<template>

    <div class="shadow-xl  pt-2 mx-auto rounded-lg w-5/6 mt-4 flex flex-column justify-between">
        <div>
            <h3 class="text-center uppercase font-bold text-gray-700">

                {{ drink.drink }}
            </h3>
        </div>

        <div class="px-3">
            <img 
            class="
            overflow-auto
            w-4/6 mx-auto transition-transform hover:scale-110 hover:rotate-1"
            :src="drink.image" alt="">     
          <p class="text-center mt-2 text-gray-600"> 
            {{ drink.description }}</p>
        </div>

        <div>
            <p
            class="text-center my-2 font-extrabold"
            >{{ formatMoney(drink.price)}}</p>

            <button class="
            hover:bg-yellow-600
            bg-yellow-500 w-full py-2 mx-auto text-white font-extrabold rounded uppercase text-1xl">
                Add To Cart
            </button>
        </div>
    </div>

</template>