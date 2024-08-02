

import axios from "@/lib/axios";

export default {
    getDrinks() {
        return axios.get('/drinks')

    }
}