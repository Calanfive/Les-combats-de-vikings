import { Personnage } from "../Personnage";
import { CharacterType } from "./CharacterType"

export class Chevalier extends CharacterType {
   
    constructor() {
        super(40, 5, 1, 1, 5, 3);
        this.santemaxbonus = 40;
        this.forcebonus = 5;
        this.vitessebonus = 1;
        this.intelligencebonus = 1;
        this.manabonus = 5;
        this.critiquebonus = 3;
    }

    bouclier(forceAdv: number, defenseur: Personnage): void {
        let degatsSubis = forceAdv - (forceAdv * 0.25)
        defenseur.pv -= degatsSubis
    }

}