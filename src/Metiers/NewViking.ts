import { Personnage } from "../Personnage";
import { Type } from "./Type";

export class NewViking extends Type{

    constructor() {
        super(50, 4, 2, 0, 0, 8);
        this.santemaxbonus = 50;
        this.forcebonus = 4;
        this.vitessebonus = 2;
        this.intelligencebonus = 0;
        this.manabonus = 0;
        this.critiquebonus = 8;
    }
    
    voldeVie(degats : number, attaquant : Personnage): void {
        let vieabsorbee : number = degats * 0.15
        attaquant.pv += vieabsorbee
    }
}