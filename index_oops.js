//CREATING OBJECTS

//  - method 1 - Object literal syntax
//This method is preffered ony when the objec literal do not have a behaviour - (i.e method in it) - because maintanance is tough
// (How ever the below has a behaviour in it)
//In JS an object is a collection of key value pairs - each and everything you declare inside shud b a key:value pair
    const circle = {
        //here radius is a property/attribute
        radius : 1,
        //next we are declaring an object
        location : {
            x : 1,
            y : 1 
        },
        //declaring a function
        draw: function(){
            console.log('draw_objLiteral');
        }

    };
//The circle object has three members - radius, location, draw
//Here radius and location is called properties (holds value), function is called method (define logic)
    circle.draw();

//2. Factory function

function createcircle(radius)
{
    //Returning the object
    return {
        //radius : radius,
        //the above statement can be just simplified as below
        radius,
        draw: function() {
            console.log('draw_factory');
        }
    };

}

//calling the above method
const circle_factory = createcircle(1);
circle_factory.draw();
//console.log(createcircle(1));

//3.Constructors
//In java script there is no concept of classes
//The first letter in a constructor name starts with a capital letter
function Circle(radius)
{
    //this- it is a global keyword. If you are running in browser -> this becomes browser obj
    //if you are running in a node, it will become a node object
    //console.log('this',this);
    this.radius = radius;
    this.draw = function() 
    {
        console.log('draw_Constructor');
    }

}
const circle_constructor = new Circle(1);
circle_constructor.draw();

//here the new constructor will create an empty object like {}, 
//it will set 'this' keyword to point to the object,
//and it will return that object from the function
//const circle_constructor =  Circle(1); //without the new keyword it will consider the global onject - windows
//thats why you use new keyword to create an empty object
console.log("HERE")
//the line 61 can also be written as
Circle.call({},1);
// {} represents empty object and 1 represents the number of argument

//the line 61 can alos be written as 
Circle.apply({},[1]);
//here you can pass the array, but it call you have to add like 1,2,3 etc
console.log("HERE")
//TAKEAWAY - FUNCTIONS ARE OBJECTS

//*********************************CONSTRUCTOR PROPERTIES**********************
//The function that is used to create/construct an objet is called a constructor - It is a property

console.log(circle_constructor.constructor) ;
//the above returns the function name Circle

console.log(circle_factory.constructor);
//this returns the built in constructor Object by default - intrnally the JS engine will construct this constr

//See the below example
let x = {}; //this is an object liretal
//what JS engine does internally is :
let X = new Object(); //Refer line 61 for understanding. it is assigning an object constructor
//Hence every OBJECT HAS A CONSTRUCTOR PROPERTY



//*****************FUNCTIONS ARE OBJECTS******************************* */
Circle.name //Returns name of the function
Circle.length //Returns the number of arguments

console.log(Circle.constructor) ;
console.log(createcircle.constructor);
//The above both retuns the Function constructor- intrnally the JS engine will construct this constr

const Circle1 = new Function('radius', `
this.radius = radius;
    this.draw = function() 
    {
        console.log('draw_Constructor');
    }`);
const circle_new = new Circle1(1);

//PLS GO TO STEP :- 71

//*****************VALUE/PRIMITVE TYPES AND REFERENCE TYPES******************************/
//VALUES TYPES ARE NUMBERS, STRINGS, BOOLEAN, SYMBOL, NULL, UNDFINED - THESE ARE ALL PRIMITIVES
//REFERENCE TYPES ARE OBJECT, FUNCTION, ARRAY - THESE ARE ALL OBJECTS
// JS HAS PRIMITIVES AND OBJECTS 

//COOL STUFF BELOW - UNDESRTAND

let i = 10;
let j = i; // j = 10
i=20
console.log(i) //20
//in the above value is of i is copied and stored into j. These are PRIMITIVE TYPES

//LETS SEE THE BEHAVIOUE OF REFERENCE TYPE
let k = {value : 10};
let l = k; //Here the memory location of K is copied and passed to l

k.value = 20;
console.log(k); // This returns K =20
console.log(l); //This returns l = 20
//This is because the memory location is passes unlike the value is directly passed asin primitive type
// So both k and l are pointing to the same object in that memory

