/*
schrijf een programma die de volgende reeks horizontaal schrijft
voorbeeld:
vraag een getal aan de gebruiker:
wanneer dit getal bijvoorbeeld 100 is dan is de volgende reeks de uitkomst:
1,2,4,8,16,32,64
wanneer dit getal bijvoorbeeld 130 is dan is de volgende reeks de uitkomst:
1 2 4 8 16 32 64 128
tip gebruik leave functie
 */
var getal = parseInt(prompt("geef een getal?"));
i = 1;
printer = "";
totaal = 1;

for(i;i <= getal;i++){
    printer = printer + totaal + ", ";
    totaal = i * 2;

}
console.log(printer.substring(0,printer.length-2));