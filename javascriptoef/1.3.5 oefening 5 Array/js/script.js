var alfabet = []
var teller = 122;
var i = 97;
var letter = "";

for(i;i < teller;i++){
    letter = letter.fromCharCode(i);
    alfabet.push(letter);
    letter = ""

}
console.log(alfabet);