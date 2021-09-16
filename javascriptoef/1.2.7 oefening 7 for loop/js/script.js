/*
Schrijf een programma waar je de gebruiker naar een getal vraagt.
controleer ieder getal tussen 0 en het ingegeven getal en druk de even getallen
af op het scherm.gebruik built in functie.
 */

// vragen naar een getal
var getal = parseInt(prompt("geef een getal?"));
//console.log(getal);
// loop teller i
var i = 0;

for (i;i < getal + 1;i++)
    //console.log(i);
    if(i % 2){
        console.log(i + 1)
    }else{

    }

