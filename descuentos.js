// const precioOriginal = 120;
// const descuento = 18;

const coupons = [
    "Descuentazo1",
    "Descuentazo2",
    "Descuentazo3"
];

function calcularPrecioConDescuento(precio, descuento) {
    const porcentajePrecioConDescuento = 100 - descuento;
    const precioConDesceunto = (precio * porcentajePrecioConDescuento) / 100;

    return precioConDesceunto;
}

function onClickButtonPriceDiscount() {
    const inputPrice = document.getElementById("inputPrice");
    const priceValue = inputPrice.value;

    const inputCoupons = document.getElementById("inputCoupon");
    const couponValue = inputCoupons.value;

    let descuento;

    switch (couponValue) {
        case coupons[1]:
            descuento = 5;
        break;
        case coupons[2]:
            descuento = 15;
        break;
        case coupons[3]:
            descuento = 30;
        break;
    }

    const precioConDesceunto = calcularPrecioConDescuento(priceValue, inputCoupons);

    const resultP = document.getElementById("resultP");
    resultP.innerText = "El precio con descuento es $" + precioConDesceunto;


}


// console.log({
//    precioOriginal,
//    descuento,
//    porcentajePrecioConDescuento,
//    precioConDesceunto,
// }); 