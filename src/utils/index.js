
export const formatMoney = (quantity) => {

    return Number(quantity).toLocaleString('es-Us', {
        style: 'currency',
        currency: 'COP'


    })
}