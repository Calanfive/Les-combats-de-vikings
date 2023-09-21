import { Metier } from "./Metier"

export class Chevalier extends Metier {
   
    constructor() {
        super(40, 5, 1, 1, 5, 3);
        this.santemaxbonus = 40;
        this.forcebonus = 5;
        this.vitessebonus = 1;
        this.intelligencebonus = 1;
        this.manabonus = 5;
        this.critiquebonus = 3;
    }

}