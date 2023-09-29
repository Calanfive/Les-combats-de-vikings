import { Personnage } from "../Personnage";
import { CharacterType } from "./CharacterType";

export class NewViking extends CharacterType{
    SpecialapacityBeforeFight(char: Personnage, target: Personnage) {
        
    }

    SpecialBeforeAttackCapacity(char: Personnage, target: Personnage) {
        
    }
    SpecialAttackCapacity(char: Personnage, target: Personnage, attack_result: number) {
        this.voldeVie(attack_result, char);
    }

    SpecialAfterAttackCapacity(char: Personnage, target: Personnage) {
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