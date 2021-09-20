
var lijst = [];


do {
    var vraagGetal = parseInt(prompt("geef een getal"));

    if (vraagGetal > 0){
        lijst.push(vraagGetal);
    }
}while (vraagGetal > 0){
 console.log(lijst);
}