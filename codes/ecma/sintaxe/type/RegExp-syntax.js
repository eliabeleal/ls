// REGEXP
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp
// http://www.regular-expressions.info/reference.html
// http://regexr.com/
// https://regex101.com/
// https://regexper.com/ (rails road diagram)
  // https://atom.io/packages/regex-railroad-diagram
  // apm install regex-railroad-diagram
// http://ivanzuzak.info/noam/webapps/regex_simplifier/
// http://ivanzuzak.info/noam/webapps/fsm_simulator/
// http://ivanzuzak.info/noam/webapps/fsm2regex/

// SYNTAX
//   FLAGS (g, i, m, u, y)
//   CHARACTER CLASSES (. , \d, |D, \w, |W, \s, \S, \)
//   CHARACTER SET ()
//   BOUNDARIES ()
//   ALTERNATION (|)
//   GROUPING AND BACK REGERENCES ()
//   QUANTIFIERS ()
//   ASSERTIONS ()

// FLAGS
// g global match
// i ignore case
// m multiline, makes ^ and $ match lines rather than the whole string
// u unicode
// y sticky
let phrase = "\nIs th\nis h\nis?"

let pattern = /is/
console.log(phrase.match(pattern)) //=> [ 'is', index: 7, input: '\nIs th\nis h\nis?' ]

pattern = /is/g
console.log(phrase.match(pattern)) //=> [ 'is', 'is' ]

pattern = /is/gi
console.log(phrase.match(pattern)) //=> [ 'Is', 'is', 'is' ]

pattern = /^is/gi
console.log(phrase.match(pattern)) //=> [ 'Is' ]

pattern = /^is/gim
console.log(phrase.match(pattern)) //=> [ 'Is', 'is', 'is' ]

pattern = /^\u{69}s/gim // '\u{69}' == 'i'
console.log(phrase.match(pattern)) //=> null

pattern = /^\u{69}s/gimu
console.log(phrase.match(pattern)) //=> [ 'Is', 'is', 'is' ]

phrase = "\nIs th\nis h\nis?"
pattern = /is/gi
console.log(phrase.match(pattern)) //=> [ 'Is', 'is', 'is' ]
console.log(pattern.lastIndex)     //=> 0

pattern = /is/yi
console.log(phrase.match(pattern)) //=> null
console.log(pattern.lastIndex)     //=> 0
pattern.lastIndex = 1
console.log(phrase.match(pattern)) //=> [ 'Is', index: 1, input: '\nIs th\nis h\nis?' ]
console.log(pattern.lastIndex)     //=> 3
console.log(phrase.match(pattern)) //=> null
console.log(pattern.lastIndex)     //=> 0

// https://developer.mozilla.org/en/docs/Web/JavaScript/Reference/Global_Objects/RegExp/sticky
// http://www.loganfranken.com/blog/831/es6-everyday-sticky-regex-matches/
// http://2ality.com/2015/07/regexp-es6.html
pattern.lastIndex = 0
console.log(pattern.exec(phrase)) //=> null
console.log(pattern.lastIndex)    //=> 0
pattern.lastIndex = 1
console.log(pattern.exec(phrase)) //=> [ 'Is', index: 1, input: '\nIs th\nis h\nis?' ]
console.log(pattern.lastIndex)    //=> 3
pattern.lastIndex = 2
console.log(pattern.exec(phrase)) //=> null
console.log(pattern.lastIndex)    //=> 0
pattern.lastIndex = 7
console.log(pattern.exec(phrase)) //=> [ 'is', index: 7, input: '\nIs th\nis h\nis?' ]
console.log(pattern.lastIndex)    //=> 9


// CHARACTER CLASSES / METACHARACTERS
// . dot, matches any single character except line terminators: \n, \r, \u2028 or \u2029.
let message = "let lot lt"
let pattern = /l.t/g
console.log(message.match(pattern)) //=> [ 'let', 'lot' ]

