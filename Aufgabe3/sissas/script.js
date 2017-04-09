/*
Aufgabe3a
Name: Jade
Matrikelnummer: 254887
Datum: 09.04.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und nicht diktiert.*/
function schachbrett () {
    var n = 64;
    var z = 1;
    for (i = 1; i <= n; i++) {
        var zeile = Math.floor((i-1) / 8)+1;
        if (zeile%2 === 0) {
            if (i%2 === 0) {
                var background = "#000";
                var color = "#fff";
            } else {
                var background = "#fff";
                var color = "#000";
            }
        } else {
            if (i%2 === 0) {
                var background = "#fff";
                var color = "#000";
            } else {
                var background = "#000";
                var color = "#fff";
            }
        }
        document.body.innerHTML += '<div id="' + i + '" style="background: ' + background + '; color: ' + color + '; border: 1px solid black;" onclick="markieren(' + i + ')">' + z + '</div>';
        var z = z*2;
    }
}

function markieren (id) {
    var element = document.getElementById(id);
    if(element.style.border == "1px solid black") {
        element.style.border = "1px solid red";
    } else {
        element.style.border = "1px solid black";
    }
    rechnen();
}

function maus (e) {
    document.getElementById("maus-div").style.left = e.clientX+20+"px";
    document.getElementById("maus-div").style.top = e.clientY+20+"px";
}

function rechnen () {
    var summe = 0;
    var n = 64;
    for (i = 1; i <= n; i++) {
        var element = document.getElementById(i);
        if(element.style.border == "1px solid red") {
            var summe = summe + parseInt(element.innerHTML);
        }
    }
    document.getElementById("maus-div").innerHTML = summe +"<br>"+summe.toString(16);;
}

document.onmousemove = maus;