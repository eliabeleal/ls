// Expressions and operators
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference#Expressions_and_operators

// Primary expressions (this, function, class, function*, yield, yield*, [], {}, /ab+c/i, ( ))

// Left-hand-side expressions (object.property, new, new.target, super, ...obj)
var obj = {number: 10}
console.log(obj.number);
var numbers = [1, 2, 3];
console.log(...numbers, 4, 5); //spread

// Increment and decrement (A++, A--, ++A, --A)
var number = 10;
console.log(number++);
console.log(++number);
console.log(number--);
console.log(--number);

// Unary operators (delete, void, typeof, +, -, ~, !)
var number = 15;
var numbers = [1, 2, 3];
delete numbers[1];
console.log(numbers);
console.log(typeof number);
console.log(-number);
console.log(+number);
console.log(~number); // Bitwise NOT
console.log(!number); // Logical NOT

// Arithmetic operators (+, -, *, /, %, **)
console.log(10+3);
console.log(true+3);
console.log(10-3);
console.log(1.4-1.2); // IEEE 754
console.log(10*3);
console.log(10/3);
console.log(parseInt(10/3));
console.log(Math.trunc(10/3)); //Integer division
console.log(10%3);
console.log(10**3);
console.log(Math.pow(10, 3));

// Relational operators (in, instanceof, <, <=, >, >=)
var numbers = [1, 2, 3];
console.log(0 in numbers);
console.log(1 in numbers);
console.log(3 in numbers);
console.log("value" in {value: 1});
console.log("PI" in Math);
console.log("" instanceof String);
console.log(new String() instanceof String);
console.log(1 < 10);
console.log(1 <= 10);
console.log(10 > 1);
console.log(10 >= 1);

// Equality operators (==, !=, ===, !==)
//  Equality: type–converting comparisons
//  Identity/strict equality: strict and type–converting comparisons
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Comparison_Operators
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Equality_comparisons_and_sameness
//  http://dorey.github.io/JavaScript-Equality-Table/
console.log(1 == 1);
console.log(1 == "1");
console.log(1 == "1a");
console.log(1 == true);
console.log(0 == false); // false == false, 0, "0", "", [], [0]
console.log(false == null);
console.log(false == undefined);
console.log({"value":1} == {"value":1});
var obj = {"value":1}
console.log(obj == obj);
console.log(NaN == NaN);
console.log(undefined == undefined);
console.log(null == null);
console.log(Object.is(NaN, NaN));
console.log(Object.is([], [])); // Not comapre Array
console.log(Object.is({}, {})); // Not comapre Object

console.log(1 === 1);
console.log("1" === "1");

// Bitwise shift operators (<<, >>, >>>)
//  Bitwise operators treat their operands as a sequence of 32 bits
//  -2147483648 até 2147483647
console.log(9 << 2);
console.log(9 >> 2);
console.log(-9 >> 2);
console.log(9 >>> 2);
console.log(-9 >>> 2);

// Binary bitwise operators (&, |, ^)
console.log(14 & 9);
console.log(14 | 9);
console.log(14 ^ 9);

// Binary logical operators (&&, ||)
//  false == false, 0, "", null, undefined, NaN
console.log(true  && true);      // t && t returns true
console.log(true  && false);     // t && f returns false
console.log(false && true);      // f && t returns false
console.log(false && (3 == 4));  // f && f returns false
console.log("Cat" && "Dog");     // t && t returns "Dog"
console.log(false && "Cat");     // f && t returns false
console.log("Cat" && false);     // t && f returns false
console.log(""    && false);     // returns ""
console.log(false && ||);        // returns false
console.log(true  || true);      // t || t returns true
console.log(false || true);      // f || t returns true
console.log(true  || false);     // t || f returns true
console.log(false || (3 == 4));  // f || f returns false
console.log("Cat" || "Dog");     // t || t returns "Cat"
console.log(false || "Cat");     // f || t returns "Cat"
console.log("Cat" || false);     // t || f returns "Cat"
console.log(""    || false);     // returns false
console.log(false || "");        // returns ""
console.log(false && true  || true);
console.log(false && (true  || true));

// Conditional (ternary) operator (condition ? ifTrue : ifFalse)
console.log(true ? "true" : "false");

// Assignment operators (=, *=, /=, %=, +=, -=, <<=, >>=, >>>=, &=, ^=, |=)

// Destructuring assignment
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Destructuring_assignment
// [a, b] = [1, 2] / Array Matching
var [a, b] = [8, 80];
console.log(a);
console.log(b);

var [a, , b] = [8, 80, 800]; // Ignoring some values
console.log(a);
console.log(b);


var a = 1; // Swapping variables
var b = 3;
[a, b] = [b, a];
console.log(a); // 3
console.log(b); // 1

var [number, string] = [8, 'fulano'];
console.log(number);
console.log(string);

var [ip, mask = "255.255.255.0"] = ["192.168.0.2"]; // Fail-Soft Destructuring
console.log(ip);
console.log(mask);

var [ip, mask = "255.255.255.0"] = ["192.168.0.2", "255.255.0.0"];
console.log(ip);
console.log(mask);

// {a, b} = {a:1, b:2} / Object Matching
var {ip, mask} = {ip: "192.168.0.2", mask: "255.255.255.0"};
console.log(ip);
console.log(mask);

// Destructuring Assignment / Deep Matching
var {ip: ipAdd, mask: maskAdd} = {ip: "192.168.0.2", mask: "255.255.255.0"};
console.log(ipAdd);
console.log(maskAdd);

var {mask: maskAdd, ip: ipAdd} = {ip: "192.168.0.2", mask: "255.255.255.0"};
console.log(ipAdd);
console.log(maskAdd);

var {mask: maskAdd, ip: ipAdd, ip: ipAdd2} = {ip: "192.168.0.2", mask: "255.255.255.0"};
console.log(ipAdd);
console.log(ipAdd2);
console.log(maskAdd);

// Comma operator (,)
