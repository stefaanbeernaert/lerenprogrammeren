// LOGISCHE OPERATOREN
/*
* && = AND operator
* || = OR operator
* ! = tegenovergestelde
* == 2 waarden gelijk behalve datatype
* * === 2 waarden gelijk met datatype
* != 2 waarden niet gelijk met datatype
* !== 2 waarden niet gelijk met datype
* >
* <
* >=
* <=
*
 */

var grootsteKleinste = getal1 > getal2;
console.log(grootsteKleinste);
var getal1 = 5;
var getal2 = 6;
var grootsteKleinste = getal1 < getal2;
console.log(grootsteKleinste);

var getal3 = "5"
var getal4 = 5; // number (interger)

var gelijk = getal3 != getal4;
console.log(gelijk);
var gelijk = getal3 !== getal4;
console.log(gelijk);

//SELECTIE
/*
var getal5 = parseInt(prompt("geef een getal in"));
var getal6 = parseInt(prompt("geef een tweede getal in"));

if(getal5>getal6){
    console.log(getal5,"is groter dan", getal6);
}else if(getal5 === getal6){
    console.log(getal5,"is gelijk aan", getal6);

}else{
    console.log(getal6, "is kleiner dan", getal5);
}*/

    var naam = prompt("Geef uw naam in:");
    var  beroep = prompt("geef u beroep in, maak een keuze: arbeider of bediende");


    if(beroep.toUpperCase() == "ARBEIDER"){
        console.log("Het beroep van", naam,"is",beroep.toLowerCase());
    }else{
        console.log("Het beroep van", naam, "is",beroep);
    }