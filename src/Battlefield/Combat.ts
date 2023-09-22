import { Viking } from "../Metiers/Viking";

export class Combat {
    public combatant1: Viking;
    public combatant2: Viking;

    constructor (
        combatant1: Viking,
        combatant2: Viking,
    ) {
        this.combatant1 = combatant1
        this.combatant2 = combatant2
    }

    private getAttaquantInitial() {
        return this.combatant1.force > this.combatant2.force ? this.combatant2 : this.combatant1
    }
    
    private getDefenseurInitial() {
        return this.combatant1.force > this.combatant2.force ? this.combatant1 : this.combatant2
    }

    public simulate() {
        // qui commence ?
        let attaquant = this.getAttaquantInitial()
        let defenseur = this.getDefenseurInitial()

        //boucle de combat jusqu'à ce qu'il y ait un mort
        while(this.fightersAreAlive()){
            // taper
            defenseur.takeDamage(attaquant)
            // changer le rôle
            const intermediaire = attaquant
            attaquant = defenseur
            defenseur = intermediaire

            console.log('après tatane');
            console.log("prochain attaquant");
            attaquant.showCaracteristics()    
            console.log("prochain defenseur");
            defenseur.showCaracteristics()            
        }
    }

    private fightersAreAlive(){
        return this.combatant1.isAlive() && this.combatant2.isAlive()
    }

    showGagnant(){
        let gagnant = this.combatant1.isAlive() ? this.combatant1 : this.combatant2
        console.log('le gagnant est : ' + gagnant.nom);
    }

}