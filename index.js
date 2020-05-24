 //Comment - its a best practice to write the script below body section. 
 //There are exceptional cases for third party files


console.log('Hello World!');
//let name = 'Murali';
//console.log(name);

//NOTE FirstName and firstName are diffrent

//Values in the variable name can be over written

//let interest_rate = 0.5;
//To declare a constant val
const interest_rate = 20;
//This will throw error as you are reassingining a constant val
//interest_rate = 1;
console.log(interest_rate);

//******************************Primitive value types****************************
let name = 'Murali'; //String Literal
let age = 30; //Number literal
age = 'override';
let isapproved = true //Boolean literal
let firstname = undefined;
let setcolour = null; //You generaly use null wen u want to clear a value and reassign to something new

console.log(typeof age); //this displays integer in the op
console.log(typeof firstname); //this returns type as undefined
console.log(typeof age); //this returns type as object

//*********************************Reference value type************************************
// 1.Object 2.Arrays 3.Function
//1.Object
//lets assume we are declaring a Person object which have the  attributes
//You have to use a object literal as below - Key valu pairs
let person = {
    name: 'Muralidharan',
    age:26
};


//if you want to change the value of the attributes - 2 methods are available

// 1. Dot notation - in general this is preferred as it is simple
person.age = 27
console.log(person.age)

// 2. Bracket notaotion
person[age] = 40
console.log(person[age])
//Brackets notation is generally used when you are not sure what attribute has to be passed
let attribute = 'name';
console.log(person[attribute])


//2.Arrays
let selectedcolours = ['red','blue'];
//since JS is dynamic lang
selectedcolours[2]='green';
selectedcolours[3]=45;
console.log(selectedcolours);
//length of array
console.log(selectedcolours.length);

//3.Functions
//3.1 Function performing a task
//Cool stuff => here name and lastname called the parameter
function greet(name,lastname) {
    console.log('Hello' + ' ' +name +' '+lastname)
}
//here Bro and Murali are calles arguments
//Unlike Java if you dont pass the second parameter it wont throw error - It takes it as undefined
greet('Bro', 'Murali');
//Method overriding
greet('Yo', 'mah');

//3.1 Function calculating a value
function square(number)
{
    return number*number;
}
let op = square(2)
//Passing the function variable
console.log(op)