/*
schrijf een  programma die ervoor zorgt dat je ieder derde getal in een reeks 2x weergeeft
en ieder reeel 10de getal in een reeks weglaat maar wel een spatie schrijft.
de gebruiker geef het eindgetal in.
voorbeeld van de output:
1.2.3.3.4.5.6.6.7.8.9. .11.12
 */

var eindGetal = parseInt(prompt("geef een eindgetal?"));
var i = 1;
var printer = "";
var x = 0;
var j = 0;
while(i <= eindGetal){
    x++;
    j++;
    if (j === 10){
        j = 0;
        printer = printer + " ,"
    }else if(x === 3){
        printer = printer + i +"," + i + ",";
        x = 0;
    }else
        printer = printer + i + ",";
        i++;
}
console.log(printer.substr(0,printer.length-3));