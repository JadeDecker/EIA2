/*Aufgabe7
Name: Jade
Matrikelnummer: 254887
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und nicht diktiert.

In einer Datei weil es in mehreren nicht funktioniert hat muss nochmal scahuen woran das liegt!
*/
///<reference path="bienen.ts"/>
var L8_Classes;
(function (L8_Classes) {
    let canvas;
    let bienen = [];
    let honigbienen = [];
    L8_Classes.nektarspender = [];
    class Blume {
        constructor(_x, _y) {
            this.x = _x;
            this.y = _y;
        }
    }
    L8_Classes.Blume = Blume;
    window.addEventListener("load", init);
    let x = [];
    let y = [];
    let n = 10;
    let imgData;
    function click() {
        let i = bienen.length;
        bienen[i] = new L8_Classes.BieneOO();
    }
    function init(_event) {
        console.log("Hallo");
        canvas = document.getElementsByTagName("canvas")[0];
        canvas.addEventListener("click", click);
        console.log(canvas);
        L8_Classes.crc2 = canvas.getContext("2d");
        console.log(L8_Classes.crc2);
        L8_Classes.crc2.fillStyle = "#00ff00";
        L8_Classes.crc2.fillRect(0, 125, 300, 125);
        L8_Classes.crc2.fillStyle = "#87CEEB ";
        L8_Classes.crc2.fillRect(0, 0, 300, 125);
        L8_Classes.crc2.moveTo(0, 125);
        L8_Classes.crc2.stroke();
        drawBerg(150, 125, "#a9a9a9", "#C0C0C0");
        drawWolke(100, 40, "#E0FFFF");
        for (let i = 0; i < 5; i++) {
            L8_Classes.nektarspender[i] = new L8_Classes.Blume1OO((Math.random() * (300 - 150)) + 150, (Math.random() * (200 - 125)) + 125);
        }
        for (var _i = 0; _i < 3; _i++) {
            new L8_Classes.Blume1OO((Math.random() * (150 - 30)) + 30, (Math.random() * (200 - 125)) + 125);
            new L8_Classes.Blume2OO((Math.random() * (150 - 30)) + 30, (Math.random() * (200 - 125)) + 125);
            new L8_Classes.Blume3OO((Math.random() * (150 - 30)) + 30, (Math.random() * (200 - 125)) + 125);
        }
        drawBaum(0, 200, "#A0522D ", "#8B4513");
        drawBaumkrone(20, 70, "#32Cd32");
        drawBienenkorb(10, 200, "#B8860B", "#FFD700");
        imgData = L8_Classes.crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        for (let i = 0; i < n; i++) {
            bienen[i] = new L8_Classes.BieneOO();
            honigbienen[i] = new L8_Classes.honigbiene();
        }
        window.setTimeout(animate, 20);
    }
    function drawBerg(_x, _y, _strokeColor, _fillColor) {
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.moveTo(_x, _y);
        L8_Classes.crc2.lineTo(_x + 40, _y - 50);
        L8_Classes.crc2.lineTo(_x + 100, _y);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.moveTo(_x + 60, _y);
        L8_Classes.crc2.lineTo(_x + 120, _y - 75);
        L8_Classes.crc2.lineTo(_x + 175, _y);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.moveTo(_x + 45, _y);
        L8_Classes.crc2.lineTo(_x + 80, _y - 75);
        L8_Classes.crc2.lineTo(_x + 125, _y);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
    }
    function drawBaum(_x, _y, _strokeColor, _fillColor) {
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.moveTo(_x, _y);
        L8_Classes.crc2.lineTo(_x, _y - 125);
        L8_Classes.crc2.lineTo(_x + 35, _y - 125);
        L8_Classes.crc2.lineTo(_x + 35, _y);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
        L8_Classes.crc2.stroke();
    }
    function drawWolke(_x, _y, _fillColor) {
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.arc(_x, _y, 30, 0, 2 * Math.PI);
        L8_Classes.crc2.fill();
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(_x - 30, _y + 15, 25, 0, 2 * Math.PI);
        L8_Classes.crc2.fill();
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(_x, _y + 20, 25, 0, 2 * Math.PI);
        L8_Classes.crc2.fill();
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(_x + 35, _y + 8, 28, 0, 2 * Math.PI);
        L8_Classes.crc2.fill();
    }
    function drawBaumkrone(_x, _y, _fillColor) {
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.arc(_x, _y, 50, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
    }
    function drawBienenkorb(_x, _y, _strokeColor, _fillColor) {
        L8_Classes.crc2.fillStyle = _fillColor;
        L8_Classes.crc2.strokeStyle = _strokeColor;
        L8_Classes.crc2.fillRect(_x + 0, _y - 10, 20, 10);
        L8_Classes.crc2.beginPath();
        L8_Classes.crc2.arc(_x + 10, _y - 10, 10, 0, 2 * Math.PI);
        L8_Classes.crc2.closePath();
        L8_Classes.crc2.fill();
    }
    function animate() {
        L8_Classes.crc2.putImageData(imgData, 0, 0);
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