var klasLijst = [];
var teller = parseInt(prompt("Hoeveel namen wenst u in te geven?"));

for (var i = 0;i < teller;i++){
    var naam = prompt("geef uw naam in?");
    klasLijst.push(naam);
}
console.log(klasLijst)