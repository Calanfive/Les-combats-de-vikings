import { Arme } from "./Arme"

export class Viking {

    public nom: string;
    private _santemax: number;
    private _sante: number;
    private _force: number;
    private _arme: Arme;
    private _defense: number;

    
    constructor(
        nom: string,
        sante : number,
        force : number,
        arme : Arme,
        defense : number
    ) {
        this.nom = nom;
        this._santemax = sante;
        this._sante = this._santemax;
        this._force = force;
        this._arme = arme;
        this._defense = defense;
    }

    public get force(): number {
        return this._force + this._arme.force
    }

    takeDamage(adversaire: Viking){
        let randomLucky = Math.random() * 100;
        let damageForce = adversaire.force
        
        if (randomLucky < 10) {
            let criticalKick = adversaire.force * 2
            damageForce = criticalKick
        }
        let shieldDamages = damageForce - this._defense
        
        if (shieldDamages >= 0) {
            this._sante = this._sante - shieldDamages
        }
    }

    public attaque(ennemi: Viking){
        let soinsValue = 0
        soinsValue = Math.floor(this._force * 0.15)
        this._sante += soinsValue;
    }
    
    isAlive(){
        return this._sante > 0
    }
    
    showCaracteristics(){
        console.log(`${this.nom} a ${this._sante} PV et une attaque de ${this.force}`);
    }

    
    public get santemax(): number {
        return this._santemax;
    }
    public set santemax(value: number) {
        this._santemax = value;
    }

    public get sante(): number {
        return this._sante;
    }
    public set sante(value: number) {
        this._sante = value;
    }

    public get arme(): Arme {
        return this._arme;
    }
    public set arme(value: Arme) {
        this._arme = value;
    }

    public get defense(): number {
        return this._defense;
    }
    public set defense(value: number) {
        this._defense = value;
    }
    
}