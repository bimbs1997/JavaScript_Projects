var X = 420;                    //defines the global variable 
function add_numbers_1() {
    document.write(0 + X + "<br>");
}
function add_numbers_2() {      
    document.write(X + 100);
}
add_numbers_1();
add_numbers_2();

function add_numbers_3() {              //defines the local variable
    var Y = 10;
    document.write(0 + Y + "<br>");
}
function add_numbers_4() {
    document.write(Y + 100);
    }
add_numbers_3();
add_numbers_4();


function add_numbers_1() {      // defines the  a function with an error in it and 
    var X = 420                 // use the console.log() method
    console.log(15 + X);
}
function add_numbers_2() {
    console.log(X + 100);
}
add_numbers_1();
add_numbers_2();

function time_function() {              //defines the time_function 
    var Time = new Date().getHours();
    var Reply;
    if (Time < 12 == Time > 0) {
        Reply ="It is morning time!";
    }
    else if (Time > 12 == Time < 18) {
        Reply = "It is afternoon time";
    }
    else {
        Reply = "It is evening time.";
    }
    document.getElementById("Time_of_day").innerHTML = Reply;
}