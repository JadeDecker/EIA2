/*Aufgabe5
Name: Jade
Matrikelnummer: 254887
Datum: 27.04.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und nicht diktiert.*/
var L4_Canvas;
(function (L4_Canvas) {
    window.addEventListener("load", init);
    let crc2;
    let squares = [];
    let x = [];
    let y = [];
    let n = 10;
    let imgData;
    let canvas;
    //var imgData = crc2.getImageData(0 , 0 , 0, 0);
    function init(_event) {
        console.log("Hallo");
        canvas = document.getElementsByTagName("canvas")[0];
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
        for (var _i = 0; _i < 30; _i++) {
            blume1((Math.random() * (300 - 150)) + 150, (Math.random() * (200 - 125)) + 125);
        }
        for (var _i = 0; _i < 3; _i++) {
            blume1((Math.random() * (150 - 30)) + 30, (Math.random() * (200 - 125)) + 125);
            blume2((Math.random() * (150 - 30)) + 30, (Math.random() * (200 - 125)) + 125);
            blume3((Math.random() * (150 - 30)) + 30, (Math.random() * (200 - 125)) + 125);
        }
        drawBaum(0, 200, "#A0522D ", "#8B4513");
        drawBaumkrone(20, 70, "#32Cd32");
        drawBienenkorb(10, 200, "#B8860B", "#FFD700");
        imgData = crc2.getImageData(0, 0, canvas.width, canvas.height);
        console.log(imgData);
        //        for (let i: number = 0; i < n; i++) {
        //            x[i] = 20;
        //            y[i] = 180;
        //            drawBiene(x[i], y[i]);
        //        }
        for (let i = 0; i < n; i++) {
            let s = { x: 0, y: 0, size: 1, art: 1, speed: 1 };
            s.x = 20;
            s.y = 180;
            s.size = (Math.random() * (1.5 - 0.5)) + 0.5;
            s.art = Math.round((Math.random() * (2 - 1)) + 1);
            s.speed = (Math.random() * (1.5 - 0.5)) + 0.5;
            squares[i] = s;
            drawBiene(s.x, s.y);
        }
        //crc2.putImageData(imgData , 0 , 0 );
        //drawBiene( 10, 195);
        window.setTimeout(animate, 20);
        /*crc2.putImageData(imgData , 10 , 70 );*/
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
    function blume1(_x, _y) {
        crc2.fillStyle = "#32Cd32";
        crc2.fillRect(_x, _y - 30, 2, 30);
        crc2.fillStyle = "red";
        crc2.beginPath();
        crc2.arc(_x, _y - 35, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x - 5, _y - 35);
        crc2.lineTo(_x - 5, _y - 45);
        crc2.lineTo(_x + 5, _y - 35);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x - 5, _y - 35);
        crc2.lineTo(_x - 0, _y - 45);
        crc2.lineTo(_x + 5, _y - 35);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.moveTo(_x - 5, _y - 35);
        crc2.lineTo(_x + 5, _y - 45);
        crc2.lineTo(_x + 5, _y - 35);
        crc2.closePath();
        crc2.fill();
    }
    function blume2(_x, _y) {
        crc2.fillStyle = "#32Cd32";
        crc2.fillRect(_x, _y - 30, 2, 30);
        crc2.fillStyle = "blue";
        crc2.beginPath();
        crc2.arc(_x, _y - 42, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x + 7, _y - 35, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x - 7, _y - 35, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.beginPath();
        crc2.arc(_x, _y - 28, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "yellow";
        crc2.beginPath();
        crc2.arc(_x, _y - 35, 5, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
    }
    function blume3(_x, _y) {
        crc2.fillStyle = "#32Cd32";
        crc2.fillRect(_x, _y - 30, 2, 30);
        crc2.fillStyle = "yellow";
        crc2.beginPath();
        crc2.arc(_x, _y - 35, 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "brown";
        crc2.beginPath();
        crc2.arc(_x, _y - 35, 5, 0, 2 * Math.PI);
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
        //console.log("Animate called");
        //console.log(imgData);
        crc2.putImageData(imgData, 0, 0);
        //crc2.fillRect(0, 0, crc2.canvas.width, crc2.canvas.height);
        for (let i = 0; i < n; i++) {
            let s = squares[i];
            s.x += (Math.random() * 4 - 2.4) * s.speed;
            if (s.x <= 0) {
                s.x = canvas.width;
            }
            s.y += (Math.random() * 4 - 2) * s.speed;
            if (s.y > canvas.height) {
                s.y = 0;
            }
            if (s.y < 0) {
                s.y = canvas.height;
            }
            drawBiene(s.x, s.y);
        }
        window.setTimeout(animate, 20);
    }
    function drawBiene(_x, _y) {
        crc2.fillStyle = "#FFD700";
        crc2.beginPath();
        crc2.arc(_x, _y, 3, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
        crc2.fillStyle = "#000000";
        crc2.fillRect(_x - 0.5, _y - 2.5, 1, 5);
    }
})(L4_Canvas || (L4_Canvas = {}));
//# sourceMappingURL=canvas2.js.map