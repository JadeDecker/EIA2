///<reference path="main.ts"/>
var L8_Classes;
(function (L8_Classes) {
    class Blume3OO extends L8_Classes.Blume {
        constructor(_x, _y) {
            super(_x, _y);
            this.draw();
        }
        draw() {
            L8_Classes.crc2.fillStyle = "#32Cd32";
            L8_Classes.crc2.fillRect(this.x, this.y - 30, 2, 30);
            L8_Classes.crc2.fillStyle = "yellow";
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x, this.y - 35, 10, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.fillStyle = "brown";
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x, this.y - 35, 5, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
        }
    }
    L8_Classes.Blume3OO = Blume3OO;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=blumen3.js.map