//another example - PRIMITIVE TYPE
let num = 10;

function increase(num){ //increase(10)
    num++;              // 10+1 = 11 .. The scope of this num = 11 is over here itself
}

increase(num); //increase(10)
console.log(num); //This returns 10 not 11. This is because in primitive type value is passed not the address

//another example - REFERENCE TYPE
let anobj = {value : 10}; //Here 10 is stored in the memory location of anobj

function inc(anobj){
    anobj++;
}

inc(anobj);
console.log(anobj); // This will return 11 because we are incrementing the 
//value that is stored (10) in memory location of anpbj
//so wen u modify i or j the change is reflected


//***************************ADDING REMOVING PROPERTIES ************************************** */
//Objects in JS are dynamic. You can add or delete properties after creating them
function Mycircle(radius)
{
    this.radius = radius;
    this.draw = function() 
    {
        console.log('draw_Constructor');
    };
}

const thecircle = new Mycircle(1);

//below, you are creating a property outside the function with the help of the object
//this ,makes JS very powerful. Incase of Java you have to go and modify it in the class
thecircle.location = {x:1};

//the above can also be done twith the help of bracket notation
thecircle['location'] = {x:1};

//bracket notation is much used for assigning dynamic property name during run time - eg below
const propertyname = 'locationTwo';
thecircle[propertyname] = {x:1};

//ANd also bracketnotation comes in handy when you have to use property name with spl chars.ed: location-two, loc two etc

//You can also delete one or more props if object
delete Mycircle.location;


//****************************************ENUMERATING PROPERTIES***************************** */
for (let key in thecircle){

    //here key returns the all the properties and methods of that object
    console.log("yo",key); 

    //returns value of the property 
    console.log(key,thecircle[key]); 

    //this filters the functions
    if(typeof thecircle.key !== 'function'){
        console.log(key,thecircle[key]); 
    }
}

//****************************another approach to get all properties *********************************
const props = Object.keys(thecircle);
console.log(thecircle);

//******************To check the exsistence of a prop or method in an object******************************
if ('location' in thecircle){
    console.log("Circle has location")
}


//******************************************ABSTRACTION************************************************ */
function AbstCircle(radius){

    this.radius = radius;
    //this.defaultLocation = {x:0, y:0}; //lets assume this is an important/implement details, 
    //so we want hide it 

    let defaultLocation = {x:0, y:0};
    //hence we ll remove this key word, which will make it primitive type and its scope is only 
    //within the function

    //same applies for this method also
    let computeOptimumLocation = function(factor) { 
        //....
    }
    this.draw = function(){

        //There is a concept in JS called CLOSURE whichh will allow the properties of the 
        //parent function to be extended
        //to child. Here computeOptimumLocation() is inside draw function which is a child, 
        //hence it is accessible without
        //'this' keyword - can be removed

        //this.computeOptimumLocation();
        computeOptimumLocation(0.1);
        console.log("draw");
    };
}

let abstractCircle = new AbstCircle(1);
//We'd like to expose only radius and draw method. computeOptimumLocation wont come because of abstraction

//*********************************GETTERS AND SETTERS************************************ */
function Yocircle(radius){
    this.radius = radius;
    let defaultLocationtwo = {x:0, y:0};

    //to get defaultlocationTwo
    this.getdefaultlocation = function(){
        return defaultLocationtwo;
    };
    this.draw = function(){
        console.log('draw');
    };

    //Getters and Setters
    //Inorder to directly access the property like  yocircle.defaultLocationtwo
    Object.defineProperty(this, 'defaultLocationtwo',{
        get: function() {
            return defaultLocationtwo;
        },
        set: function(value){
            //just for validation - thats an advantage os having a setter
            if(!value.x || !value.y)
            throw new Error('Invalid location');
            defaultLocationtwo = value;
        }
    });
}
let yocircle = new Yocircle(1);
console.log(yocircle.getdefaultlocation());
//suppose you want to display defaultloxationtwo here - which is actually a private member ?
//You should use getter and setter methods

//Inorder to directly access the property like  yocircle.defaultLocationtwo
console.log(yocircle.defaultLocationtwo);
//yocircle.defaultLocationtwo = 0; //this will throw an error as values are set to 0,0