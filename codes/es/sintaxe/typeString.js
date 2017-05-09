// String Literal
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#String_literals
//  https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String

console.log('h');
console.log('hello world');
console.log("hello world");

// multiline
var name = "hello \
world";
console.log(name);
var name = "hello" +
"world";
console.log(name);

console.log('<img src="url">');
console.log('<span class="ativa">10</span>');
console.log("<span class=\"ativa\">10</span>");
console.log("hello' world");
console.log('hello<br>world');

// special characters
// escape sequences
console.log('hello\' world');
console.log('hello\nworld');
console.log('I \u2661 JavaScript!');

// Unicode and JavaScript
// http://speakingjs.com/es5/ch24.html
console.log('Z')
console.log('\132'); // Unicode sequence: three octal digits XXX between 0 and 377
console.log('\x5A'); // Unicode sequence: two hexadecimal digits XX between 00 and FF
console.log('\u005A'); //  Unicode sequence: four hexadecimal digits XXXX - BMP
console.log('\u{005A}'); // Unicode code point escape sequences
console.log('\u{0005A}'); // Unicode code point escapes \u{XXXXX} ES6
console.log('\u0000\u005A'); // surrogate pair <h,l>
// U+0005A: \u{0005A} = \u{u00000}\u{u0005A}
// https://mathiasbynens.be/notes/javascript-encoding#surrogate-pairs

// U+1F4A9: \u{1F4A9} = \u{u0D83D}\u{u0DCA9}
console.log('\u{1F4A9}');
console.log('\uD83D\uDCA9');

// Unicode problem
// https://mathiasbynens.be/notes/javascript-unicode
console.log('A'.length); // U+0041 LATIN CAPITAL LETTER A
console.log('A' == '\u0041');
console.log('𝐀'.length); // U+1D400 MATHEMATICAL BOLD CAPITAL A
console.log('𝐀' == '\uD835\uDC00');

// template string (ecma6)
console.log('hello ' + 'World');
console.log('hello ' + 10);
console.log('hello ' +
              10);

var name = 'Fulano';
console.log('Hello ' + name);

var name = 'Fulano';
var email = 'fulano@gmail.com';
var id = '1';

var row = '<tr><td>'+id+'</td><td>'+name+'</td><td>'+email+'</td></tr>';
console.log(row);

var row = `<tr><td>${id}</td><td>${name}</td><td>${email}</td></tr>`;
console.log(row);

var text = "lorem ipsum";
console.log(text[0]);
for(letter of text){
  console.log(letter);
}

// OO
var string = "lorem ipsum";
console.log(string);
console.log(typeof string);
var string = String("lorem ipsum");
console.log(string);
console.log(typeof string);
var string = new String("lorem ipsum");
console.log(string);
console.log(typeof string);

// String.fromCharCode()
console.log(String.fromCharCode(65)); // A
// String.fromCharPoint()
console.log(String.fromCodePoint(65)); // A
console.log(String.fromCodePoint(41)); // A

// String.prototype.length
console.log("lorem ipsum".length);
// String.prototype.includes
console.log("lorem ipsum".includes('lorem'));
// String.prototype.repeat
console.log("lorem ipsum".repeat(3));
// String.prototype.starstWith
// String.prototype.endsWith
console.log("lorem ipsum".startsWith('lorem'));
// String.prototype.substr
console.log("lorem ipsum".substr(1,2));
// String.prototype.substring
console.log("lorem ipsum".substring(1,2));
// String.prototype.slice
console.log("lorem ipsum".slice(-1));
console.log("lorem ipsum".slice(1,-1));
// String.prototype.split
console.log("lorem ipsum".split(''));
console.log("lorem ipsum".split(' '));
console.log("lorem ipsum dolor".split(' ', 1));
// String.prototype.toLowerCase
// String.prototype.toUpperCase
console.log("lorem ipsum".toLowerCase());
// String.prototype.match
console.log("lorem ipsum".match(/\w+/g));
// String.prototype.replace
console.log("lorem ipsum".replace('lorem', 'LOREM'));
// String.prototype.search
console.log("lorem ipsum".search('lorem'));
// String.prototype.trim
console.log("  lorem  ipsum  ".trim());

// symbols
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Symbol
// Unique and immutable data type to be used as an identifier for object properties
var sym = Symbol("foo");
console.log(sym);
var sym2 = Symbol.for("foo"); //Global Symbol
console.log(sym2);
console.log(Symbol.for("foo") !== Symbol.for("foo"))
console.log(Symbol("foo") !== Symbol("foo"))
