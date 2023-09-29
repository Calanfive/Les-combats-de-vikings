import { CharacterType } from "./CharacterType"
import { Personnage } from "../Personnage";


export class Archer extends CharacterType {
    SpecialapacityBeforeFight(attaquant: Personnage, target : Personnage) {
        this.poseDePiege(attaquant, target)
    }
    
    SpecialBeforeAttackCapacity(char: Personnage, target: Personnage) {
        
    }

    SpecialAttackCapacity(char: Personnage, target: Personnage, attack_result: any) {
    }

    SpecialAfterAttackCapacity(char: Personnage, target: Personnage) {

    }
   
    constructor() {
        super(15, 2, 3, 1, 10, 5);
    }

    poseDePiege(joueurArcher: Personnage, joueurAdv: Personnage): void {
        if (joueurArcher.vitesse > joueurAdv.vitesse) {
            let degatsPiege = joueurArcher.force * 2.50
            joueurAdv.currentPV -= degatsPiege
            console.log(`l'adversaire est tombé dans le piège, sa vie est maintenant de ${joueurAdv.currentPV}.`);
        }   

        else {
            console.log("archer, vitesse manquante, pas de piège posé.");
        }

    
    }
}