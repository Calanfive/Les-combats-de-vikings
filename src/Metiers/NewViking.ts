import { Personnage } from "../Personnage";
import { CharacterType } from "./CharacterType";

export class NewViking extends CharacterType{

    constructor() {
        super(25, 4, 2, 0, 0, 8);
    }
    
    voldeVie(degats : number, attaquant : Personnage): void {
        let vieAbsorbee = degats * 0.15
        attaquant.pv += vieAbsorbee

        let manaAbsorbe = degats * 0.03
        attaquant.mana += manaAbsorbe
        console.log(`Le viking récupère ${vieAbsorbee} de vie et ${manaAbsorbe} de mana à près son attaque!`);
        
    }
}