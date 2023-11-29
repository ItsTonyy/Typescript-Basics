// ==> Exemplo 01: Satisfies Operator

type cityName = 'Rio de Janeiro' | 'São Paulo'| 'Belo Horizonte' | 'Salvador' | 'Curitiba'

type cityCoordinates = {
  x: number,
  y: number
} 

type localization = cityName | cityCoordinates

type Person = {
  birthLocation: localization,
  currentResidence: localization
}

const pessoa1 = {
  birthLocation: 'Rio de Janeiro',
  currentResidence: {x: 1, y: 1}
} satisfies Person

// Error: Property 'toUpperCase' does not exist on type 'localization'.
console.log(pessoa1.birthLocation.toUpperCase())