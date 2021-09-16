/*schrijf een programma die een karakter telt in een tekenreeks(string).
tip maak hierbij gebruik van een built-in functie.*/

var tekst = prompt("geef een zin");
var reeks = prompt("geef een karakter");
var teller = 0;
var i = tekst.length;

//console.log(i)
//substr(start,length)(mogelijk ook .search en slice)
for(i;i > 0;i--){
    if (tekst.substr(i-1,1) === reeks) {

       teller = teller + 1;

    }else{
        console.log("geen gevonden karakters");


}}
console.log(`${reeks} is ${teller} gevonden.`)





