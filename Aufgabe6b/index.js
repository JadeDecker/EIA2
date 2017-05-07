var StudiVZ;
(function (StudiVZ) {
    var students = [];
    var stop = false;
    while (!stop) {
        var action = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");
        switch (action) {
            case "n":
            case "N":
                var input = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }
    function saveData(_input) {
        let data = input.split(",");
        let s = { matrikel: 0, name: "name", vorname: "vorname", alter: 0, geschlecht: Boolean(0), kommentar: "kommentar" };
        s.matrikel = parseInt(data[0]);
        s.name = data[1];
        s.vorname = data[2];
        s.alter = parseInt(data[3]);
        s.geschlecht = Boolean(data[4]);
        s.kommentar = data[5];
        students[s.matrikel] = s;
        if (s.geschlecht) {
            var geschlecht = "maennlich";
        }
        else {
            var geschlecht = "weiblich";
        }
        return "Name: " + s.vorname + " " + s.name + " (" + s.matrikel + ")\nAlter: " + s.alter + "\nGeschlecht: " + geschlecht + "\n\n" + s.kommentar;
    }
    function queryData(_matrikel) {
        let s = students[matrikel];
        if (s.geschlecht) {
            var geschlecht = "maennlich";
        }
        else {
            var geschlecht = "weiblich";
        }
        return "Name: " + s.vorname + " " + s.name + " (" + s.matrikel + ")\nAlter: " + s.alter + "\nGeschlecht: " + geschlecht + "\n\n" + s.kommentar;
    }
})(StudiVZ || (StudiVZ = {}));
//# sourceMappingURL=index.js.map