var zin = prompt("geef een zin")
var woorden =  0;
var aantal = 0;
console.log(zin.length)

for (var i =0; i <= zin.length;i++){
    if (zin.charAt(i) == ' '){
        woorden++;
    }
}
aantal = zin.length / woorden;
console.log(woorden+1);