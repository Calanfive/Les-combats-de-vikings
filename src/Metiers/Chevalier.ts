import { Personnage } from "../Personnage";
import { CharacterType } from "./CharacterType"

export class Chevalier extends CharacterType {

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
        super(40, 5, 1, 1, 5, 3);
    }

    bouclier(forceAdv: number, defenseur: Personnage): void {
        let degatsSubis = forceAdv - (forceAdv * 0.25)
        defenseur.currentPV -= degatsSubis
        console.log(`Bouclier ! La vie du chevalier est desormais de ${defenseur.currentPV}.`);
        
    }

}