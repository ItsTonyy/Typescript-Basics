//nonNullable will exclude types null and undefined

type T0 = NonNullable<string | number | undefined>

type T1 = NonNullable<string | null | undefined>