var alfabet = [];
var alfabetHigh = [];
var teller = 123;
var i = 97;
var letter = "";
var x = 0;
// zonder uppercase is -32 op de asii tabel
for(i;i < teller;i++){
    letter = String.fromCharCode(i);
    alfabet.push(letter);
    letter = ""
    letter = String.fromCharCode(i-32);
    alfabetHigh.push(letter);
}
console.log(alfabet);
console.log(alfabetHigh);
