var keuze;
var keuze2;
var keuze3;

var fris = 0;
var bier = 0;
var wijn = 0; 

var bitterballen8 = 0;
var bitterballen16 = 0;

//drinken prijzen
const prijs1 = 2.00;
const prijs2 = 2.60;
const prijs3 = 1.80;

//bitterballen prijzen
const prijs4 = 4.00;
const prijs5 = 8.00;

alert("Fles bier =€2,00 \nGlas wijn =€2,60 \nBlik frisdrank =€1,80 \n\nBitterballen: \n8st =€4,00 \n16st =€8,00");

function keuzemenu () { 
    
    while (keuze != "stop") { 
        keuze = prompt("Type hier uw keuze: bier, wijn of fris");

        if (keuze == "bier") {
            keuze = parseInt(prompt("Het aantal flessen bier?"));
            bier=bier+keuze;

            console.log(bier)

        } else if(keuze == "wijn") {
            keuze = parseInt(prompt("Het aantal glazen wijn?"));
            wijn=wijn+keuze; 

            console.log(wijn)
        } 

        if (keuze == "fris") {
            keuze = parseInt(prompt("Het aantal blikken frisdrank?"));
            fris=fris+keuze;

            console.log(fris);
        }
    }
}

function KeuzeBitterballen () {

    while (keuze2 != "stop") {
        keuze2 = prompt("Bitterballen \nType hier uw keuze: 8 of 16 \nKies: 8st = 1, 16st = 2");

        if (keuze2 == "1") {
            keuze2 = 1;
            bitterballen8+=keuze2;

            console.log(bitterballen8);

        } else if(keuze2 == "2") {
            keuze2 = 1;
            bitterballen16+=keuze2;

            console.log(bitterballen16);
        }
    }
}

function kassabon () {

    if (bier > 0) {
        document.write("Aantal glazen bier: " + bier + "<br>")
    }

    if (wijn > 0) {
        document.write("Aantal glazen wijn: " + wijn + "<br>")
    }

    if (fris > 0) {
        document.write("Aantal blikken fris: " + fris + "<br>")
    }

    document.write("<br>")

    if (bitterballen8 > 0) {
        document.write("Aantal bitterballen 8st: " + bitterballen8 + "<br>");
    }

    if (bitterballen16 > 0) {
        document.write("Aantal bitterballen 16st: " + bitterballen16 + "<br>");
    }

    document.write("-------")
    document.write("<br>")

    if (bier > 0) {
        document.write("Prijs bier: &euro;" + bier * prijs1 + "<br>");
    } 

    if (wijn > 0) {
        document.write("Prijs wijn: &euro;" + wijn * prijs2 + "<br>");
    } 

    if (fris > 0 ) {
        document.write("Prijs fris: &euro;" + fris * prijs3 + "<br>");
    } 

    document.write("<br>")

    if (bitterballen8 > 0) {
        document.write("Prijs bitterballen 8st: &euro;" + bitterballen8 * prijs4 + "<br>");
    }

    if (bitterballen16 > 0) {
        document.write("Prijs bitterballen 16st: &euro;" + bitterballen16 * prijs5 + "<br>");
    }

    document.write("<br>");

    var totaal = (bier * prijs1) + (wijn * prijs2) + (fris * prijs3) + (bitterballen8 * prijs4) + (bitterballen16 * prijs5);

    document.write("-----------------------------<br>")

    document.write("Totaal: &euro;" + totaal)
}

while (keuze3 != "stop") {
    
    keuze3 = prompt("Drinken of eten?");

    if (keuze3 == "drinken") {
        keuzemenu()
    } else if(keuze3 == "eten") {
        KeuzeBitterballen()
    }

}

kassabon()