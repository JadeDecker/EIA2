namespace StudiVZ {
    interface StudentData {
        matrikel: number;
        name: string;
        vorname: string;
        alter: number;
        geschlecht: boolean;
        kommentar: string;
    }
    var students: StudentData[] = [];
    var stop: boolean = false;

    while (!stop) {
        var action: string = prompt("Datensatz anlegen (n), abfragen(a) oder Programm beenden (s)\nn,a oder s eingeben");

        switch (action) {
            case "n":
            case "N":
                var input: string = prompt("Eingabe (jeweils mit Komma getrennt) von\nMatrikelnummer, Name, Vorname, Alter, Geschlecht (0 oder 1) und Kommentar");
                alert(saveData(input));
                break;
            case "a":
            case "A":
                var matrikel: number = parseInt(prompt("Eingabe Matrikelnummer"));
                alert(queryData(matrikel));
                break;
            case "s":
            case "S":
                stop = true;
        }
    }

    function saveData(_input: string): string {
        let data: string[] = input.split(",");
        let s: StudentData = { matrikel: 0, name: "name", vorname: "vorname", alter: 0, geschlecht: Boolean(0), kommentar: "kommentar" };
        s.matrikel = parseInt(data[0]);
        s.name = data[1];
        s.vorname = data[2];
        s.alter = parseInt(data[3]);
        s.geschlecht = Boolean(data[4]);
        s.kommentar = data[5];
        students[s.matrikel] = s;
        if (s.geschlecht) {
            var geschlecht: string = "maennlich";
        } else {
            var geschlecht: string = "weiblich";
        }
        return "Name: " + s.vorname + " " + s.name + " (" + s.matrikel + ")\nAlter: " + s.alter + "\nGeschlecht: " + geschlecht + "\n\n" + s.kommentar;
    }
    function queryData(_matrikel: number): string {
        let s: StudentData = students[matrikel];
        if (s.geschlecht) {
            var geschlecht: string = "maennlich";
        } else {
            var geschlecht: string = "weiblich";
        }
        return "Name: " + s.vorname + " " + s.name + " (" + s.matrikel + ")\nAlter: " + s.alter + "\nGeschlecht: " + geschlecht + "\n\n" + s.kommentar;
    }
}