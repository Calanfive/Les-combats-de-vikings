import { Personnage } from "../Personnage";


export class Newcombat {
    private _P1: Personnage;
    private _P2: Personnage;
    
    constructor (
        P1: Personnage,
        P2: Personnage,
    ) {
        this._P1 = P1;
        this._P2 = P2;
    }

    
    // comparaisonVitesse() : Personnage[] {
    // let persoArray = [this.P1,this.P2]

    // let sortedArray = [];

    // if(this.P1.vitesse < this.P2.vitesse){
    //     sortedArray = [this.P2,this.P1]
    // }else{
    //     sortedArray = [this.P1,this.P2]
    // }
    // return sortedArray;

    // }
    
    fight(P1: Personnage, P2: Personnage) {}

        comparerVitesse(P1: Personnage, P2: Personnage) {
        return this.P1.vitesse > this.P2.vitesse ? this.P1 : this.P2
        }
        
        beforeAttack() {

        }
        attack() {

        }
        afterAttack() {

        }
        onHit() {

        }

    public get P1(): Personnage {
        return this._P1;
    }
    public set P1(value: Personnage) {
        this._P1 = value;
    }

    public get P2(): Personnage {
        return this._P2;
    }
    public set P2(value: Personnage) {
        this._P2 = value;
    }
}

