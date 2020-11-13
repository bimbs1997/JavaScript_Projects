function dictionary() {                     //defines the function 
    var Animal = {                          //defines the variable    
        Species:"Snake",
        Color:"Green",
        Breed:"Viper",
        Age:2,
        Sound:"Rattling"
    };
    delete Animal.Breed;                    //defines the statement the removes the key value    
    document.getElementById("dictionary").innerHTML = Animal.Breed;     
}