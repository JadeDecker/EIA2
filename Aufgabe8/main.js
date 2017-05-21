/*Aufgabe7
Name: Jade
Matrikelnummer: 254887
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und nicht diktiert.

In einer Datei weil es in mehreren nicht funktioniert hat muss nochmal scahuen woran das liegt!
*/
var L8_Classes;
(function (L8_Classes) {
    let crc2;
    let canvas;
    let bienen = [];
    let honigbienen = [];
    let nektarspender = [];
    class BieneOO {
        constructor() {
            this.x = 20;
            this.y = 180;
            this.speed = (Math.random() * (1.5 - 0.5)) + 0.5;
            this.blume = Math.floor(Math.random() * (5 - 1)) + 1;
        }
        update() {
            this.move();
            this.draw();
        }
        draw() {
            crc2.fillStyle = "#FFD700";
            crc2.beginPath();
            crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x - 0.5, this.y - 2.5, 1, 5);
        }
        move() {
            this.x += (Math.random() * 4 - 2.4) * this.speed;
            if (this.x <= 0) {
                this.x = canvas.width;
            }
            this.y += (Math.random() * 4 - 2) * this.speed;
            if (this.y > canvas.height) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = canvas.height;
            }
        }
    }
    L8_Classes.BieneOO = BieneOO;
    class honigbiene extends BieneOO {
        move() {
            console.log(this.x + " " + Math.round(nektarspender[this.blume].x));
            console.log(this.y + " " + Math.round(nektarspender[this.blume].y));
            if (this.x == Math.round(nektarspender[this.blume].x) && this.y == Math.round(nektarspender[this.blume].y - 40)) {
                this.blume = Math.floor(Math.random() * (5 - 1)) + 1;
                ;
            }
            if (this.x < Math.round(nektarspender[this.blume].x)) {
                this.x++;
            }
            if (this.x > Math.round(nektarspender[this.blume].x)) {
                this.x--;
            }
            if (this.y < Math.round(nektarspender[this.blume].y - 40)) {
                this.y++;
            }
            if (this.y > Math.round(nektarspender[this.blume].y - 40)) {
                this.y--;
            }
        }
    }
    L8_Classes.honigbiene = honigbiene;
    class Blume {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    L8_Classes.Blume = Blume;
    class Blume1OO extends Blume {
        constructor(_x, _y) {
            super(_x, _y);
            this.draw();
        }
        draw() {
            crc2.fillStyle = "#32Cd32";
            crc2.fillRect(this.x, this.y - 30, 2, 30);
            crc2.fillStyle = "red";
            crc2.beginPath();
            crc2.arc(this.x, this.y - 35, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x - 5, this.y - 35);
            crc2.lineTo(this.x - 5, this.y - 45);
            crc2.lineTo(this.x + 5, this.y - 35);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x - 5, this.y - 35);
            crc2.lineTo(this.x - 0, this.y - 45);
            crc2.lineTo(this.x + 5, this.y - 35);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.moveTo(this.x - 5, this.y - 35);
            crc2.lineTo(this.x + 5, this.y - 45);
            crc2.lineTo(this.x + 5, this.y - 35);
            crc2.closePath();
            crc2.fill();
        }
    }
    L8_Classes.Blume1OO = Blume1OO;
    class Blume2OO extends Blume {
        constructor(_x, _y) {
            super(_x, _y);
            this.draw();
        }
        draw() {
            crc2.fillStyle = "#32Cd32";
            crc2.fillRect(this.x, this.y - 30, 2, 30);
            crc2.fillStyle = "blue";
            crc2.beginPath();
            crc2.arc(this.x, this.y - 42, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x + 7, this.y - 35, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x - 7, this.y - 35, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.beginPath();
            crc2.arc(this.x, this.y - 28, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.arc(this.x, this.y - 35, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
    L8_Classes.Blume2OO = Blume2OO;
    class Blume3OO extends Blume {
        constructor(_x, _y) {
            super(_x, _y);
            this.draw();
        }
        draw() {
            crc2.fillStyle = "#32Cd32";
            crc2.fillRect(this.x, this.y - 30, 2, 30);
            crc2.fillStyle = "yellow";
            crc2.beginPath();
            crc2.arc(this.x, this.y - 35, 10, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "brown";
            crc2.beginPath();
            crc2.arc(this.x, this.y - 35, 5, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
        }
    }
    L8_Classes.Blume3OO = Blume3OO;
    window.addEventListener("load", init);
    let x = [];
    let y = [];
    let n = 10;
    let imgData;
    function click() {
        let i = bienen.length;
        bienen[i] = new BieneOO();
    }
    function init(_event) {
        console.log("Hallo");
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", click);
        console.log(canvas);
        crc2 = canvas.getContext("2d");
        console.log(crc2);
        crc2.fillStyle = "#00ff00";
        crc2.fillRect(0, 125, 300, 125);
        crc2.fillStyle = "#87CEEB ";
        crc2.fillRect(0, 0, 300, 125);
        crc2.moveTo(0, 125);
        crc2.stroke();
        drawBerg(150, 125, "#a9a9a9", "#C0C0C0");
        drawWolke(100, 40, "#E0FFFF");
        for (let i = 0; i < 5; i++) {
            nektarspender[i] = new Blume1OO((Math.random() * (300 - 150)) + 150, (Math.random() * (200 - 125)) + 125);
        }
        for (var _i = 0; _i < 3; _i++) {
            new Blume1OO((Math.random() * (150 - 30)) + 30, (Math.random() * (200 - 125)) + 125);
            new Blume2OO((Math.random() * (150 - 30)) + 30, (Math.random() * (200 - 125)) + 125);
            new Blume3OO((Math.random() * (150 - 30)) + 30, (Math.random() * (200 - 125)) + 125);
        }
        drawBaum(0, 200, "#A0522D ", "#8B4513");
        drawBaumkrone(20, 70, "#32Cd32");
        drawBienenkorb(10, 200, "#B8860B", "#FFD700");
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        for (let i = 0; i < n; i++) {
            bienen[i] = new BieneOO();
            honigbienen[i] = new honigbiene();
        }
        window.setTimeout(animate, 20);
    }
    function drawBerg(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x + 40, _y - 50);
        crc2.lineTo(_x + 100, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 60, _y);
        crc2.lineTo(_x + 120, _y - 75);
        crc2.lineTo(_x + 175, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 45, _y);
        crc2.lineTo(_x + 80, _y - 75);
        crc2.lineTo(_x + 125, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawBaum(_x, _y, _strokeColor, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x, _y);
        crc2.lineTo(_x, _y - 125);
        crc2.lineTo(_x + 35, _y - 125);
        crc2.lineTo(_x + 35, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
    }
    function drawWolke(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 30, _y + 15, 25, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y + 20, 25, 0, 2 * Math.PI);
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 35, _y + 8, 28, 0, 2 * Math.PI);
        crc2.fill();
    }
    function drawBaumkrone(_x, _y, _fillColor) {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y, 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function drawBienenkorb(_x, _y, _strokeColor, _fillColor) {
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.fillRect(_x + 0, _y - 10, 20, 10);
        crc2.beginPath();
        crc2.arc(_x + 10, _y - 10, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function animate() {
        crc2.putImageData(imgData, 0, 0);
        for (let i = 0; i < bienen.length; i++) {
            let s = bienen[i];
            s.update();
        }
        for (let i = 0; i < honigbienen.length; i++) {
            let s = honigbienen[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=main.js.map