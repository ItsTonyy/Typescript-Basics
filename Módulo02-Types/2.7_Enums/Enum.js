"use strict";
// ==> Exemplo 1: Numeric Enums
var Idioma;
(function (Idioma) {
    Idioma[Idioma["Portugu\u00EAs"] = 1] = "Portugu\u00EAs";
    Idioma[Idioma["Ingl\u00EAs"] = 2] = "Ingl\u00EAs";
    Idioma[Idioma["Franc\u00EAs"] = 3] = "Franc\u00EAs";
    Idioma[Idioma["Italiano"] = 4] = "Italiano";
})(Idioma || (Idioma = {}));
console.log(Idioma);
// ==> Exemplo 2: String Enums
var Dias;
(function (Dias) {
    Dias["Segunda"] = "SEG";
    Dias["Ter\u00E7a"] = "TER";
    Dias["Quarta"] = "Qua";
    Dias["Quinta"] = "Qui";
})(Dias || (Dias = {}));
console.log(Dias);
function getComida(c) {
    return console.log('Comida Encontrada');
}
console.log(getComida(1 /* Comida.Pizza */));
console.log(getComida(3 /* Comida.Feijão */));
// the console.log below returns 'Comida Encontrada', showing a clear security failure in using String Enums
console.log(getComida(2));
// Output:
/* {
  '1': 'Português',
  '2': 'Inglês',
  '3': 'Francês',
  '4': 'Italiano',
  'Português': 1,
  'Inglês': 2,
  'Francês': 3,
  Italiano: 4
}
{ Segunda: 'SEG', 'Terça': 'TER', Quarta: 'Qua', Quinta: 'Qui' }
Comida Encontrada
undefined
Comida Encontrada
undefined
Comida Encontrada
undefined */ 
