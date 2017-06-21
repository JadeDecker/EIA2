///<reference path="main.ts"/>
var L8_Classes;
(function (L8_Classes) {
    class Blume1OO extends L8_Classes.Blume {
        constructor(_x, _y) {
            super(_x, _y);
            this.draw();
        }
        draw() {
            L8_Classes.crc2.fillStyle = "#32Cd32";
            L8_Classes.crc2.fillRect(this.x, this.y - 30, 2, 30);
            L8_Classes.crc2.fillStyle = "red";
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.arc(this.x, this.y - 35, 5, 0, 2 * Math.PI);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.moveTo(this.x - 5, this.y - 35);
            L8_Classes.crc2.lineTo(this.x - 5, this.y - 45);
            L8_Classes.crc2.lineTo(this.x + 5, this.y - 35);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.moveTo(this.x - 5, this.y - 35);
            L8_Classes.crc2.lineTo(this.x - 0, this.y - 45);
            L8_Classes.crc2.lineTo(this.x + 5, this.y - 35);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
            L8_Classes.crc2.beginPath();
            L8_Classes.crc2.moveTo(this.x - 5, this.y - 35);
            L8_Classes.crc2.lineTo(this.x + 5, this.y - 45);
            L8_Classes.crc2.lineTo(this.x + 5, this.y - 35);
            L8_Classes.crc2.closePath();
            L8_Classes.crc2.fill();
        }
    }
    L8_Classes.Blume1OO = Blume1OO;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=blumen1.js.map