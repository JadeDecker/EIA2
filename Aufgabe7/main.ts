/*Aufgabe7
Name: Jade
Matrikelnummer: 254887
Datum: 11.05.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und nicht diktiert.*/
namespace L7_Classes {
    let crc2: CanvasRenderingContext2D;
    let canvas: HTMLCanvasElement;
    let bienen: BieneOO[] = [];
    let nektarspender: Blume1OO[] = [];
    export class BieneOO {
        x: number;
        y: number;
        speed: number;
        
        constructor () {
            this.x = 20;
            this.y = 180;
            this.speed = (Math.random() * (1.5 - 0.5)) + 0.5;
        }
        
        update(): void {
            this.move();
            this.draw();
        }
        
        draw(): void {
            crc2.fillStyle = "#FFD700";
            crc2.beginPath();
            crc2.arc(this.x, this.y , 3, 0, 2 * Math.PI);
            crc2.closePath();
            crc2.fill();
            crc2.fillStyle = "#000000";
            crc2.fillRect(this.x - 0.5, this.y - 2.5, 1, 5);
        }
        
        move(): void {
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
    
    export class Blume1OO {
        x: number;
        y: number;
        
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.draw();
        }
        
        draw(): void {
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
            crc2.lineTo(this.x  + 5, this.y - 45);
            crc2.lineTo(this.x + 5, this.y - 35);
            crc2.closePath();
            crc2.fill();
        }
    }
    
    export class Blume2OO {
        x: number;
        y: number;
        
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.draw();
        }
        
        draw(): void {
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
    
    export class Blume3OO {
        x: number;
        y: number;
        
        constructor(_x: number, _y: number) {
            this.x = _x;
            this.y = _y;
            this.draw();
        }
        
        draw(): void {
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
    
    window.addEventListener("load", init);
    let x: number[] = [];
    let y: number[] = [];
    let n: number = 10;
    let imgData: ImageData;

    function init(_event: Event): void {
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
        for (let i: number = 0; i < 30; i++) {
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
        for (let i: number = 0; i < n; i++) {
            let s: BieneOO = bienen[i];
            s.update();
        }

        window.setTimeout(animate, 20);
    }
 }