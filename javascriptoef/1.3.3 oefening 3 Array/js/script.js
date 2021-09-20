var lijstEen = [];
var lijstTwee = [];
var totaalLijst = [];
var i = 0;
var som = 0;
// je kan ook 50 vervangen door een variable met prompt zodat gebruiker kan kiezen

for(i;i < 12;i++){
    lijstEen.push(Math.floor(Math.random() * 50));
    lijstTwee.push(Math.floor(Math.random() * 50));

    som = lijstEen[i] + lijstTwee[i];
    totaalLijst.push(lijstEen[i] + "+" + lijstTwee[i] + "=" + som);

}
console.log(lijstEen);
console.log(lijstTwee);
console.log(totaalLijst);