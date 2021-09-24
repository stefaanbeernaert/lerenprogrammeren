var zin = prompt("geef een zin?")
var box = []
var printer = ""
box.push(zin);
console.log(box);

for (var i = zin.length - 1;i >= 0;i--){
    printer = printer + zin[i]

}
console.log(printer)