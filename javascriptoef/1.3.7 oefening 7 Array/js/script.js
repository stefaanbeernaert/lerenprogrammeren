var getalMix = [];
var getalMixTwee = [];
var derde = [];
var i = 0;
var somEen = 0;
var somTwee = 0;
var som = 0;
for (i;i < 11;i++){
    getalMix.push(Math.floor(Math.random() * 50));
    getalMixTwee.push(Math.floor(Math.random() * 50));
        if(getalMix[i]% 2 === 0){
            derde.push(getalMix[i])
           // console.log(getalMix[i]);
        }if(getalMixTwee[i]% 2 === 0){
            derde.push(getalMixTwee[i]);
            //console.log(getalMixTwee[i]);
        }if(getalMix[i]%2 === 1) {

        somEen = somEen + getalMix[i];
    }if(getalMixTwee[i]%2 === 1) {
        // console.log("g1 = " + getalMix[i])
        somTwee = somTwee + getalMixTwee[i];
        //  console.log("g2 ="+getalMixTwee[i])

        //  console.log("som" + som)

    }

}
som = somEen + somTwee;
console.log(getalMix);
console.log(getalMixTwee);
console.log(derde);
console.log("De som van de oneven getallen zijn = " + som);