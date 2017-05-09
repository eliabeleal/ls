// Declarations (var, let, const)
/* https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Declarations */
var number;
var number // Automatic semicolon insertion (ASI)
var number = 10; // int number = 10; (C language)

typeof number;
console.log(number);

number = 'fulano';
typeof number; // string
console.log(number); // 'fulano'

var x, y, z;
console.log(x);
console.log(y);
console.log(z);
var a = 1, b = 2, c = 3;
console.log(a);
console.log(b);
console.log(c);

let number = 10;

const NUMBER = 10;
NUMBER = 100; //TypeError
console.log(NUMBER);

// Case Sensitive
var number = 8;
var NUmber = 80;

// identifier pattern
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variables
var 0number; //SyntaxError (^\W)
var %number; //SyntaxError (^\W)
var var; //SyntaxError (keyword)
var function; //SyntaxError (keyword)
var number;
var _number;
var $number;

// hoisting
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_Types#Variable_hoisting
nome = 'fulano';
console.log(nome);

console.log(outroNome); //ReferenceError
outroNome = 10;

console.log(outroNome); // undefined
var outroNome = 10;

// Primitives values (boolean, null, undefined, number, string, symbol) are passed by value.
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#Primitive_values
var variable = 10;
var variable_temp = variable;
console.log(variable_temp);
variable = 100;
console.log(variable_temp);

var variable = new String("lorem ipsum");
var variable_temp = variable;
variable = 10;
console.log(variable);
console.log(variable_temp);
variable_temp = Number(10);
console.log(variable);
console.log(variable_temp);
