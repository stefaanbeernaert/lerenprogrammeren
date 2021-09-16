 /*
var getal = parseInt(prompt("geef een getal?"));
var resultaat = 0;
//teller 1
var i = getal - 1;

for(i;i > 1;i--){
   resultaat = getal * i;
   resultaat * (i -1);
   */
 // juist oplossing //

 var getal = parseInt(prompt("geef een getal in"));
var fac = 1;

for(i=1; i <= getal;i++){
fac = fac * i;
}
console.log(fac);
