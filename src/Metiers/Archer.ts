import { CharacterType } from "./CharacterType"
import { Personnage } from "../Personnage";
import { log } from "console";


export class Archer extends CharacterType {
   
    constructor() {
        super(15, 2, 3, 1, 10, 5);
    }

    poseDePiege(joueurArcher: Personnage, joueurAdv: Personnage): void {
        if (joueurArcher.vitesse > joueurAdv.vitesse) {
            let degatsPiege = joueurArcher.force * 2.50
            joueurAdv.pv -= degatsPiege
            console.log(`l'adversaire est tombé dans le piège, sa vie est maintenant de ${joueurAdv.pv}`);
        }   

        else {
            console.log("archer, vitesse manquante, pas de piège posé");
        }
    }
}