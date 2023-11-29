type Course = {
  title: string,
  subtitle: string,
  lessonCounts: number
}

const course: Course = {
  title: 'Typescript Bootcamp',
  subtitle: 'Learn the Language, build pratical projects.',
  lessonCounts: 100
}

type courseKeys = keyof Course

function extractProperty<T, K extends keyof T>(data: T, property: K) {
  return data[property]
}

// as we change the property, the type of the variable "Val" changes too, adapting to the type of the property
const val = extractProperty(course, "lessonCounts")
console.log(val)

// ------------------------------------------------- //

type User = {
  name: string,
  age: number, 
  location: string
}

type userKeys = keyof User
const key: userKeys = 'name'

