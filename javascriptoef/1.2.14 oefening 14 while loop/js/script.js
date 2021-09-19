/* schrijf een programma die een aantal getallen inleest en eindigt wanneer de gebruiker een negatief getal ingeeft.
schrijf daarna de som van de getallen op het scherm */

printer = "";
resultaat = 0;

do {
     var getal = parseInt(prompt("geef een getal?"));
     if(getal > 0) {
         resultaat = resultaat + getal;
     }
}while(getal > 0){
    console.log(resultaat);
}