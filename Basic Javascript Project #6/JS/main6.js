function Verify_function() {
    var Age, Can_verify;
    Age = document.getElementById("Age").value;
    Can_verify = (Age < 20 ) ? "You are too young to ":"You are old enough";
    document.getElementById("verify").innerHTML = Can_verify + " to enter this site THANK YOU!";
}

function vehicle (Make, Model, Year, Color) {
    this.vehicle_make = Make;
    this.vehicle_model = Model;
    this.vehicle_year = Year;
    this.vehicle_color = Color;
}

var Blake = new vehicle ("Ferrari", "Italia", 2020, "Red");
var Emerson = new vehicle ("Nissan", "370z", 2018, "Matte Black");
var Shiela = new vehicle ("Nissan", "GT-R", 2020, "Glossy Silver");
function owner_function() {
    document.getElementById("ownership").innerHTML =
    "Shiela drives a " + Shiela.vehicle_color + "-colored" + Shiela.vehicle_model +
    " manufactured in " + Shiela.vehicle_year;
}

