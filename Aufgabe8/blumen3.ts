///<reference path="main.ts"/>
namespace L8_Classes {
     export class Blume3OO  extends Blume {
        constructor(_x: number, _y: number) {
            super(_x, _y);
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
    }