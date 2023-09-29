import { Arme } from "./Arme";

export class Hache extends Arme{
    
    constructor (name: string, prix: number, poids: number, niveau: number, giveForce: number, giveIntell: number, giveVitss: number) {
        super(name, prix, poids, niveau,giveForce, giveIntell, giveVitss)
    }
}