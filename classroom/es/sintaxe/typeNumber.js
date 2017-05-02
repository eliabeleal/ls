// Number
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Lexical_grammar#Literals
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Integers
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Floating-point_literals

// Literal
console.log(15); //decimal
console.log(017); //octal
console.log(0o17); //octal ecma6
console.log(0O17); //octal
console.log(0b1111); // binary ecma6
console.log(0B1111); // binary ecma6
console.log(0xf); // hexa
console.log(0Xf); // hexa
console.log(0XF); // hexa
console.log(-15); // negative

console.log(Number.isInteger(15));
console.log(Number.isSafeInteger(15)); // -(2^53 - 1) and 2^53 - 1
console.log(Number.MIN_SAFE_INTEGER); // 2ˆ53 - 1
console.log(Number.MAX_SAFE_INTEGER); // -(2ˆ53 - 1)

console.log(Number.MIN_VALUE);
console.log(Number.MAX_VALUE);

// [(+|-)][digits][.digits][(E|e)[(+|-)]digits] http://json.org/number.gif
console.log(1.5);
console.log(3.14);
console.log(-3.14);
console.log(.14);
console.log(-.14);
console.log(3.1E-12);
console.log(3.1e+12);
console.log(-3.1e+12);

console.log(1.4 - 1.2); //(IEEE 754) 0.19999999999999996

// Infinity
console.log(Infinity);
console.log(-Infinity);
console.log(Number.NEGATIVE_INFINITY);
console.log(Number.POSITIVE_INFINITY);
console.log(Number.isFinite(Infinity));

// NaN
console.log(NaN);
console.log(Number.NaN);
console.log(0/0);

console.log(parseInt(1));
console.log(parseInt('1'));
console.log(parseInt('1a'));
console.log(parseInt(true));
console.log(parseInt('a1')); // NaN

console.log(Number.isNaN(0/0));
console.log(Number.isNaN(parseInt(1)));
console.log(Number.isNaN(parseInt('1')));
console.log(Number.isNaN(parseInt('1a')));
console.log(Number.isNaN(parseInt('a1')));
console.log(Number.isNaN(parseInt(true)));

// OO
var number = 15;
console.log(number);
console.log(typeof number);
var number = Number(15);
console.log(number);
console.log(typeof number);
var number = new Number(15);
console.log(number);
console.log(typeof number);
var number = new Number(017);
console.log(number);
console.log(typeof number);

// parseInt, parseFloat, Number.parseInt, Number.parseFloat
console.log(parseInt("15"));
console.log("15"+15);
console.log(parseInt("15")+15);
console.log(parseInt("12F"));
console.log(parseInt("F12"));
console.log(parseInt("F"));
console.log(parseInt("F", 10));
console.log(parseInt("F", 16)); // 15
// Number.prototype.toString()
console.log(15.toString(16)); // f
console.log(Number(15).toString(16)); // f
console.log(Number(15).toString(2)); // 1111
console.log(Number(15412341234).toString(32));
var number = 15;
console.log(number.toString(16));
var number = Number(15);
console.log(number.toString(16));
var number = new Number(15);
console.log(number.toString(16));
// Number.prototype.toExponential()
console.log(Number(2222.22222).toExponential());
// Number.prototype.toFixed()
console.log(Number(2222.22222).toFixed());
console.log(Number(2222.22222).toFixed(1));
// Number.prototype.toPrecision()
console.log(Number(2.22222222).toPrecision(3));
console.log(Number(2222.22222).toPrecision(1));
console.log(Number(2222.22222).toPrecision(5));

// Math
Math.PI
console.log(Math.abs(-10));
console.log(Math.trunc(3.33)); // 3
console.log(Math.ceil(3.33)); // 4
console.log(Math.floor(3.33)); // 3
console.log(Math.pow(2, 3)); //  2 ** 3 = 8
console.log(Math.random()); //PSN 0...1
