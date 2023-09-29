// ==> Exemplo 01: Funções
function logMessage(message: string) {
  console.log(message)
}

logMessage('foo')
logMessage('bar')

// Output: foo bar 
// Typescript is automatically infering type void into the function because there is no data return

// ==> Exemplo 02: Arrow Function

const logMessageDuplicate = (message: string): void => {
  console.log(message)
}

logMessageDuplicate('blue')
logMessageDuplicate('red')