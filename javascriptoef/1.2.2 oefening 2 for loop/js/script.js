//getest en werkt
// sterretjes 1 - 5 in for loop
var string = "";
for (let i = 1; i <= 5; i++) {
    for (let x = 0; x < i; x++) {
        string = string + "*";
    }
    string = string + "<br>";
}
document.getElementById("demo").innerHTML=(string);
