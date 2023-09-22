import { Type } from "./Type";

export class Magicien extends Type{

    constructor() {
        super(5, 1, 1, 5, 45, 0);
        this.santemaxbonus = 5;
        this.forcebonus = 1;
        this.vitessebonus = 1;
        this.intelligencebonus = 5;
        this.manabonus = 45;
        this.critiquebonus = 0;
    }
    
}