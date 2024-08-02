
import APIService from "@/services/APIService";
import { defineStore } from "pinia";
import { onMounted, ref } from "vue";

export const useDrinksStore = defineStore('drinks', () => {


    const drinks = ref([])
    onMounted(async () => {

        try {

            const { data } = await APIService.getDrinks()
            drinks.value = data
        }
        catch (e) {
            console.log(e)
        }

    })
    return {
        drinks,


    }
})