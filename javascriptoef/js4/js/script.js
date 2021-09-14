var geboorteJaar = parseInt(prompt("wat is jouw geboortejaar?"));
var jaar  = parseInt(prompt("wat is het huidige jaar?"));


if ((jaar - geboorteJaar) => 16) {
    if ((jaar - geboorteJaar) => 18) {
        console.log("Vanaf nu mag, kan en beslis ik alles, binnen de wettelijke grenzen.");
         }else if((jaar - geboorteJaar) < 0){
            console.log("getal mag niet negatief zijn");

}else{
        console.log("gelukkig heb ik mijn ouders die alles regelen");
    }}


