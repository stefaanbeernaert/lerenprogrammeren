//DECLARATIE VARIABELEN

var cursisten = ["Tom", "Tim", "Bart", "Els"];
var cursusJaar = [2017, 2018, 2019];
/* voorbeeld van een andere manier voor array te declareren
var cursusJaar = new Array(2017, 2018, 2019);

 */
console.log(cursisten);
console.log(cursisten[2]);
console.log(cursisten.length);

console.log(cursusJaar);
console.log(cursusJaar[2]);
console.log(cursusJaar.length);

// cursist toevoegen
cursisten.push("Marieke");
console.log(cursisten);

// pushen vooraan toevoegen
cursisten.unshift("thomas");
console.log(cursisten);
// de laatste verwijderen
cursisten.pop();
console.log(cursisten);
// eerste verwijderen
cursisten.shift();
console.log(cursisten)
//waar staat hij welke plaats
console.log(cursisten.indexOf("Bart"));
// om bart te verwijderen
console.log(cursisten.splice(2,1));
console.log(cursisten);
// for each loops en arrays
for(var i = 0;i <= cursisten.length;i++){
    console.log(cursisten[i]);


}
var i = 0;
while(i <= cursisten.length){
    console.log(cursisten[i]);
    i++;
}
for(var i = 0;i <= cursisten.length -1;i++){
    document.querySelector("#cursistentest").innerHTML += "<li>" + cursisten[i] + "</li>";


//foreach telt enkel maar per 1 stap geen teller nodig
 //   cursisten.forEach(element => console.log(element));
}
// loop ; continue and break;//continue is vervanger van else

var data = ["Tim", "Tom", 1980, 1973,"designer","developer"];

for(i=0;i<= data.length;i++){
    if(typeof data[i] === "string") continue;
    console.log(data[i]);
}
var data = ["Tim", "Tom", 1980, 1973,"designer","developer"];

for(i=0;i<= data.length;i++) {
    if (typeof data[i] !== "string") break;
    console.log(data[i]);
}