window.alert(Math.random() + 11061997); //defines the random alert pop 


var X = 223                         // definens the increment             
X++;
document.write(X)

var X = 1997                          //defines the decrement
X--;
document.write(X)



function addition() {                       //defines the addtion function
    var addition = 5+2;
    document.getElementById("Math").innerHTML="5+2= "+ addition;
}

function multiplication() {                 //defines the multiplication function
    var simple_math = 7 * 3;
    document.getElementById("Math").innerHTML = "7 x 3 = "+ simple_math; 
}

function division() {                         //defines the division function
    var simple_math = 21 /2;
    document.getElementById("Math").innerHTML = "21 / 2 = " + simple_math;
}

function subtraction() {                //defines the suctraction function
    var subtraction = 10.5 - 2;
    document.getElementById("Math").innerHTML = "10.5 - 2 = " +subtraction;
}

