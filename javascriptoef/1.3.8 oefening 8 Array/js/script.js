var aantal = parseInt(prompt("Hoeveel Namen wenst u in te geven"));
var namen = []


//test foreach loop met array
// namen.forEach(element => console.log(element));

for (var i = 1;i <= aantal;i++){
   var naam = prompt("geef een naam");
   namen.push(naam);
}
/* built in functie die gebruiken we niet!
namen.sort();
*/

//eerste loop 0 tot einde array
for(var x = 0;x < namen.length;x++){
    // 2de loop loopt ook van 0 tot einde array - 1 en x
    for (var j = 0;j < namen.length - x - 1;j++){
        // 4              6 dan is 4 kleiner dan 6 en zal geswitch worden
        if (namen[j +1] < namen[j]){
            [namen[j + 1],namen[j]] = [namen[j],namen[j + 1]]
        }
    }
}

console.log(namen);