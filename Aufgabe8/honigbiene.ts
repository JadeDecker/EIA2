///<reference path="main.ts"/>
namespace L8_Classes {

     export class honigbiene extends BieneOO {
        
        move(): void {
            console.log(this.x+" "+Math.round(nektarspender[this.blume].x));
            console.log(this.y+" "+Math.round(nektarspender[this.blume].y));

            if (this.x == Math.round(nektarspender[this.blume].x) && this.y == Math.round(nektarspender[this.blume].y -40)) {
                this.blume = Math.floor(Math.random() * (5 - 1)) + 1;;
            }
            if (this.x < Math.round(nektarspender[this.blume].x)) {
                this.x++;
            }
            if (this.x > Math.round(nektarspender[this.blume].x)) {
                this.x--;
            }
            if (this.y < Math.round(nektarspender[this.blume].y - 40)) {
                this.y++;
            }
            if (this.y > Math.round(nektarspender[this.blume].y - 40)) {
                this.y--;
            }
        }
    }
    }