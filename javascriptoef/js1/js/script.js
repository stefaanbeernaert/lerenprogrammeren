/*oefening 1
*/

var naam = (prompt("wat is je naam?"));
var leeftijd = parseInt(prompt("wat is je leeftijd? "));

/*if (leeftijd => 16) {
    if (leeftijd => 18) {
        console.log(naam, "u mag deelnemen");
    }else{
        console.log(naam, "mits toestemming van uw ouders");
    }
}else{
    console.log(naam,"u mag niet deelnemen");
}
*/

if(leeftijd => 18){
 console.log(naam,"u mag deelnemen");
}else if(leeftijd < 16){
    console.log(naam, "geen deelname");
}else{
    console.log(naam, "u mag deelnemen mits toestemming");
}