// construct a type with all properties set to optional

type person = {
  name: string,
  surname: string,
  age: number,
  cellphoneNumber?: number
}

type isAttractive = Partial<person>

const notAttractive: isAttractive = {
  name: 'Ane',
  surname: 'Ramos',
  age: 21
}