// Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Statements/class
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Classes
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Introduction_to_Object-Oriented_JavaScript
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Grammar_and_types#Object_literals
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Details_of_the_Object_Model
// http://exploringjs.com/es6/ch_classes.html
// https://www.sitepoint.com/object-oriented-javascript-deep-dive-es6-classes/
// https://coryrylan.com/blog/javascript-es6-class-syntax
// https://googlechrome.github.io/samples/classes-es6/

// Object: properties & methods
// Object: JSON, new Object, constructor function, Object.create, class
// Javascript Object Notation (JSON) / http://json.org/
let post = {
  title: 'Lorem ipsum dolor',
  text: 'Nunc accumsan in ipsum a mattis...'
}
console.log(post)          //=> { title: 'Lorem ipsum dolor', text: 'Nunc accumsan in ipsum a mattis...' }
console.log(post.title)    //=> 'Lorem ipsum dolor'
console.log(post['title']) //=> 'Lorem ipsum dolor'
console.log(typeof post)   //=> object

// Object
let post = new Object()
post.title = 'Lorem ipsum dolor'
post.text = 'Nunc accumsan in ipsum a mattis...'

console.log(post)        //=> { title: 'Lorem ipsum dolor', text: 'Nunc accumsan in ipsum a mattis...' }
console.log(typeof post) //=> object

// constructor function, lexical this
function Post(title, text){
  this.title = title
  this.text = text
}
var post = new Post('Lorem ipsum dolor', 'Nunc accumsan in ipsum a mattis...')
console.log(post)        //=> Post { title: 'Lorem ipsum dolor', text: 'Nunc accumsan in ipsum a mattis...' }
console.log(typeof post) //=> object

// Object.create
let post = {
  title: 'Lorem ipsum dolor',
  text: 'Nunc accumsan in ipsum a mattis...'
}
let p1 = Object.create(post)
console.log(post)        //=> { title: 'Lorem ipsum dolor', text: 'Nunc accumsan in ipsum a mattis...' }
console.log(typeof post) //=> object

// class
class Post {
  constructor(title, text){
    this.title = title;
    this.text = text;
  }
}
let post = new Post('Lorem ipsum dolor', 'Nunc accumsan in ipsum a mattis...')
console.log(post)        //=> Post { title: 'Lorem ipsum dolor', text: 'Nunc accumsan in ipsum a mattis...' }
console.log(typeof post) //=> object

// can change properties
const ip = {
  address: '192.168.0.2',
  mask: '255.255.255.0'
}
console.log(ip) //=> { address: '192.168.0.2', mask: '255.255.255.0' }
ip.version = 'v6'
console.log(ip) //=> { address: '192.168.0.2', mask: '255.255.255.0', version: 'v6' }
ip.gateway = {  // object with object
  ip: '192.168.0.254',
  mask: '255.255.255.0'
}
console.log(ip)                  //=> { address: '192.168.0.2', mask: '255.255.255.0', version: 'v6', gateway: { ip: '192.168.0.254', mask: '255.255.255.0' } }
console.log(ip.gateway.ip)       //=> '192.168.0.254'
console.log(ip['gateway']['ip']) //=> '192.168.0.254'

// Deleting properties
let ip = {
  address: '192.168.0.2',
  mask: '255.255.255.0'
}
delete ip.mask
console.log(ip) //=> { address: '192.168.0.2' }

// methods of object
let post = new Object()
post.title = 'Lorem ipsum dolor'
post.text = 'Nunc accumsan in ipsum a mattis...'
post.toHTML = function(){
  return `<div><h1>${this.title}</h1><p>${this.text}</p></div>`
}
console.log(post.toHTML()) //=> '<div><h1>Lorem ipsum dolor</h1><p>Nunc accumsan in ipsum a mattis...</p></div>'

let person = {
  name: 'fulano',
  email:'fulano@gmail',
  showPerson: function(){
    return `${this.name} - ${this.email}`
  }
}
console.log(person.showPerson()) //=> 'fulano - fulano@gmail'

let ip = {
  address: '192.168.0.2',
  mask: '24',
  toString: function(){
    return this.address+'/'+this.mask
  }
}
console.log(ip.toString()) //=> '192.168.0.2/24'

class IP {
  constructor(ip, mask){
    this.address = ip
    this.mask = mask
  }

  toString(){
    return this.address+'/'+this.mask
  }
}
const ip = new IP('192.168.0.2', '24')
console.log(ip.toString()) //=> '192.168.0.2/24'

// Arrow functions do not define ('bind') their own this
// let person = {
//   name: 'fulano',
//   email:'fulano@gmail',
//   showPerson: () => `${this.name} - ${this.email}`
// }
// console.log(person.showPerson());

