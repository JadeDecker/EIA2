/*
Aufgabe3b
Name: Jade
Matrikelnummer: 254887
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und nicht diktiert.*/
var karten_zu = [
    "Karo 7",
    "Karo 8",
    "Karo 9",
    "Karo 10",
    "Karo Bube",
    "Karo Dame",
    "Karo K&ouml;nig",
    "Karo Ass",
    "Pik 7",
    "Pik 8",
    "Pik 9",
    "Pik 10",
    "Pik Bube",
    "Pik Dame",
    "Pik K&ouml;nig",
    "Pik Ass",
    "Kreuz 7",
    "Kreuz 8",
    "Kreuz 9",
    "Kreuz 10",
    "Kreuz Bube",
    "Kreuz Dame",
    "Kreuz K&ouml;nig",
    "Kreuz Ass",
    "Herz 7",
    "Herz 8",
    "Herz 9",
    "Herz 10",
    "Herz Bube",
    "Herz Dame",
    "Herz K&ouml;nig",
    "Herz Ass"
];

var hand = new Array;

var karten_durch = new Array;

function karte_ziehen () {
    if (hand.length >= 5) {
        alert("Du hast schon 5 Karten auf der Hand!");
    } else {
        var max = karten_zu.length;
        var x = Math.round(Math.random() * max);
        var text = karten_zu[x];
        hand.push(text);
        karten_zu.splice(x, 1);
        zeigen();
    }
}

function zeigen () {
    document.getElementById("hand").innerHTML = "";
    for (i = 0; i < hand.length; i++) {
        document.getElementById("hand").innerHTML += '<div class="karte" onclick="ablegen('+i+');">'+hand[i].replace(" ", "<br>")+'</div>';
    }
    if (karten_zu.length == 0) {
        document.getElementById("deck").style.display = "none";
    }
    if (karten_durch.length != 0) {
        document.getElementById("deck2").style.display = "block";
        var id = karten_durch.length-1;
        document.getElementById("deck2").innerHTML = karten_durch[id].replace(" ", "<br>");
    }
}

function ablegen (id) {
    var text = hand[id];
    karten_durch.push(text);
    hand.splice(id, 1);
    zeigen();
}