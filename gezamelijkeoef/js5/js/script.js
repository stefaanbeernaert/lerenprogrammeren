//meervoudige selectie
// var onderwijs = 'syntra'
var onderwijs = prompt("Keuze onderwijs");
switch(onderwijs){
    case 'vdab':
        console.log('cursus is gegeven door VDAB');
            break;
    case 'syntra':
        console.log('cursus is gegeven door Syntra');
        break;
    default:
        console.log('gegeven door een andere instelling');
}
//enkelvoudige selectie shorthand
/*
var x = 1;
if(x == 1){
    //code
}else{
    //code
}
// ander voorbeeld shorthand
(x==1) ? //code : //code

//meevoudige
x==1 ? x>2 ? // code : // : //code*/
