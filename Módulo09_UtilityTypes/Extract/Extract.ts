type letters2 = Extract<'a' | 'b' | 'c', 'a'>

type numbers2 = Extract<1 | 2 | 3 | 4, 2 | 3>

type shape2 = 
  | {kind: 'square', radius: number}
  | {kind: 'circle', x: number}
  | {kind: 'triangle', y: number}

type squareAndCircle2 = Extract<shape, {kind: 'triangle'}>

type T = Extract<string | number | (() => void), Function>