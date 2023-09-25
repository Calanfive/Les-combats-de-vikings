import { CharacterType } from "./CharacterType";
import { Personnage } from "../Personnage";

export class Voleur extends CharacterType{

    constructor() {
        super(5, 1, 1, 5, 45, 0);
    }
    
    attaqueSurprise(joueurVoleur: Personnage, joueurAdv: Personnage): void{
        let coupCritique = joueurVoleur.force * 2.50
        joueurAdv.pv -= coupCritique
        console.log(`Le voleur a infligé ${coupCritique} avec son attaque surprise!`);
        
    }
}