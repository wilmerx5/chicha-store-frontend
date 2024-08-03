<script setup>
import { computed } from 'vue';
import { RouterLink, useRoute } from 'vue-router';
import Cart from './Cart/Cart.vue';
import Welcome from './Welcome.vue';

const route = useRoute()

const isHomePage = computed(() => {

    return route.name == 'home'
})
</script>


<template>

    <header :class="{ header: isHomePage,fix:!isHomePage }" class="bg-yellow-400  top-0 w-full z-50">

        <div class="p-5 flex justify-between pt-10 align-center">
            <div>
                <img src="/public/img/logo.png" class="max-h-16 pl-10" alt="">
            </div>

            <div class="flex gap-2 justify-center">
                <RouterLink :to="{ name: 'home' }" class=" uppercase  font-bold" active-class="!text-violet-800">
                    Home
                </RouterLink>
                <RouterLink class=" uppercase  font-bold" :to="{ name: 'about' }" active-class="!text-violet-800">
                    About
                </RouterLink>

                <RouterLink class="uppercase  font-bold" :to="{ name: 'drinks' }" active-class="!text-violet-800">
                    Drinks
                </RouterLink>
                <Cart>
                    
                </Cart>
            </div>
        </div>

        <div>
            <Welcome v-if="isHomePage">

            </Welcome>
        </div>
    </header>
</template>


<style scoped>
.header {
    background-image: url("img/bg-chicha.png");
    background-size: cover;


}
.fix{
    position: fixed;
}
a {
    color: white;
}
</style>