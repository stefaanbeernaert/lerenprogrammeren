
var string = "";

for (var i = 1;i <= 5;i++){
    for(var x = 0;x < i;x++) {
        string += "*";
    }
    string += "<br>";
}
document.getElementById("demo").innerHTML=(string);


