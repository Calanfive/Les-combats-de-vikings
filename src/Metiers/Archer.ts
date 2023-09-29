import { CharacterType } from "./CharacterType"
import { Personnage } from "../Personnage";


export class Archer extends CharacterType {
    
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