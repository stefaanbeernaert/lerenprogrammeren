var lijstEen = [];
var lijstTwee = [];
var totaalLijst = [];
var i = 0;
var som = 0;

for(i;i < 11;i++){
    lijstEen.push(i);
    lijstTwee.push(i);

    som = lijstEen[i] + lijstTwee[i];
    totaalLijst.push(i + "+" + i + "=" + som);
}
console.log(lijstEen)
console.log(lijstTwee)
console.log(totaalLijst)