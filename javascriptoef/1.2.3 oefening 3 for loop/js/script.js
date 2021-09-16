
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



