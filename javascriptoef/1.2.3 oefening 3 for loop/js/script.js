/*
var resultaat = "";
var naarpagina= "";

for (var i = 1;i <= 5;i++){
  {
        resultaat += "*";
        console.log(resultaat);
        naarpagina = naarpagina + resultaat + "<br>";
    }
   // resultaat += "<br>";
}
//document.getElementById("demo").innerHTML=(resultaat);
for (var j = 4;j >= 1;j--) {
   resultaat = resultaat.substr(0,j);
   console.log(resultaat);
    naarpagina = naarpagina + resultaat + "<br>";;
}
document.getElementById("demo").innerHTML=(naarpagina);

/*
var sterren = "******";
console.log(sterren.length);
*/




var aantallijnen = parseInt(prompt("geef een even aantal lijnen in :"));
var helft = aantallijnen / 2;
var ster = "*";
var resultaat = "";
var i = 1;

for (i;i <= helft; i++){
    resultaat = resultaat + ster;
    console.log(resultaat);
}
for (i=helft;i >= 1;i--){
    resultaat = resultaat.substr(0,i);
    console.log(resultaat);
}