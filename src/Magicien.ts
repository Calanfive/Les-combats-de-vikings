import { Metier } from "./Metier";

export class Magicien extends Metier{

    constructor() {
        super();
        this.santemaxbonus = 5;
        this.forcebonus = 1;
        this.vitessebonus = 1;
        this.intelligencebonus = 5;
        this.manabonus = 45;
        this.critiquebonus = 0;
    }
    
}