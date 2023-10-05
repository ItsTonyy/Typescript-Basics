"use strict";
function descontoCompra(preco, desconto = 0.08) {
    return (preco * (1 - desconto));
}
console.log(descontoCompra(10));
