type letters = Exclude<'a' | 'b' | 'c', 'a'>

type numbers = Exclude<1 | 2 | 3 | 4, 2 | 3>

type shape = 
  | {kind: 'square', radius: number}
  | {kind: 'circle', x: number}
  | {kind: 'triangle', y: number}

type squareAndCircle = Exclude<shape, {kind: 'triangle'}>

type T4 = Exclude<string | number | (() => void), Function>
