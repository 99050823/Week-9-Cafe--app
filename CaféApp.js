var keuze;
var keuze2;
var keuze3;

var fris = 0;
var bier = 0;
var wijn = 0; 

var bitterballen8 = 0;
var bitterballen16 = 0;

//drinken
const prijs1 = 2.00;
const prijs2 = 2.60;
const prijs3 = 1.80;

//bitterballen 
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
        keuze2 = prompt("Bitterballen \nType hier uw keuze: 8 of 16");

        if (keuze2 == "8") {
            keuze2 = 1;
            bitterballen8+=keuze2;

            console.log(bitterballen8);

        } else if(keuze2 == "16") {
            keuze2 = 1;
            bitterballen16+=keuze2;

            console.log(bitterballen16);
        }
    }
}

function kassabon () {

    document.write("Aantal glazen bier: " + bier + "<br>")
    document.write("Aantal glazen wijn: " + wijn + "<br>")
    document.write("Aantal glazen fris: " + fris + "<br>")

    document.write("<br>")

    document.write("Aantal bitterballen 8st: " + bitterballen8 + "<br>");
    document.write("Aantal bitterballen 16st: " + bitterballen16 + "<br>");

    document.write("<br>")

    document.write("prijs bier: &euro;" + bier * prijs1 + "<br>");
    document.write("prijs wijn: &euro;" + wijn * prijs2 + "<br>");
    document.write("prijs fris: &euro;" + fris * prijs3 + "<br>");

    document.write("Prijs bitterballen 8st: &euro;" + bitterballen8 * prijs4 + "<br>");
    document.write("Prijs bitterballen 16st: &euro;" + bitterballen16 * prijs5 + "<br>");

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