// \d digit [0-9]
let message = "ifpb1 ifpb2 ifpb@"
let pattern = /ifpb\d/g
console.log(message.match(pattern)) //=>  [ 'ifpb1', 'ifpb2' ]

// \D digit [^0-9]
let message = "ifpb1 ifpb2 ifpb@"
let pattern = /ifpb\D/g
console.log(message.match(pattern)) //=> [ 'ifpb@' ]

// \w  word [A-Za-z0-9_]
let message = "w@ a@ ?@"
let pattern = /\w@/g
console.log(message.match(pattern)) //=> [ 'w@', 'a@' ]

// \W  not word [^A-Za-z0-9_]
let message = "w@ a@ ?@"
let pattern = /\W@/g
console.log(message.match(pattern)) //=> [ '?@' ]

// \s whitespace
// [ \f\n\r\t\v\u00a0\u1680\u180e\u2000-\u200a\u2028\u2029\u202f\u205f\u3000\ufeff]
// http://www.fileformat.info/info/unicode/category/Zs/list.htm
// single white space character, including space, tab, form feed, line feed and other Unicode spaces
let message = "a a aba"
let pattern = /a\sa/g
console.log(message.match(pattern)) //=> [ 'a a' ]

// \S not whitespace
let message = "a a aba"
let pattern = /a\Sa/g
console.log(message.match(pattern)) //=> [ 'aba' ]

// \
let message = "a.a aba"
let pattern = /a\.a/g
console.log(message.match(pattern)) //=> [ 'a.a' ]


// CHARACTER SET
// [] character set
let message  = 'abcdefghijklmnopqrstuvwxyz'
let pattern = /[xyz]/g
console.log(message.match(pattern)) //=> [ 'x', 'y', 'z' ]

let message  = 'abcdefghijklmnopqrstuvwxyz'
let pattern = /[a-c]/g
console.log(message.match(pattern)) //=> [ 'a', 'b', 'c' ]

let message  = 'abcdefghijklmnopqrstuvwxyz0123456789'
let pattern = /[a-c12]/g
console.log(message.match(pattern)) //=> [ 'a', 'b', 'c', '1', '2' ]

let message  = 'abcdefghijklmnopqrstuvwxyz0123456789'
let pattern = /[0-9]/g // \d
console.log(message.match(pattern)) //=> [ '0', '1', '2', '3', '4', '5', '6', '7', '8', '9' ]

let message  = 'abcdefghijklmnopqrstuvwxyzABC'
let pattern = /[A-Z]/g
console.log(message.match(pattern)) //=> [ 'A', 'B', 'C' ]

let message  = 'abcABCDEFGHIJKLMNOPQRSTUVWXYZ'
let pattern = /[a-z]/g
console.log(message.match(pattern)) //=> [ 'a', 'b', 'c' ]

let message  = '0123abcABC!@#'
let pattern = /[A-Za-z0-9_]/g // \w
console.log(message.match(pattern)) //=> [ '0', '1', '2', '3', 'a', 'b', 'c', 'A', 'B', 'C' ]

// [^] complemented character set
let message  = 'tuvwxyz'
let pattern = /[^xyz]/g
console.log(message.match(pattern)) //=> [ 't', 'u', 'v', 'w' ]

let message  = '0123456789'
let pattern = /[^7-9]/g
console.log(message.match(pattern)) //=> [ '0', '1', '2', '3', '4', '5', '6' ]

let message  = '!@#$qwert'
let pattern = /[^A-Za-z0-9_]/g // \W
console.log(message.match(pattern)) //=> [ '!', '@', '#', '$' ]
pattern = /[\W]/g
console.log(message.match(pattern)) //=> [ '!', '@', '#', '$' ]


// ALTERNATION (|)
let message  = 'abcdefghijklmnopqrstuvwxyz'
let pattern = /x|y/g
console.log(message.match(pattern)) //=> [ 'x', 'y' ]

