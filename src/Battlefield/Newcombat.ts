import { Personnage } from "../Personnage";


export class Newcombat {
    private _perso1: Personnage
    private _perso2: Personnage
    private _fighterStatus: Personnage[] = []   
    // fighterStatus[0] sera toujours l'attaquant 
    // fighterStatus[1] sera toujours le defenseur
    
    constructor (
        P1: Personnage,
        P2: Personnage,
    ) {
        this._perso1 = P1;
        this._perso2 = P2;
    }

    Fight() { 
        //this.perso1.onFightBeginning()//À implémenter TP J2
        //this.perso2.onFightBeginning()//À implémenter TP J2
        while (!this.perso1.isDead() && !this.perso2.isDead()) {
            this.OneTurn();
        }
        //this.perso1.onFightEnding()//À implémenter TP J2
        //this.perso2.onFightEnding()//À implémenter TP J2

    }

    OneTurn() {
        let initiative: Personnage[] = []

        if (this.perso1.vitesse > this.perso2.vitesse)
            initiative = [this.perso1, this.perso2]
        else
            initiative = [this.perso2, this.perso1]

        this.fighterStatus = [initiative[0], initiative[1]]
        this.playTurn()
        this.fighterStatus = [initiative[1], initiative[0]]
        this.playTurn()
        
    }

    playTurn() {
        console.log(this.fighterStatus[0].nom + " se prépare à attaquer son adversaire " + this.fighterStatus[1].nom)
        this.fighterStatus[0].BeforeAttack(this.fighterStatus[1]);

        this.fighterStatus[0].Attack(this.fighterStatus[1]);

        this.fighterStatus[0].AfterAttack(this.fighterStatus[1]);
        console.log(this.fighterStatus[1].nom + " est à " + this.fighterStatus[1].currentPV + " point de vie. " + this.fighterStatus[1].isDead());

        //this.fighterStatus[1].OnHit(this.fighterStatus[0]);

        if (this.fighterStatus[1].isDead()) { 
            console.log(this.fighterStatus[1].nom + " est mort !")
            console.log(this.fighterStatus[0].nom + " s'en sort vainqueur !")
            //this.fighterStatus[0].getXppoint(this.fighterStatus[1].level);//TODO 
            //this.fighterStatus[0].fullHeal();//TODO 
        }
    }

    public get perso1(): Personnage {
        return this._perso1
    }
    public set perso1(value: Personnage) {
        this._perso1 = value
    }
    public get perso2(): Personnage {
        return this._perso2
    }
    public set perso2(value: Personnage) {
        this._perso2 = value
    }

    public get fighterStatus(): Personnage[] {
        return this._fighterStatus;
    }
    public set fighterStatus(value: Personnage[]) {
        this._fighterStatus = value;
    }
}