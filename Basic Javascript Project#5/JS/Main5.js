document.write("green" + 1+43 );   // defines the expression combining a string and a number

document.write(10 == 10);   //defines the double equal sign

A = "Jazz";
B = "Rock";
document.write(A === B);        //defines the triple equal sign

document.write(30 > 10);                //defines the true boolean value
document.write(420 < 320);              //defines the false boolean value

document.write(10 > 4 && 20 > 5);       //defines the AND Operator
document.write(10 > 45 || 5 > 20);      //defines the OR Operator

function not_function() {               //defines the not Operator and function
    document.getElementById("Not").innerHTML = !(5 > 10); 
}