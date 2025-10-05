/*

Part 1: Debugging Challenge
The JavaScript code below contains intentional bugs related to type conversion.
Please do the following:
  - Run the script to observe unexpected outputs.
  - Debug and fix the errors using explicit type conversion methods like  Number() ,  String() , or    Boolean()  where necessary.
  - Annotate the code with comments explaining why the fix works.

Part 2: Write Your Own Examples
Write their own code that demonstrates:
  - One example of implicit type conversion.
  - One example of explicit type conversion.

  *We encourage you to:
Include at least one edge case, like NaN, undefined, or null .
Use console.log() to clearly show the before-and-after type conversions.

*/


/*let result = "5" - 2;*/
let result = Number("5") - 2;
console.log("The result is: " + result);
/*
let isValid = Boolean("false");
if (isValid) {
    console.log("This is valid!");
}  */

let isvalid = "false";
if(isvalid === "true") {
  console.log("This is Valid!");
}
let age = "25"; 
/* age is declared as srting so we needto convert into number */

let totalAge =Number(age)  + 5;
console.log("Total Age: " + totalAge);
/*  Examples for Implicit and Explicit conversions 
      Explicit Conversions:      */
      let name = 2345 ;
console.log(name);
let change = String(name);
console.log(" The name is converted into string which is declared as number: " );
console.log(name);
console.log(typeof name);
let city = "Ofallon";
console.log(Boolean(city));
let zipCode = 0 ;
console.log(Boolean(zipCode));
let value = "This is" + 10;
console.log(value);



