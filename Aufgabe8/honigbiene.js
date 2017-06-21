///<reference path="main.ts"/>
var L8_Classes;
(function (L8_Classes) {
    class honigbiene extends L8_Classes.BieneOO {
        move() {
            console.log(this.x + " " + Math.round(L8_Classes.nektarspender[this.blume].x));
            console.log(this.y + " " + Math.round(L8_Classes.nektarspender[this.blume].y));
            if (this.x == Math.round(L8_Classes.nektarspender[this.blume].x) && this.y == Math.round(L8_Classes.nektarspender[this.blume].y - 40)) {
                this.blume = Math.floor(Math.random() * (5 - 1)) + 1;
                ;
            }
            if (this.x < Math.round(L8_Classes.nektarspender[this.blume].x)) {
                this.x++;
            }
            if (this.x > Math.round(L8_Classes.nektarspender[this.blume].x)) {
                this.x--;
            }
            if (this.y < Math.round(L8_Classes.nektarspender[this.blume].y - 40)) {
                this.y++;
            }
            if (this.y > Math.round(L8_Classes.nektarspender[this.blume].y - 40)) {
                this.y--;
            }
        }
    }
    L8_Classes.honigbiene = honigbiene;
})(L8_Classes || (L8_Classes = {}));
//# sourceMappingURL=honigbiene.js.map