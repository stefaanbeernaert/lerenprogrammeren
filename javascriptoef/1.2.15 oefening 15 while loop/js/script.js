var hoeveelGetallen = parseInt(prompt("Hoeveel getallen wenst u in te geven?"));
var printer = "";
var getalDoos = 0;
var som = 0;
var i = 0
var x = 1
var gemiddelde;

while (i < hoeveelGetallen) {
// x zorgt voor een correcte nummer weergave
// i is de teller tot aan de hoeveelheid getallen
    getalDoos = parseInt(prompt("geef getal " + x))
    som = som + getalDoos;
    getalDoos = 0;
    i++;
    x++;

}
//tofixed rond het getal af tot 2 getallen na de komma
gemiddelde = som / i;
console.log("De totale som van " + i + " getallen = " + som);
console.log("Het gemiddelde van " + i + " getallen = " + gemiddelde.toFixed(2));