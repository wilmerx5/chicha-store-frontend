
export const formatMoney = (quantity) => {

    return Number(quantity).toLocaleString('es-Co', {
        style: 'currency',
        currency: 'COP'


    })
}