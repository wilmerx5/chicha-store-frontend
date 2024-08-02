<script setup>
import Drink from '@/components/Drink.vue';
import { useDrinksStore } from '@/stores/drinks';
const drinksStore = useDrinksStore()
</script>
<template>

<h3 class="text-center text-3xl text-slate-700 uppercase py-10 font-extrabold">Our Drinks</h3>
    <div class="grid  md:grid-cols-2 2xl:grid-cols-3 ">


        <Drink v-for="drink in drinksStore.drinks" :drink="drink">

        </Drink>
    </div>
</template>