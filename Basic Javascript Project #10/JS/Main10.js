alert(document.getElementById("p1").innerHTML);     //defines the Async attribute

function car_selection() {                      //defines the function of while loop
    var cars = ["BMW", "Ferrari", "Bugatti", "Ford"];
    var i = 0;
    var text = "";
    while (cars[i]) {
      text += cars[i] + "<br>";
      i++;
    }
    document.getElementById("car_selection").innerHTML = text;
}

function count_down() {                     //defines the function of whileloop
var text = "";
var i = 0;
while (i < 10) {
  text += "<br>The number is " + i;
  i++;
}
document.getElementById("count_down").innerHTML = text;
}
                                                                                                                                    
var Instruments = ["Guitar", "Drums", "Piano", "Bass", "Violin", "Trumpet", "Flute"];       //defines the function of forloop
var Content = "";           
var Y;
function for_Loop() {
    for (Y = 0; Y < Instruments.length; Y++) {
        Content+= Instruments[Y] + "<br>";
    }
    document.getElementById("List_of_Instruments").innerHTML = Content;
}

function dog_mood() {           //defines the function that use an array
    var dog_moods = [];
    dog_moods[1] = "sleeping";
    dog_moods[2] = "playing";
    dog_moods[3] = "purring";
    document.getElementById("Dog").innerHTML = "In this picture, the cat is " + dog_moods[2] + "";
}

let car = {                     // an object using the let keyword 
    make: "Ferrari ",
    model: "LaFerrari ",
    year: "2016 ",
    color: "red ",
    description : function() {
        return "The car is " + this.year + this.color + this.make + this.model;      
    }
};
document.getElementById("Car_Object").innerHTML = car.description();