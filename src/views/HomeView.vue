
<script setup>

import { useDrinksStore } from '@/stores/drinks';
const drinksStore =useDrinksStore()


</script>
<template>
<div class="pt-11 mt-10 cont-banner">
    <div class=" bg-brown flex justify-around align-center">

        <div class="item-banner flex-1">

            <img src="/img/chicha-maiz-b.png" class="mx-auto">
            <p class="text-center uppercase text-sm md:text-2xl font-extrabold py-5"> Chicha de arroz</p>
        </div>

        <div class="item-banner flex-1">
            <img src="/img/chicha-pasta-b.png"  class="mx-auto">
            <p class="text-sm md:text-2xl text-center uppercase  font-extrabold py-5"> Chicha de maiz</p>

        </div>

        <div class="item-banner flex-1">  
                <img src="/img/chicha-arroz-b.png"  class="mx-auto">
                <p class="text-center uppercase text-sm md:text-2xl font-extrabold py-5"> Chicha de pasta</p>

            
        </div>

    </div>

</div>
    
</template>

<style scoped>

.item-banner{
    transform: translateY(-23%);
    padding-left: 20px;
}
img{
    max-height: 35vh;

}
.cont-banner{
    height: 75% !important;
}
</style>


