
    //eerste keer console test(1 regel tekst)
    /*meerdere regels
    * regel2
    * regel3*/
    //var voorNaam = "Stefaan";
    //variabelen
    var voorNaam = prompt( "Geef je voornaam in:");
    var familieNaam = "Beernaert";
    var geboorteJaar = 1988; // number
    var functie = "student";
    var gehuwd = true; // true = 1, 0 = false
    var niets = 5;
    //code
    console.log(voorNaam);
    console.log(typeof(voorNaam)); // string

    console.log(familieNaam);
    console.log(typeof(familieNaam)); // string

    console.log(geboorteJaar);
    console.log(typeof(geboorteJaar));

    console.log(functie);
    console.log(typeof (functie));

    console.log(typeof(gehuwd));

    console.log(niets);
    console.log(typeof(niets));

    console.log(voorNaam + " " + familieNaam + " is een " + functie);
    console.log(voorNaam, familieNaam ,"is een" ,functie);
    function sprekendeMuis(){
        alert("pieppiep");
    }
  if(confirm("Ben je zeker dat je dit wil verwijderen?")){
      sprekendeMuis();
  };

