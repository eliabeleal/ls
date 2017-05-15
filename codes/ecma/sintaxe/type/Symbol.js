// symbols
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
//  Unique and immutable data type to be used as an identifier for object properties

let sym = Symbol("foo")
console.log(sym) //=> Symbol(foo)

let sym = Symbol.for("foo") //Global Symbol
console.log(sym) //=> Symbol(foo)

console.log(Symbol("foo") !== Symbol("foo")) //=> true
console.log(Symbol.for("foo") !== Symbol.for("foo")) //=> false
