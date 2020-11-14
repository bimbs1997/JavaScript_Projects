function count_function() {                 //defines the nested functions
    document.getElementById("Counting").innerHTML = Count();
    function Count() {
        var Starting_point = 22;
        function Plus_one() {Starting_point += 1;}
        Plus_one();
        return Starting_point;
    }
}