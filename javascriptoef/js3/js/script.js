var naam = prompt("wat is jouw naam?");
var leeftijd = parseInt(prompt("wat is jouw leeftijd?"));
var vakjes;


if (leeftijd => 16) {
    if (leeftijd => 18) {
        vakjes = prompt("geef aantal vakjes?");
        if (vakjes == 12) {
            console.log("20€")
        } else if (vakjes == 10) {
            console.log("18€")
        } else if (vakjes == 8) {
            console.log("16€")
        } else if (vakjes == 6) {
            console.log("12€")
        } else if (vakjes == 4) {
            console.log("8€")
        } else if (vakjes == 2) {
            console.log("4€")
        } else if (vakjes < 0) {
            console.log("getal mag niet onder 0 zijn")
        } else {
            alert("geen correct aantal vakjes ingegeven");
        }

    } else {
        console.log(naam, "mits toestemming van uw ouders");
    }
} else {
    console.log(naam, "u mag niet deelnemen");
}