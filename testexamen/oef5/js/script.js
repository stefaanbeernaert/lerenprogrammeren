var reeksEen = [];
var reeksTwee = [];
var eindGetal = parseInt(prompt("geef een getal"));
var i = 1;
var x = i
var dubbel = i
var maalVier = 1
var maalTwee = 1
// reeks een is *2 reeks 2 is *4 *2
reeksEen.push(i)
reeksTwee.push(i)
for(i;i < eindGetal;i++){
    dubbel = dubbel * 2
    reeksEen.push(dubbel)
    maalVier =  x * 4
    maalTwee =  maalVier * 2
    reeksTwee.push(maalVier,maalTwee)

}

console.log(reeksEen)
console.log(reeksTwee)