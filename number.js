/*
NUMBER DATATYPE
--Assigning
---Operators
----Logicals
---Comperison Operators
--Checking() for the Datatype
-Bitwise Operators

*/
// Assigning Numbers as Variables
var d = 3.14;
let D = 123e8;

// number concatenation
var e = a + d;
console.log(e)

// Adding string to numbers as output
var result = "This is your answer: " + a + e;
console.log(result)

var f = 11;
var mod = f % 3;
console.log('The Modulus is: ', mod)

/*
LIST OF OPERATORS
+ / * -
** this means Exponentiation
% This is Modulus (division Remainder)
++ Increment
-- Decrement

Assigning Operators to values
= this is for assigning
+=, -=, *=, /=, %=, **=

*/
let h = 'cakahal';
var i = "chima";
let g = 12;
g -= 5;
console.log(g)
console.log(typeof(h))

var user = h + " and "+ i + " is learning Javascript"
console.log(user)

/* 
Comperison Operators:
== equal to 
=== equal values and eqaul typeData
!= Not equal
!== not equal or not equal type
> greater than
< less than
>= greater than or equal to
<= less than or equal
? ternary operation function


*/

/*
Logicals Operators:
&& logic of (and)
|| logic of (or)
! logic of (not)
*/

/*
Checking method Operator
typeof() it Returns the type the variable as a dataType
instanceof() it Returns true if an object is an instance of an object type
*/


/*
Bitwise Operators
it works with 32bits numbers
& means AND where 5 & 1 is same as 0101 & 0001 which the result will be 0001 then convert to decimal 1

| means OR

~ means NOT

^ means XOR

<< means Zero fill left shift
>> Signed right shift

>>> Zero fill right shift

*/