// interaction / enumerating all properties of an object
//  (for...in, Object.keys(o), Object.getOwnPropertyNames(o))
posts = {
  title: 'lorem ipsum dolor',
  text: 'Nunc accumsan in ipsum a mattis...'
};
for(let field in posts){
  console.log(posts[field])
}
//=>
// 'lorem ipsum dolor',
// 'Nunc accumsan in ipsum a mattis...'
for(let field of Object.keys(posts)){
  console.log(posts[field])
}
//=>
// 'lorem ipsum dolor',
// 'Nunc accumsan in ipsum a mattis...'

let people = [
  {
    name: 'Mike Smith',
    family: {
      mother: 'Jane Smith',
      father: 'Harry Smith',
      sister: 'Samantha Smith'
    },
    age: 35
  },
  {
    name: 'Tom Jones',
    family: {
      mother: 'Norah Jones',
      father: 'Richard Jones',
      brother: 'Howard Jones'
    },
    age: 25
  }
]

for (let {name: n, family: { father: f } } of people) {
  console.log('Name: ' + n + ', Father: ' + f)
}
//=>
// Name: Mike Smith, Father: Harry Smith
// Name: Tom Jones, Father: Richard Jones

// prototype
String.prototype.toSnakeCase = function(){
  return this.replace(/\s/g, '_')
}
console.log(new String('lorem ipsum').toSnakeCase())       //=> 'lorem_ipsum'
console.log(new String('outro lorem ipsum').toSnakeCase()) //=> 'outro_lorem_ipsum'

// prototype instance
let lorem = new String('lorem ipsum dolor')
lorem.toSnakeCase = function(){
  return this.replace(/\s/g, '_')
}
console.log(lorem.toSnakeCase()) //=> 'outro_lorem_ipsum'

let lorem2 = new String('outro lorem ipsum dolor')
// console.log(lorem2.toSnakeCase()) // TypeError

// Defining classes
class Post {
  constructor(title, text){
    this.title = title
    this.text = text
  }
}
let post = new Post('Lorem ipsum dolor', 'Nunc accumsan in ipsum a mattis...')
console.log(post) //=> Post { title: 'Lorem ipsum dolor', text: 'Nunc accumsan in ipsum a mattis...'

// Prototype methods
class Post {
  constructor(title, text){
    this.title = title
    this.text = text
  }
  toHMTL(){
    return `<div><h1>${this.title}</h1><p>${this.text}</p></div>`
  }
}
var post = new Post('Lorem ipsum dolor', 'Nunc accumsan in ipsum a mattis...')
console.log(post)          //=> Post { title: 'Lorem ipsum dolor', text: 'Nunc accumsan in ipsum a mattis...'
console.log(post.toHMTL()) //=> <div><h1>Lorem ipsum dolor</h1><p>Nunc accumsan in ipsum a mattis...</p></div>

// Static methods
class Point {
    constructor(x, y) {
        this.x = x
        this.y = y
    }
    static distance(a, b) {
        const dx = a.x - b.x
        const dy = a.y - b.y
        return Math.sqrt(dx*dx + dy*dy)
    }
}
const p1 = new Point(5, 5)
const p2 = new Point(10, 10)
console.log(Point.distance(p1, p2)) //=> 7.0710678118654755

// getters and setters
class Post {
  get title() {
    return this._title
  }
  set title(title) {
    this._title = title
  }
}
var post = new Post()
console.log(post)       //=> Post {}
post.title = 'lorem ipsum dolor' // set
console.log(post)       //=> Post { _title: 'lorem ipsum dolor' }
console.log(post.title) //=> 'lorem ipsum dolor' / get

// Sub classing with extends / old prototype
class Person {
  constructor(name) {
    this._name = name
  }

  hello(){
    return `Hello: ${this._name}`
  }
}
class Student extends Person {
  constructor(name, id){
    super(name)
    this._id = id
  }
}
var s = new Student('fulano', 10)
console.log(s.hello()) //=> 'Hello: fulano'

// Abstract subclasses or mix-ins
// http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/
let CalculatorMixin = Base => class extends Base {
  addition(a, b) { return a + b }
  subtraction(a, b) { return a - b }
}

let RandomizerMixin = Base => class extends Base {
  random() { return Math.random() }
  randomRange(min, max) { return Math.random() * (max - min) + min }
}

class Util extends CalculatorMixin(RandomizerMixin(Object)) { }
const util = new Util()
console.log(util.randomRange(1,10))   //=> 2.2857742766885556
console.log(util.subtraction(100,10)) //=> 90

// Web API / RestFull
// http://ip-api.com/docs/
// http://ip-api.com/docs/api:json
// http://ip-api.com/json/8.8.8.8
// http://jsonplaceholder.typicode.com/
// http://jsonplaceholder.typicode.com/posts/
// https://viacep.com.br/
// https://viacep.com.br/ws/01001000/json/
