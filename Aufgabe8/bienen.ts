///<reference path="main.ts"/>

namespace L8_Classes {
    export class BieneOO {
        x: number;
        y: number;
        speed: number;
        blume: number;
        
        constructor () {
            this.x = 20;
            this.y = 180;
            this.speed = (Math.random() * (1.5 - 0.5)) + 0.5;
            this.blume = Math.floor(Math.random() * (5 - 1)) + 1;
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
}