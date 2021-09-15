//FOR LOOP
/*for(teller;conditie;wijziging (teller)){
    code
}*/
/*
var i = 1;
for(i;i<=10;i++){
    console.log(i);
}
i = 1;
var x = 0;
for(i;i<=10;x){
    console.log(x);
    x= x + 2;
    i++;

}
*/
/*
 for(var i=10;i>=1;i--){
     console.log(i);
 }
 */
var text = "";
var i = 0;
 while(i < 10){
     text += "<br>De nummers zijn " +i;
     i++;

 }
// console.log(text);
document.getElementById("demo").innerHTML =text;