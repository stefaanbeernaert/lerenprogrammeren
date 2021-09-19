var getal = parseInt(prompt("Geef een getal om te berekenen?"));
fac = getal
var weerGave = getal;

while(getal > 2){
    getal = getal - 1;
    fac = fac * getal;
}
console.log("De faculteit van " + weerGave + " is " + fac);