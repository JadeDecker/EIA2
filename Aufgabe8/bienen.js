///<reference path="main.ts"/>
var L8_Classes;
(function (L8_Classes) {
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
            L8_Classes.crc2.fillStyle = "#FFD700";
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x, this.y, 3, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.fillStyle = "#000000";
            L8_Classes.crc2.fillRect(this.x - 0.5, this.y - 2.5, 1, 5);
        }
        move() {
            this.x += (Math.random() * 4 - 2.4) * this.speed;
            if (this.x <= 0) {
                this.x = L8_Classes.crc2.canvas.width;
            }
            this.y += (Math.random() * 4 - 2) * this.speed;
            if (this.y > L8_Classes.crc2.canvas.height) {
                this.y = 0;
            }
            if (this.y < 0) {
                this.y = L8_Classes.crc2.canvas.height;
            }
        }
    }
    L8_Classes.BieneOO = BieneOO;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=bienen.js.map