var alfabet = [];
var alfabetHigh = [];
var teller = 123;
var i = 97;
var letter = "";
var x = 0;

for(i;i < teller;i++){
    letter = String.fromCharCode(i);
    alfabet.push(letter);
    letter = ""

}
console.log(alfabet);

for (x; x < 26;x++){

    alfabetHigh.push(alfabet[x].toUpperCase());
}
console.log(alfabetHigh);
