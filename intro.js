var x = 5;
var y = 6;

var z = x * y;
console.log(z)
document.getElementById("ans").innerHTML = "The value of z is: " +z;

var cr = 1000;
let dr = 750;
const total = cr - dr;
console.log(total)

/*
var keyword was the only way to declare a JavaScript cariable before 2015 version while js(ES6) allows the use of the const keyword to define a variable that cannot be reassigned. and the let keyword to define a variable with restricted scope. 
So the d/f is that let and const is not supported by the older version

JAVASCRIPT Identifiers:
All JS variables must be identified with unique names called identifiers

eg: our total and our x and y values above

The GENERAL RULES for constructing names variables(unique identifiers):

1   Names can contain letters, digits, underscores, and dollar signs.
2   Names must begin with a letter
3   Names can also begin with $ and _ but not with a number
4   Names are case sensitive (y and Y are different variables) 
5   Reserved words (like JavaScript keywords) cannot be used as names

JAVA ASSIGNMENT OPERATOR uses the equal (=) as assigning a variable
== means an operator called the equal sign

JAVASCRIPT DATA TYPES:
here, strings: is a a data type that holds text values.
while number: is for digits

Strings are written inside double or single quotes while Numbers are written without quotes

eg: if you put a number in quotes, it will be treated as a text string

*/

var pi = 3.14;
var person = "Cakahal Johnson";
var answer = 'Yes I am!  ';

document.getElementById("total").innerHTML = pi + "<br>" + person + "<br>" + answer;

var first = pi + "<br>" + person +"<br>" +answer;
console.log(first)

// Printing Statements
var customer = "Cakahal Johnson", customer_Car = "Benz", customer_price = 5000;

console.log(customer_Car)

var customer_name;
console.log(customer_name) //this will console  undefined

//this undefined lets re-declare below
var customer_re = "we are trying to re-declare me!"
var customer_re;
console.log(customer_re) // this will not lose its values, so it will print 

var adding = 5 + 8 * 9 - 12 / 2;
document.getElementById("ans1").innerHTML = adding;
console.log(adding)


// STRING CONCATENATION: this is just adding or joining two values just by using the plus sign

var fullname = "cakahal " + "Johnson";
console.log(fullname)

var classWork = "my money 500 + 1000" + 2 + 33;
console.log(classWork)

var class_work = classWork + 5;
console.log(class_work)

var $class_work = 2 + 33 +" my money 500 + 1000";
console.log($class_work)



