// Boolean
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Boolean_literals
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Boolean

// literal (true|false)
var variable = false;
console.log(variable);
console.log(typeof variable);
var variable = true;
console.log(variable);
console.log(typeof variable);

// case sensitive
var variable = True; // ReferenceError: True is not defined

// OO
var variable = Boolean(false);
console.log(variable);
console.log(typeof variable);
var variable = Boolean("");
console.log(variable);
console.log(typeof variable);
var variable = new Boolean(false);
console.log(variable);
console.log(typeof variable);
