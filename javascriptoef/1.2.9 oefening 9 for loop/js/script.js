/*
schrijf een prog die alle priemgetallen in een rij afdrukt
vraag een eindgetal
alle getallen gelijk aan en lager dan het eindgetal dienen te worden getest
zijn ze een priemgetal of niet
een priemgetal is enkel deelbaar door 1 en zichzelf
 */
var eindgetal = parseInt(prompt("geef een getal?"));
//console.log(eindgetal);
var i = eindgetal;
//console.log(i);
for(i;i > 0;i--){

    if(i < 1){
        console.log(i + " geen priemgetal");
    }else if(eindgetal %i === 1){
        console.log(i + " geen priemgetal");
    }else{
        console.log(i + " priemgetal")
    }
}
