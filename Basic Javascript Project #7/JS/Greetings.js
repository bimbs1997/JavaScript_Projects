function get_Date() {       //defines the if statement
    if (new Date().getHours() < 18) {
        document.getElementById("greeting").innerHTML = "Have A Great Day!";
    }
}

