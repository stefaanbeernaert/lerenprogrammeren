/*i = 1;
x = 0;
var ster = "";


for (i;i <= 5;i++){
    for(var x = 0;x < i;x++){
    document.getElementById("demo").innerHTML=(ster + "*");
}
}
*/
let string = "";
for (let i = 1; i <= 5; i++) {
    for (let x = 0; x < i; x++) {
        string = string + "*";
    }
    string = string + "<br>";
}
document.getElementById("demo").innerHTML=(string);
