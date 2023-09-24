import { CharacterType } from "./CharacterType"
import { Personnage } from "../Personnage";


export class Archer extends CharacterType {
   
    constructor() {
        super(15, 2, 3, 1, 10, 5);
        this.santemaxbonus = 15;
        this.forcebonus = 2;
        this.vitessebonus = 3;
        this.intelligencebonus = 1;
        this.manabonus = 10;
        this.critiquebonus = 5;
    }

    poseDePiege(joueurArcher: Personnage, joueurAdv: Personnage): void {
        if (joueurArcher.vitesse > joueurAdv.vitesse) {
            let degatsPiege = joueurArcher.force * 2.50
            joueurAdv.pv -= degatsPiege
        }   

        else {
            console.log("archer, vitesse manquante, pas de piège posé");
            
        }


    }
}