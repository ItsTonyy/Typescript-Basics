interface CatInfo {
  age: number,
  breed: string
}

type CatNames = 'Luke' | 'Luffy' | 'Banze'

const cats: Record<CatNames, CatInfo> = {
  Luke: { age: 2, breed: 'Orange' },
  Luffy: { age: 10, breed: 'Persian' },
  Banze: { age: 12, breed: 'Viralata'}
}