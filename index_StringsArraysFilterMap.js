//SCOPE 

//Defining a global variable should be outside of the loop like this
let colur = "Red"
if (true){
    const another = 'bye';
}

//This will retunrn an error. because scope of 'another' is only within the if loop
//console.log(another); 

console.log(colur)

//PROBLEM WITH var keyword - var is function scoped variable
//The scope of the variables is accessible putside the loop
//In the above if statement id you use -->  var another = 'bye'.  another is accessible outside the loop
//var is also acting as a global variable with the window object


//************************STRINGS IN JS*********************** */
//String primitive
const message = 'This is my first message';

//String object
const another = new String('HI');
console.log(message.length);
//PLEASE EXPLORE ALL THE PROPERTIES OF STRING FROM THE DOCUMENTATION
console.log(another.small());




//************************************LOOPS******************** */
//FOR 
//While
//Do..While
//For..in
//For..of //forEach

for (let i = 0; i<5; i++){
    console.log("Hello World")
}


//***************************GETTERS AND SETTERS************************************** */
person={
    firstName: 'Muralidharan',
    lastName: 'Rajendran',
    //fullname: function(){}
    //the above can also be written as
    // fullname() {
    //     return(`${person.firstName} ${person.lastName}`);
    // }

    //getter
    get fullname() {
        return(`${person.firstName} ${person.lastName}`);
    },
    set fullname(value){
        const parts = value.split(' ');
        this.firstName = parts[0];
        this.lastName = parts[1];
    }

};

//to set the full name propeerty
person.fullname = 'Uma Rajendran'
console.log(person.fullname)
console.log(person.firstName + ' '+person.lastName);
//The above can also be written as
console.log(`${person.firstName} ${person.lastName}`);
//calling the function
console.log(person.fullname);

//The problem with the above is , you are calling a function. So is there a way to call just the propertly like
//person.fullname which displays the full name
//and also i wish to set a new name to my fullname and display it
//This is possible with getters and setters
// GETTERS => ACCESS PROPERTIES
// SETTERS => TO MUTATE/CHANGE


//******************************CLONING AN OBJECT******************** */

//The below is an object
const circle = {
    radius:1,
    draw :function(){
        console.log('draw');
    }
};

//if we have to copy that object properties and function into another object - 'another', 
//we can so something like below

//let below be the object into which we paste the props
//const anther = {};

//the below is an old method thogh - using for
// for (let key in circle){
//     //console.log(key);
//     anther[key] = circle[key];
// }
//console.log(anther);

//The modern JS has onjectproperties which we can use

//The second parameter here will copy the properties of the circle and copy it to thr {} object we declared
//Object.assign({},circle);  
//the above line is similar to the lies 101 through 104 - (for loop)
//within the {} you can also add new props
const anther = Object.assign({color: 'yellow'},circle);  
console.log(anther);

//There is a much simpler way too - using spread {...}
const anthr_spread = {...circle};
anthr_spread.draw;



//**********************LETS UNDERSTAND this key word****************************

//this - The OBJECT that is executing the current function

//If the function is part of an object we call it a method -> This references an object itself
//if its a regular function - it references to global object - which is window object

//consider the object below

const video = {
    title: 'a',
    play(){
        console.log(this);
    }
}

video.play()

//this will return the below
// title: "a", play: ƒ}
// play: ƒ play()
// title: "a"
// __proto__: Object

//creating another function with reference to the video object
video.play_two = function(){
    console.log(this);
}

video.play_two()
//This will also return 
// {title: "a", play: ƒ, play_two: ƒ}
// play: ƒ play()
// play_two: ƒ ()
// title: "a"
// __proto__: Object

//Now lets try a global function which is not in an object

function global_video(){
    console.log(this)
}

global_video()

//look what this returns
// Window {parent: Window, opener: null, top: Window, length: 0, frames: Window, …}

//Now lets see how this works in a constructor

function ConstVideo (title){
    this.title = title;
    console.log(this);
}

const constvideo = new ConstVideo('a');
//this returns
//ConstVideo {title: "a"}

//this is because, the new keyword in the constructor will create and empty object whic is 
//referred to this. Hence it does not take up the global objects


//**************FOR EACH***********************************
const forEach = {
    title : 'a',
    tags: ['a','b','c'],
    showtags: function(){
        this.tags.forEach(function(tag){
            console.log(this.title,tag);
            //this function is a call back fuction. It is not indide the forEach object.
            //Hence its objects refers to global object Windoes
        },this); //to overcome that problem, we use this keyword here to refer to the current object itself
    }
};

console.log(forEach.showtags())



//******************************STRING TEMPLATE LITERALS**************************** */
const write = 'This is my\n \'first\' message.'
console.log(write)

//To avois this noise in the code we can use template literals
//Object {}
// String " " ' '
//Template ` `
let sayhi = 'hi';
const writetemp = `This is my 
"first" messahe ${sayhi}`;
//${} - place holder - like python. You can even call a function here


//****************************Array filter********************************* */
const arr = [1,-1,2,3];

const filtered = arr.filter(function(value){
    return value >=0;
});

console.log(filtered);

//line 219 can alsobe written as
const arrowedFunc = arr.filter(n => n>=0);
console.log(arrowedFunc);

//here => can be termed as arrow function


//*********************************MAPPING AN ARRAY************************************ */
//We can map each item in array to something else

const maparr = [1,-1,2,3];

const mapfilter = maparr.filter(n => n>=0);
const mapitems = mapfilter.map(n => '<li>' + n + '</li>');
const html = mapitems.join(''); //This will remove the commas
console.log(html);

//Mapping objects to array
//Very helpful in real world applications
const maptoObjectProp = mapfilter.map(n =>{
    const obj = {value : n};
    return obj;
//this can also be written as
    //return const obj = {value : n};
    
});

//we can aslos cahin the above statements like
const check = maparr
.filter(n => n>=0)
.map(n =>({value : n}));

console.log(maptoObjectProp);
console.log(check);


//*******************************ARRAY REDUCE********************** */
const numbs = [1,-1,2,3];

//calculate some of all the elements in the array
let sum = 0;
for (let n of numbs){
    sum +=n;
}
console.log(sum);

//the above for loop can be also written as
const sumnow = numbs.reduce((accumulator,currentvalue) => {
    return accumulator+currentvalue;
},0);
//accumulator is like an initializer like sum = 0
//each tie the call back function is executed, the currentvalue is taken from numbs array
//the result is then stored in the accumulator
//The last 0 is initialising the accumulator value to 0
console.log(sumnow);

//During  iteration
// accumulator = 0, currentvalue = 1 => accumulator = 1
// accumulator = 1, currentvalue = -1 => accumulator = 0
// accumulator = 0, currentvalue = 2 => accumulator = 2
// accumulator = 2, currentvalue = 3 => accumulator = 5

//SIMPLIFIED VERSION OF THE ABOVE
//const sumnowsimple = numbs.reduce((accumulator,currentvalue) => accumulator+currentvalue,0);
// if 0 is not defined as the last parameter the first number in the array that is 1 is assigned by default
//which again gives the same value. as the first iteration is skipped
const sumnowsimple = numbs.reduce((accumulator,currentvalue) => accumulator+currentvalue);
console.log(sumnowsimple);