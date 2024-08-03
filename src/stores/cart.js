
import { defineStore } from "pinia";
import { computed, ref } from "vue";

export const useCartStore = defineStore('cart', () => {

    const cart = ref([])

    const showCart = ref(false)

    function handleShowCart() {
        showCart.value = !showCart.value
    }

    function addToCart(item) {
        let index = cart.value.findIndex(e => e.id == item.id)

        index == -1 ? cart.value.push({ amount: 1, ...item }) : cart.value[index].amount += 1

    }
    function deleteOnCart(item) {
        let index = cart.value.findIndex(e => e.id == item.id)

        if (cart.value[index].amount > 1) {

            cart.value[index].amount -= 1
        }
    }
    function deleteItemOnCart(item) {
        cart.value= cart.value.filter(e=>e.id!== item.id)
       
    }

const itemsOnCart = computed(()=>{

   return  cart.value.reduce((vc,va)=>vc+(va.amount),0)

})

const totalCart= computed(()=>{
    return (cart.value.reduce((vc,va)=>vc+(va.amount*va.price),0))


})

    return {
        cart,
        addToCart,
        showCart,
        handleShowCart,
        deleteOnCart,
        deleteItemOnCart,
        itemsOnCart,
        totalCart


    }
})