
import APIService from "@/services/APIService";
import { defineStore } from "pinia";
import { computed, onMounted, ref } from "vue";

export const useDrinksStore = defineStore('drinks', () => {


    const loading=ref(false)
    const drinks = ref([])
    onMounted(async () => {
        loading.value =true
        try {
            
            const { data } = await APIService.getDrinks()
            drinks.value = data
        }
        catch (e) {
            console.log(e)
        }
        finally{
            loading.value=false
        }
        
    })
    const isLoading =computed(()=>{

        return loading.value
    })
    return {
        drinks,
        isLoading


    }
})