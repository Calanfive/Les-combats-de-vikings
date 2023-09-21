import { Metier } from "./Metier";

export class NewViking extends Metier{

    constructor() {
        super(50, 4, 2, 0, 0, 8);
        this.santemaxbonus = 50;
        this.forcebonus = 4;
        this.vitessebonus = 2;
        this.intelligencebonus = 0;
        this.manabonus = 0;
        this.critiquebonus = 8;
    }
    
}