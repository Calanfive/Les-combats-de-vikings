import { Arme } from "./Arme"

export class Viking {

    public nom: string;
    private sante : number;
    private _force : number;
    public arme : Arme;
    public defense : number

    constructor(
      nom: string,
      sante : number,
      force : number,
      arme : Arme,
      defense : number
    ) {
      this.nom = nom
      this.sante = sante
      this._force = force
      this.arme = arme
      this.defense = defense
    }

    public get force(): number {
        return this._force + this.arme.force
    }

    takeDamage(adversaire: Viking){
        let randomLucky = Math.random() * 100;
        let damageForce = adversaire.force
        
        if (randomLucky < 10) {
            let criticalKick = adversaire.force * 2
            damageForce = criticalKick
        }
        let shieldDamages = damageForce - this.defense
        
        if (shieldDamages >= 0) {
            this.sante = this.sante - shieldDamages
        }
    }

    


    isAlive(){
        return this.sante > 0
    }

    showCaracteristics(){
        console.log(`${this.nom} a ${this.sante} PV et une attaque de ${this.force}`);
    }

}