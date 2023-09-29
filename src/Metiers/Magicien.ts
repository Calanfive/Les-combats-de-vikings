import { CharacterType } from "./CharacterType"
import { Personnage } from "../Personnage";

export class Magicien extends CharacterType{

    SpecialapacityBeforeFight(char: Personnage, target: Personnage) {
        this.recupMana(char)
    }

    SpecialBeforeAttackCapacity(char: Personnage, target: Personnage) {
    }

    SpecialAttackCapacity(char: Personnage, target: Personnage, attack_result: number) {
    }

    SpecialAfterAttackCapacity(char: Personnage, target: Personnage) {
    }
    
    constructor() {
        super(5, 1, 1, 5, 45, 0);
    }

    recupMana(joueurMage: Personnage) : void {
        let recupMana = joueurMage.intelligence * 1/2
        joueurMage.mana += recupMana
        console.log(`Le magicien récupère ${recupMana} grâce à ses pouvoirs magiques.`);
    }
}