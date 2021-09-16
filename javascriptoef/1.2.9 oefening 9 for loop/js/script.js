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

    if(i / eindgetal === 1 && eindgetal / eindgetal){
        console.log(eindgetal + " is een priemgetal");
    }else {
        console.log(i + " is geen priemgetal");


    }
}