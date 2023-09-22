import { Type } from "./Type"

export class Archer extends Type {
   
    constructor() {
        super(15, 2, 3, 1, 10, 5);
        this.santemaxbonus = 15;
        this.forcebonus = 2;
        this.vitessebonus = 3;
        this.intelligencebonus = 1;
        this.manabonus = 10;
        this.critiquebonus = 5;
    }

}