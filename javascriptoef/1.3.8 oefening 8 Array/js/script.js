var aantal = parseInt(prompt("Hoeveel Namen wenst u in te geven"));
var namen = []


//test foreach loop met array
// namen.forEach(element => console.log(element));

for (var i = 1;i <= aantal;i++){
   var naam = prompt("geef een naam");
   namen.push(naam);
}
namen.sort();


console.log(namen);