/*
Aufgabe2
Name: Jade
Matrikelnummer: 254887
Datum: 30.03.2017
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
        document.body.innerHTML += '<div style="background: ' + background + '; color: ' + color +'">'+z+'</div>';
        var z = z*2;
    }
}