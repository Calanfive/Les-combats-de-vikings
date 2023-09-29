import { Personnage } from "../Personnage";
import { CharacterType } from "./CharacterType";

export class NewViking extends CharacterType{

    SpecialBeforeAttackCapacity(char: Personnage, target: Personnage) {
        throw new Error("Method not implemented.");
    }
    SpecialAttackCapacity(char: Personnage, target: Personnage, attack_result: any) {
        throw new Error("Method not implemented.");
    }
    SpecialAfterAttackCapacity(char: Personnage, target: Personnage) {
        throw new Error("Method not implemented.");
    }
    
    constructor() {
        super(25, 4, 2, 0, 0, 8);
    }
    
    voldeVie(degats : number, attaquant : Personnage): void {
        let vieAbsorbee = degats * 0.15
        attaquant.currentPV += vieAbsorbee

        let manaAbsorbe = degats * 0.03
        attaquant.mana += manaAbsorbe
        console.log(`Le viking récupère ${vieAbsorbee} de vie et ${manaAbsorbe} de mana à près son attaque!`);
        
    }
}