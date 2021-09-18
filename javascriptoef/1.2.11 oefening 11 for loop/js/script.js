/* schrijf een programma die de getallenreeks van fibonacci opsomt.
vraag aan de gebruiker hoeveel getallen er dienen te worden weergeven.
voorbeeld:
0 1 1 2 3 5 8 13 21 */


var number = (parseInt(prompt("geef een nummer?")));
var n1 = 0;
var n2 = 1;
var totaal;
var i = 1;
var tekstdoos = "";
for (i;i < number;i++){
    tekstdoos = tekstdoos + n1 + " ";

    totaal = n1 + n2;
    n1 = n2;
    n2 = totaal;
}
console.log(tekstdoos);