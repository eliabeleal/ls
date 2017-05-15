// Number
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Literals
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Integers
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Floating-point_literals
//  Infinity, NaN

// Primitive
let number = 15
console.log(number) //=> 15
console.log(typeof number) //=> number

// Number
let number = Number(15)
console.log(number) //=> 15
console.log(typeof number) //=> number

// OO
let number = new Number(15)
console.log(number) //=> [Number: 15]
console.log(typeof number) //=> object

let number = new Number(017)
console.log(number) //=> [Number: 15]
console.log(typeof number) //=> object

/**** NUMBER PROPERTIES ****/
// Number.MIN_SAFE_INTEGER
console.log(Number.MIN_SAFE_INTEGER) //=> -9007199254740991 = -(2ˆ53 - 1)
// Number.MAX_SAFE_INTEGER
console.log(Number.MAX_SAFE_INTEGER) //=>  9007199254740991 =   2ˆ53 - 1

// Number.MIN_VALUE
console.log(Number.MIN_VALUE) //=> 5e-324
// Number.MAX_VALUE
console.log(Number.MAX_VALUE) //=> 1.7976931348623157e+308

// Number.POSITIVE_INFINITY
console.log(Number.POSITIVE_INFINITY) //=> Infinity
console.log(Infinity) //=> Infinity
console.log(Infinity + 1); //=> Infinity
console.log(Math.pow(10, 1000)); //=> Infinity
console.log(1 / Infinity); //=> 0
// Number.NEGATIVE_INFINITY
console.log(Number.NEGATIVE_INFINITY) //=> -Infinity
console.log(-Infinity) //=> -Infinity
console.log(Math.log(0)); //=> -Infinity

// Number.NaN
console.log(Number.NaN) //=> NaN
console.log(NaN) //=> NaN
console.log(0/0) //=> NaN

/**** NUMBER METHODS ****/
// Number.isInteger
console.log(Number.isInteger(15)) //=> true

// Number.isSafeInteger / -(2^53 - 1) and 2^53 - 1
console.log(Number.isSafeInteger(15)) //=> true

// Number.isFinite
console.log(Number.isFinite(Infinity)) //=> false

// Number.isNaN
console.log(NaN == (0/0)) //=> false
console.log(Number.isNaN(0/0)) //=> true
console.log(Number.isNaN(parseInt(1))) //=> false
console.log(Number.isNaN(parseInt('1'))) //=> false
console.log(Number.isNaN(parseInt('1a'))) //=> false
console.log(Number.isNaN(parseInt('a1'))) //=> true
console.log(Number.isNaN(parseInt(true))) //=> true

// Number.parseInt / parseInt
console.log(parseInt(1)) //=> 1
console.log(parseInt('1')) //=> 1
console.log(parseInt('1a')) //=> 1

console.log(parseInt('a1')) //=> NaN
console.log(parseInt(0/0)) //=> NaN
console.log(parseInt(true)) //=> NaN
console.log(parseInt(undefined)) //=> NaN
console.log(parseInt(null)) //=> NaN

console.log("15"+15) //=> 1515
console.log(parseInt("15")+15) //=> 30
console.log(parseInt("12F")) //=> 12
console.log(parseInt("F12")) //=> NaN
console.log(parseInt("F")) //=> NaN
console.log(parseInt("F", 16)) //=> 15

// Number.parseFloat, parseFloat
console.log(parseFloat(1.1)) //=> 1.1
console.log(parseFloat('1.1')) //=> 1.1
console.log(parseFloat('1.1a')) //=> 1.1

/**** NUMBER INSTANCES ****/
// Number.prototype.toString()
// console.log(15.toString(16)) SyntaxError
console.log(Number(15).toString(16)) //=> f
console.log(new Number(15).toString(16)) //=> f

let number = 15
console.log(number.toString(16)) //=> f

let number = Number(15)
console.log(number.toString(16)) //=> f

let number = new Number(15)
console.log(number.toString(16))  //=> f

console.log(Number(15).toString(2)) //=> 1111
console.log(Number(15).toString(8)) //=> 17
console.log(Number(15).toString(16)) //=> f
console.log(Number(15412341234).toString(32)) //=> ebabafi

// Number.prototype.toExponential()
console.log(Number(2222.22222).toExponential())

// Number.prototype.toFixed()
console.log(Number(2222.22222).toFixed())
console.log(Number(2222.22222).toFixed(1))

// Number.prototype.toPrecision()
console.log(Number(2.22222222).toPrecision(3))
console.log(Number(2222.22222).toPrecision(1))
console.log(Number(2222.22222).toPrecision(5))
