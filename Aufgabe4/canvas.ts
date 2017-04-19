/*Aufgabe4
Name: Jade
Matrikelnummer: 254887
Datum: 13.04.2017
Hiermit versichere ich, dass ich diesen Code selbst geschrieben habe.
Er wurde nicht kopiert und nicht diktiert.*/
namespace L4_Canvas {
    window.addEventListener("load", init);
    let crc2: CanvasRenderingContext2D;

    function init(_event: Event): void {
        console.log("Hallo");
        let canvas: HTMLCanvasElement;
        canvas = document.getElementsByTagName("canvas")[0];
        console.log(canvas);

        crc2 = canvas.getContext("2d");
        console.log(crc2);

        crc2.fillStyle = "#00ff00";
        crc2.fillRect(0, 125, 300, 125);
        
        crc2.fillStyle = "#87CEEB ";
        crc2.fillRect(0, 0, 300, 125);

        crc2.moveTo(0, 125);
        crc2.lineTo(300, 125);
        crc2.stroke();

        drawBerg(150, 125, "#a9a9a9", "#C0C0C0");
        drawBaum(0, 200, "#A0522D ", "#8B4513" );
        drawBaumkrone(40, 125, "#00f00", "#00f00" );
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
        //draw a triangle around the coordinates (_x, _y);
    }
    function drawBaum(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x , _y );
        crc2.lineTo(_x , _y - 125);
        crc2.lineTo(_x + 40 , _y - 125);
        crc2.lineTo(_x + 40, _y);
        crc2.closePath();
        crc2.fill();
        crc2.stroke();
  }  
    function drawBaumkrone(_x: number, _y: number, _strokeColor: string, _fillColor: string): void {
        crc2.beginPath();
        crc2.fillStyle = _fillColor;
        crc2.strokeStyle = _strokeColor;
        crc2.moveTo(_x , _y );

        crc2.closePath();
        crc2.fill();
        crc2.stroke();
  }  
}