/*schrijf een programma dat de tafels van vermenigvuldiging afdrukt.
voorbeeld:
je vraagt aan de gebruiker de tafel : 1
je vraagt aan de gebruiker het eindgetal : 12
weergave:(onderstaande weergave dient exact op deze manier op het scherm te verschijnen)

 */
var tafel = parseInt(prompt("welke tafel wil je berekenen?"));
var eindgetal = parseInt(prompt("welk eindgetal?"));
var i = 1
var totaal = 0;
var afdrukOpScherm = "";
var mijntest= 1;

// tafel x (teller)1 tot eindgetal

    for (i; i <= eindgetal; i++) {

        totaal = tafel * i;
        if(mijntest<= 3){
            afdrukOpScherm = afdrukOpScherm + tafel + "x" + i + "=" + totaal+",";

        }else{
            console.log(afdrukOpScherm);
            afdrukOpScherm="";
            mijntest=0;
            i--;
        }


        mijntest++;


    }
console.log(afdrukOpScherm.substr(0,23))





