import { Personnage } from "../Personnage";
import { CharacterType } from "./CharacterType"

export class Chevalier extends CharacterType {
    SpecialapacityBeforeFight(char: Personnage, target: Personnage) {
    }

    SpecialBeforeAttackCapacity(char: Personnage, target: Personnage) {
    }

    SpecialAttackCapacity(char: Personnage, target: Personnage, attack_result: any) {
    }

    SpecialAfterAttackCapacity(char: Personnage, target: Personnage) {
    }
   
    constructor() {
        super(40, 5, 1, 1, 5, 3);
    }

    bouclier(forceAdv: number, defenseur: Personnage): void {
        let degatsSubis = forceAdv - (forceAdv * 0.25)
        defenseur.currentPV -= degatsSubis
        console.log(`Bouclier ! La vie du chevalier est desormais de ${defenseur.currentPV}.`);
        
    }

}