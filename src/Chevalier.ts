import { Metier } from "./Metier"

export class Chevalier extends Metier {
   
    constructor() {
        super();
        this.santemaxbonus = 50;
        this.forcebonus = 5;
        this.vitessebonus = 1;
        this._intelligencebonus = 1;
        this._manabonus = 5;
        this._critiquebonus = 3;
    }

    

    public get santemaxbonus(): number {
        return this._santemaxbonus;
    }
    public set santemaxbonus(value: number) {
        this._santemaxbonus = value;
    }
    
}