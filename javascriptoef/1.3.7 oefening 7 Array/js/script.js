var getalMix = [];
var getalMixTwee = [];
var derde = [];
var i = 0;
var somEen = 0;
var somTwee = 0;

for (i;i < 11;i++){
    getalMix.push(Math.floor(Math.random() * 50));
    getalMixTwee.push(Math.floor(Math.random() * 50));
        if(getalMix[i]% 2 === 0){
            derde.push(getalMix[i])
        }else if(getalMixTwee[i]% 2 === 0){
            derde.push(getalMixTwee[i]);
        }else{
            somEen = somEen + getalMix[i];
            somTwee = somTwee + getalMixTwee[i];
           som = somEen + somTwee;

        }
}
console.log(getalMix);
console.log(getalMixTwee);
console.log(derde);
console.log(som);