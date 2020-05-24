//Switch case

//Generally preferred when there are comparatively many Test cases

let day = 2;

//Switch case can accept strings, numbers and also boolean values
switch(day)
{
    case 1:
        console.log("Sunday");
        break;
    //If break statement is not included the below cases will also be executed
    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;
    
    //Optional
        default:
        console.log("Wrong input")

}

//Another example - SWITCH CASE CAN ALSO ACCEPT STRING COMBINATIOS AND EXPRESSIONS, but not integers

let name = 'Murali';

//Switch case can accept strings, numbers and also boolean values
switch(name + ' dharan') 
{
    case 'Murali dharan':
        console.log("Sunday");
        break;
    //If break statement is not included the below cases will also be executed
    case 2:
        console.log("Monday");
        break;

    case 3:
        console.log("Tuesday");
        break;
    
    //Optional
        default:
        console.log("Wrong input")

}


//*******************************WHILE LOOP**********************************************
let n=0;
while(n<=6)
{
    if (n%2 == 0)
    {
        console.log(n)
    }
    n++;
}

//*********************************DO WHILE************************************************************ */


let m = 0;

do{
    if (m%2 == 0)
    {
        console.log(m)
    }
    m++;

}while(m<=6);

//As you see here the condition is checked only after the do loop is done- 
//which means atleast once the statement has been executed

