///<reference path="main.ts"/>
var L8_Classes;
(function (L8_Classes) {
    class Blume2OO extends L8_Classes.Blume {
        constructor(_x, _y) {
            super(_x, _y);
            this.draw();
        }
        draw() {
            L8_Classes.crc2.fillStyle = "#32Cd32";
            L8_Classes.crc2.fillRect(this.x, this.y - 30, 2, 30);
            L8_Classes.crc2.fillStyle = "blue";
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x, this.y - 42, 5, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x + 7, this.y - 35, 5, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x - 7, this.y - 35, 5, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x, this.y - 28, 5, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.fillStyle = "yellow";
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x, this.y - 35, 5, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
        }
    }
    L8_Classes.Blume2OO = Blume2OO;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=blumen2.js.map