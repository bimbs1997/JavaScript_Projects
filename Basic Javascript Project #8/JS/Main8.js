function full_Sentence() {              //defines the concat function
    var part_1 = "You are ";
    var part_2 = "always special ";
    var part_3 = "and be the ";
    var part_4 = "most beautiful creature ";
    var part_5 = "HAVE A WONDERFUL DAY!"
    var whole_sentence = part_1.concat(part_2, part_3, part_4, part_5);
    document.getElementById("Concatenate").innerHTML = whole_sentence;
}

function slice_Method() {               //defines the slice method
    var Sentence = "Patience is virtue so keep calm and relax.";
    var Section = Sentence.slice(0,42);
    document.getElementById("Slice").innerHTML = Section;
}

function string_Method() {              // defines the toString method
    var X = 420;
    document.getElementById("Numbers_to_string").innerHTML = X.toString();
}

function precision_Method() {           // defines the toPrecision method
    var X = 6111997.32419964323;
    document.getElementById("Precision").innerHTML = X.toPrecision(14)
}