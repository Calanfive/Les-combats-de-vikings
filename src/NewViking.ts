import { Metier } from "./Metier";

export class NewViking extends Metier{

    constructor() {
        super();
        this.santemaxbonus = 50;
        this.forcebonus = 4;
        this.vitessebonus = 2;
        this._intelligencebonus = 0;
        this._manabonus = 0;
        this._critiquebonus = 8;
    }

    
}