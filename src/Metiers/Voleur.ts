import { CharacterType } from "./CharacterType";
import { Personnage } from "../Personnage";

export class Voleur extends CharacterType{

    SpecialapacityBeforeFight(char: Personnage, target: Personnage) {
    }

    SpecialBeforeAttackCapacity(char: Personnage, target: Personnage) {
    }

    SpecialAttackCapacity(char: Personnage, target: Personnage, attack_result: any) {
    }

    SpecialAfterAttackCapacity(char: Personnage, target: Personnage) {
    }
    
    constructor() {
        super(5, 1, 1, 5, 45, 0);
    }
    
    attaqueSurprise(joueurVoleur: Personnage, joueurAdv: Personnage): void{
        let coupCritique = joueurVoleur.force * 2.50
        joueurAdv.currentPV -= coupCritique
        console.log(`Le voleur a infligé ${coupCritique} avec son attaque surprise!`);
        
    }
}