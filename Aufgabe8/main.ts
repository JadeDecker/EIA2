/*Aufgabe7
Name: Jade
Matrikelnummer: 254887
Datum: 21.05.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und nicht diktiert.

In einer Datei weil es in mehreren nicht funktioniert hat muss nochmal scahuen woran das liegt!
*/


///<reference path="bienen.ts"/>
namespace L8_Classes {
    export let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let bienen: BieneOO[] = [];
    let honigbienen: BieneOO[] = [];
    export let nektarspender: Blume1OO[] = [];
    
    
    export class Blume {
        x: number;
        y: number;
        
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
        }
    }
    
    window.addEventListener("load", init);
    let x: number[] = [];
    let y: number[] = [];
    let n: number = 10;
    let imgData: ImageData;
    function click(): void {
        let i: number = bienen.length;
        bienen[i] = new BieneOO();
        
    }
    function init(_event: Event): void {
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
        for (let i: number = 0; i < 5; i++) {
            nektarspender[i] = new Blume1OO((Math.random() * (300 - 150)) + 150, (Math.random() * (200 - 125)) + 125);
        }
        for (var _i = 0; _i < 3; _i++) {
            new Blume1OO((Math.random() * (150 - 30)) + 30, (Math.random() * (200 - 125)) + 125);
            new Blume2OO((Math.random() * (150 - 30)) + 30, (Math.random() * (200 - 125)) + 125);
            new Blume3OO((Math.random() * (150 - 30)) + 30, (Math.random() * (200 - 125)) + 125);
        }
        drawBaum(0, 200, "#A0522D ", "#8B4513" );
        drawBaumkrone(20, 70, "#32Cd32");
        drawBienenkorb(10, 200, "#B8860B", "#FFD700");

        imgData = crc2.getImageData(0 , 0 , canvas.width , canvas.height );
        console.log(imgData);
        for (let i: number = 0; i < n; i++) {
            bienen[i] = new BieneOO();
            honigbienen[i] = new honigbiene();
        }
        window.setTimeout(animate, 20);
    }

    function drawBerg(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x , _y );
        crc2.lineTo(_x + 40, _y - 50);
        crc2.lineTo(_x + 100, _y );
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 60, _y );
        crc2.lineTo(_x + 120, _y - 75);
        crc2.lineTo(_x + 175, _y );
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
        
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x + 45, _y );
        crc2.lineTo(_x + 80, _y - 75);
        crc2.lineTo(_x + 125, _y );
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
       
    }
    function drawBaum(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x , _y );
        crc2.lineTo(_x , _y - 125);
        crc2.lineTo(_x + 35 , _y - 125);
        crc2.lineTo(_x + 35, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
  }  
    function drawWolke(_x: number, _y: number,  _fillColor: string): void {
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
    function drawBaumkrone(_x: number, _y: number, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.arc(_x, _y , 50, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
       
  }

    function drawBienenkorb(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.fillRect(_x+0, _y-10, 20, 10);
        
        crc2.beginPath();
        crc2.arc(_x+10, _y-10 , 10, 0, 2 * Math.PI);
        crc2.closePath();
        crc2.fill();
       
    }
    function animate(): void {
        crc2.putImageData(imgData, 0, 0);
        for (let i: number = 0; i < bienen.length; i++) {
            let s: BieneOO = bienen[i];
            s.update();
        }
        for (let i: number = 0; i < honigbienen.length; i++) {
            let s: honigbiene = honigbienen[i];
            s.update();
        }
        window.setTimeout(animate, 20);
    }
 }