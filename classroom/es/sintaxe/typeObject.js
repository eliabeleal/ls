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

// Object
var post = new Object();
post.title = 'Lorem ipsum dolor';
post.text = 'Nunc accumsan in ipsum a mattis. Suspendisse potenti. Aenean lorem lorem, dapibus in ullamcorper eu, pharetra in lorem. Curabitur risus sem, faucibus non massa accumsan, vehicula fermentum felis. Proin ex magna, fringilla non mattis sed, blandit ac quam. Sed eu aliquet dui. Suspendisse varius tellus non ligula lacinia, a porta magna scelerisque. Quisque blandit semper nunc non tincidunt. Vivamus orci mauris, sagittis efficitur elementum id, volutpat volutpat dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vitae risus ligula. Suspendisse bibendum quam at odio tempor, ac ornare elit mollis. Quisque urna dui, efficitur vel convallis at, dictum ac elit. Vestibulum faucibus pharetra congue. Sed fringilla lacinia ipsum, vel dictum tortor pellentesque a. Nam non iaculis diam.';

console.log(post);
console.log(post.title);
console.log(post['title']);

// JSON - Javascript Object Notation
// http://json.org/
var post = {
  title: 'Lorem ipsum dolor',
  text: 'Nunc accumsan in ipsum a mattis. Suspendisse potenti. Aenean lorem lorem, dapibus in ullamcorper eu, pharetra in lorem. Curabitur risus sem, faucibus non massa accumsan, vehicula fermentum felis. Proin ex magna, fringilla non mattis sed, blandit ac quam. Sed eu aliquet dui. Suspendisse varius tellus non ligula lacinia, a porta magna scelerisque. Quisque blandit semper nunc non tincidunt. Vivamus orci mauris, sagittis efficitur elementum id, volutpat volutpat dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vitae risus ligula. Suspendisse bibendum quam at odio tempor, ac ornare elit mollis. Quisque urna dui, efficitur vel convallis at, dictum ac elit. Vestibulum faucibus pharetra congue. Sed fringilla lacinia ipsum, vel dictum tortor pellentesque a. Nam non iaculis diam.'
}
console.log(post);

// constructor function, lexical this
function Post(title, text){
  this.title = title;
  this.text = text;
}
var post = new Post('Lorem ipsum dolor', 'Nunc accumsan in ipsum a mattis. Suspendisse potenti...');
console.log(post);

// Object.create
var post = {
  title: 'Lorem ipsum dolor',
  text: 'Nunc accumsan in ipsum a mattis. Suspendisse potenti. Aenean lorem lorem, dapibus in ullamcorper eu, pharetra in lorem. Curabitur risus sem, faucibus non massa accumsan, vehicula fermentum felis. Proin ex magna, fringilla non mattis sed, blandit ac quam. Sed eu aliquet dui. Suspendisse varius tellus non ligula lacinia, a porta magna scelerisque. Quisque blandit semper nunc non tincidunt. Vivamus orci mauris, sagittis efficitur elementum id, volutpat volutpat dui. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos himenaeos. Quisque vitae risus ligula. Suspendisse bibendum quam at odio tempor, ac ornare elit mollis. Quisque urna dui, efficitur vel convallis at, dictum ac elit. Vestibulum faucibus pharetra congue. Sed fringilla lacinia ipsum, vel dictum tortor pellentesque a. Nam non iaculis diam.'
}
var p1 = Object.create(post);
console.log(post);

// class
class Post {
  constructor(title, text){
    this.title = title;
    this.text = text;
  }
}
var post = new Post('Lorem ipsum dolor', 'Nunc accumsan in ipsum a mattis. Suspendisse potenti...');
console.log(post);

// can change
var ip = {
  address: "192.168.0.2",
  mask: "255.255.255.0"
}
console.log(ip);
ip.version = "v6";
console.log(ip);

// object with object
ip.gateway = {
  ip: "192.168.0.254",
  mask: "255.255.255.0"
};
console.log(ip);
console.log(ip.gateway.ip);
console.log(ip["gateway"]["ip"]);

// methods
var post = new Object();
post.title = 'Lorem ipsum dolor';
post.text = 'Nunc accumsan in ipsum a mattis...';
post.toHTML = function(){
  return `<div><h1>${this.title}</h1><p>${this.text}</p></div>`;
}
console.log(post.toHTML());

var person = {
  name: "fulano",
  email:"fulano@gmail",
  showPerson: function(){
    return `${this.name} - ${this.email}`;
  }
}
console.log(person.showPerson());

// Arrow functions do not define ("bind") their own this
var person = {
  name: "fulano",
  email:"fulano@gmail",
  showPerson: () => `${this.name} - ${this.email}`
}
console.log(person.showPerson());

