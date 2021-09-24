var getal1 = parseInt(prompt("geef je eerste getal"));
var getal2 = parseInt(prompt("geef een 2de getal"));
var x = 1;
var breukTeller;
var ggd = 0;
var kgv = 0;

breukTeller = getal1 * getal2;
for(x; x <= getal1;x++){
    if(getal1%x == 0 && getal2%x == 0){
        ggd = x;
    }
}
kgv = breukTeller/ggd;
console.log("kgv");