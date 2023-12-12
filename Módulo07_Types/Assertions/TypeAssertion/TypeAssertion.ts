export {}

// ==> Exemplo 1: Type Assertion

function PreçoFinal(value: number, discount: number, format: boolean): number | string {
  const priceWithDiscount = value * (1 - discount)
  return format ? `R$ ${priceWithDiscount}` : priceWithDiscount
}

const productPrice = PreçoFinal(100, 0.5, true) as string
console.log(productPrice)

// ==> Exemplo 2: Const Assertions