var ip = {
  address: '192.168.0.2',
  mask: '24',
  toString: function(){
    return this.address+'/'+this.mask;
  }
}
console.log(ip.toString());

// objects are passed by references.
var ip = {address: '192.168.0.2'}
var ip_home = ip;
ip_home.version = 'v6';
console.log(ip);

// clone
var a = {myProp: "value"};
var cloneOfA = JSON.parse(JSON.stringify(a));
cloneOfA.value = "value";
console.log(a);
console.log(cloneOfA);
var cloneOfA = Object.assign({}, a); // ES6
console.log(a);

// interaction / enumerating all properties of an object
//  (for...in, Object.keys(o), Object.getOwnPropertyNames(o))
posts = {
  title: 'lorem ipsum dolor',
  text: 'Nunc accumsan in ipsum a mattis...'
};
for(field in posts){
  console.log(posts[field]);
}
for(field of Object.keys(posts)){
  console.log(posts[field]);
}

var people = [
  {
    name: "Mike Smith",
    family: {
      mother: "Jane Smith",
      father: "Harry Smith",
      sister: "Samantha Smith"
    },
    age: 35
  },
  {
    name: "Tom Jones",
    family: {
      mother: "Norah Jones",
      father: "Richard Jones",
      brother: "Howard Jones"
    },
    age: 25
  }
];

for (var {name: n, family: { father: f } } of people) {
  console.log("Name: " + n + ", Father: " + f);
}

// Deleting properties
var ip = {
  address: "192.168.0.2",
  mask: "255.255.255.0"
}
delete ip.mask;
console.log(ip);

// JSON.parse()
console.log(JSON.parse('{"value": 10}'));

// JSON.stringify()
console.log(JSON.stringify({value: 10}));

// prototype
String.prototype.toSnakeCase = function(){
  return this.replace(/\s/g, '_');
}
console.log(new String("lorem ipsum dolor").toSnakeCase());
console.log(new String("outro lorem ipsum dolor").toSnakeCase());

// prototype instance
var lorem = new String("lorem ipsum dolor");
lorem.toSnakeCase = function(){
  return this.replace(/\s/g, '_');
}
console.log(lorem.toSnakeCase());

var lorem2 = new String("outro lorem ipsum dolor");
console.log(lorem2.toSnakeCase());

// Defining classes
class Post {
  constructor(title, text){
    this.title = title;
    this.text = text;
  }
}
var post = new Post('Lorem ipsum dolor', 'Nunc accumsan in ipsum a mattis. Suspendisse potenti...');
console.log(post);

// Prototype methods
class Post {
  constructor(title, text){
    this.title = title;
    this.text = text;
  }
  toHMTL(){
    return `<div><h1>${this.title}</h1><p>${this.text}</p></div>`;
  }
}
var post = new Post('Lorem ipsum dolor', 'Nunc accumsan in ipsum a mattis. Suspendisse potenti...');
console.log(post);
console.log(post.toHMTL());

// Static methods
class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    static distance(a, b) {
        const dx = a.x - b.x;
        const dy = a.y - b.y;
        return Math.sqrt(dx*dx + dy*dy);
    }
}
const p1 = new Point(5, 5);
const p2 = new Point(10, 10);
console.log(Point.distance(p1, p2));

// getters and setters
class Post {
  get title() {
    return this._title;
  }
  set title(title) {
    this._title = title;
  }
}
var post = new Post();
console.log(post);
post.title = 'lorem ipsum dolor';
console.log(post);
console.log(post.title);

// Sub classing with extends
class Person {
  constructor(name) {
    this._name = name;
  }

  hello(){
    return `Hello: ${this._name}`;
  }
}
class Student extends Person {
  constructor(name, id){
    super(name);
    this._id = id;
  }
}
var s = new Student('fulano', 10);
console.log(s.hello());

// Abstract subclasses or mix-ins
// http://justinfagnani.com/2015/12/21/real-mixins-with-javascript-classes/
var calculatorMixin = Base => class extends Base {
  addition(a, b) { return a + b }
  subtraction(a, b) { return a - b }
};

var randomizerMixin = Base => class extends Base {
  random() { return Math.random() }
  randomRange(min, max) { return Math.random() * (max - min) + min; }
};

class Util extends CalculatorMixin(RandomizerMixin(Object)) { }
const util = new Util();
console.log(util.randomRange(1,10));
console.log(util.subtraction(100,10));

// Web API / RestFull
// http://ip-api.com/docs/
// http://ip-api.com/docs/api:json
// http://ip-api.com/json/8.8.8.8
// http://jsonplaceholder.typicode.com/
// http://jsonplaceholder.typicode.com/posts/
// https://viacep.com.br/
// https://viacep.com.br/ws/01001000/json/
