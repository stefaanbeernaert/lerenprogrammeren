/*schrijf een programma die je alle potentiele mogelijke combinaties geeft in een 2-decimale
vorm uitgeprint met een komma ertussen tot en met 99.
voorbeeld van output 00, 01 ,02 */

var komma = ",";
//telt + 1
var i = 0;
var tekst = "";

for (i; i < 100; i++) {

    if (i < 10) {
        tekst = tekst + "0" + i + ",";

    } else {
        tekst = tekst + i + ",";
    }
}
console.log(tekst.substr(0, tekst.length - 1));




