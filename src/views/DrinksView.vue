<script setup>
import Drink from '@/components/Drink.vue';
import Loading from '@/components/Loading.vue';
import { useDrinksStore } from '@/stores/drinks';
const drinksStore = useDrinksStore()
</script>
<template>

<h3  class="mt-header  text-center text-3xl text-slate-700 uppercase py-8 font-extrabold">Our Drinks</h3>
<Loading v-if="drinksStore.isLoading"></Loading>   
<div v-else class="grid  md:grid-cols-2 2xl:grid-cols-3 ">


        <Drink v-for="drink in drinksStore.drinks" :drink="drink">

        </Drink>
    </div>
</template>