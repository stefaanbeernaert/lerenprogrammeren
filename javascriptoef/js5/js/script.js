//Schrijf een programma waarin je aan de gebruiker vraagt hoeveel getallen hij wil ingeven.
// Schrijf vervolgens het totaal van alle ingegeven getallen op het scherm. De totale som van x getallen is x.
// Voorbeeld: Hoeveel getallen?: 3 Geef getal 1 in: 4 Geef getal 2 in: 3 Geef getal 3 in: 2
// De totale som van 3 getallen is 9.
var i = 1
var totaal = 0
while (i < 4){
    var getal = parseInt(prompt("geef een getal"));
    totaal = (getal + totaal);
    i++
}
console.log("De totale som is :" + " " + totaal);

// juiste oplossing
var aantal;//declareren variabele
var teller = 1;
var getal;
var resultaat = 0;
//variabele opvullen en vragen aan de gebruiker
aantal = prompt("Hoeveel getallen?");

//for(teller;teller< aantal;teller aangepast){
   // "geef getal in"
}
for(teller;teller<=aantal;teller++){
    getal = parseInt(prompt("geef getal" + teller + "in"));
    resultaat = resultaat + getal;
}
console.log("De totale som van" + " " + aantal + "getallen is " + resultaat);
//while voorbeeld

while(teller<=aantal){
    getal = parseInt(prompt("geef getal" + teller + "in"));
    resultaat = resultaat + getal;
    teller++;
}
console.log("De totale som van" + " " + aantal + "getallen is " + resultaat);