let message  = 'red green blue'
let pattern = /green|red/g // != [green|red]
console.log(message.match(pattern)) //=> [ 'red', 'green' ]

let message  = 'dark red green blue'
let pattern = /(dark )?(green|red)/g
console.log(message.match(pattern)) //=> [ 'dark red', 'green' ]


// BOUNDARIES
^ // beginning
  /^instituto/ // instituto federal => instituto
  /^instituto/ // o instituto federal da paraíba =>
  /^\w{4}/g // lorem\nipsum\ndolor => lore
  /^\w{4}/gm // lorem\nipsum\ndolor => lore, ispu, dolo
$ // end
  /federal$/ // instituto federal => federal
  /federal$/ // o instituto federal da paraíba =>
\b // word boundary
  /\ba\w*/ // apple, blackberry, cherry => apple
  /\w*y\b/ // apple, blackberry, cherry => blackberry, cherry
\B // non-word boundary
  /\w*rr\B\w*/ // apple, blackberry, cherry => blackberry, cherry

// GROUPING AND BACK REGERENCES
() // capturing group
  /bab(y|ies)/ // baby, babies, boom => baby, babies

\n // backreference
   // http://www.regular-expressions.info/backref.html
   // http://www.regular-expressions.info/backref2.html
  /(\w)a\1/ // hah dad bad dab gag gab => hah, dad, gag
  /<(p)>(.*)<\/\1>/ // <p>lorem ipsum</p> => <p>lorem ipsum</p>

(?:x) // non-capturing group
  /(?:http|ftp)://([^/\r\n]+)(/[^\r\n]*)?/
    // "http://stackoverflow.com/" =>
      // Match "http://stackoverflow.com/"
      // Group 1: "stackoverflow.com"
      // Group 2: "/"
    // "http://stackoverflow.com/questions/tagged/regex" =>
      // Match "http://stackoverflow.com/questions/tagged/regex"
      // Group 1: "stackoverflow.com"
      // Group 2: "/questions/tagged/regex"
  /([0-9]+)(?:st|nd|rd|th)?/
    // 1st =>
      // Match = 1st
      // Group 1: 1

// QUANTIFIERS
x*
  /<.*>/ // "<foo> <bar>" => "<foo> <bar>"
  /\d*/ // abc12345678cde90fgh => 12345678, 90
x+
  /\w+@\w+/ // root@ifpb => root@ifpb
  /\w+@\w+/ // root@1 => root@1
  /\w+@\w+/ // root@ =>
  /\w+/ // root@ifpb => root, ifpb
  /\d+/ // abc12345678cde90fgh => 12345678, 90
x?
  /\w+@\w?/ // root@ifpb => root@i
  /\w+@\w?/ // root@1 => root@1
  /\w+@\w?/ // root@ => root@
x{n}
  /\d{5}/ // abc12345678cde90fgh => 12345
x{n,}
  /\d{5,}/ // abc12345678cde90fgh => 12345678
x{n,m}
  /\d{1,5}/ // abc12345678cde90fgh => 12345, 678, 90
x*?
  /<.*?>/ // "<foo> <bar>" => "<foo>", "<bar>"
x+?
  /\d+?/ // abc12345678cde90fgh => 1, 2, 3, 4, 5, 6, 7, 8, 9, 0
x??
  /\d??/ // 12 => "", "", ""
x{n}?
  /\d{5}/ // abc12345678cde90fgh => 12345
x{n,}?
  /\d{5,}/ // abc12345678cde90fgh => 12345
x{n,m}?
  /\d{1,5}/ // abc12345678cde90fgh => 1, 2, 3, 4, 5, 6, 7, 8, 9, 0

// ASSERTIONS
x(?=y) // positive lookahead, x only if x is followed by y
  /\d(?=px)/ // 1pt 2px 3em 4px => 2, 4

x(?!y) // negative lookahead, x only if x is not followed by y
  /\d(?!px)/ // 1pt 2px 3em 4px =>, 1, 3
