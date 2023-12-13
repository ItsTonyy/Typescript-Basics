interface Todo {
  title: string,
  description: string,
  completed: boolean,
  createdAt: string
}

// it will only contain the types: title: string; completed: boolean; createdAt: string;
type todoPreview = Omit<Todo, 'description'>

const todo: todoPreview = {
  title: 'buy food',
  completed: false,
  createdAt: '13/12/2023' 
}
