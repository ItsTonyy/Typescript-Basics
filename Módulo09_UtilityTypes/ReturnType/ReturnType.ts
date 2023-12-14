// type string
type T5 = ReturnType<() => string>

// type number
type T6 = ReturnType<() => number>

// type null
type T7 = ReturnType<() => null>

// unknown (yet)
type T8 = ReturnType<<T>() => T>