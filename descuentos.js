// const precioOriginal = 120;
// const descuento = 18;

const coupon = [
    "Descuentazo1",
    "Descuentazo2",
    "Descuentazo3"
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDescuento = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDescuento;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupon = document.getElementById("inputCoupon");
    const couponValue = inputCoupon.value;

    let descuento;

    switch (couponValue) {
        case coupon[1]:
            descuento = 5;
        break;
        case coupon[2]:
            descuento = 15;
        break;
        case coupon[3]:
            descuento = 30;
        break;
    }

    const precioConDescuento = calcularPrecioConDescuento(priceValue, couponValue);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es $" + precioConDescuento;


}




// console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDesceunto,
// }); 