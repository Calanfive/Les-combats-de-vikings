import { CharacterType } from "./Metiers/CharacterType";
import { Iobjet } from "./Objets/Objet";

export abstract class Personnage {

    private _nom: string;
    private _niveau: number;
    private _experience: number;
    private _type: CharacterType;
    private _currentPV: number;
    private _maxPV: number;
    private _force: number;
    private _vitesse: number;
    private _intelligence: number;
    private _mana: number;
    private _chanceCoupCritique: number;
    private _equipement: Iobjet[];
    
    constructor (nom: string,
        type: CharacterType,
        force = 10,
        niveau = 1,
        experience = 0,
        currentPV = 50,
        maxPV = currentPV,
        vitesse = 10,
        intelligence = 10,
        mana = 50,
        chanceCoupCritique = 2,
        equipement = []
        ) {
            this._nom = nom;
            this._niveau = niveau;
            this._experience = experience;
            this._type = type;
            this._currentPV = currentPV;
            this._maxPV = maxPV + this.type.santemaxbonus;
            this._force = force + this.type.forcebonus;
            this._vitesse = vitesse + this.type.vitessebonus;
            this._intelligence = intelligence + this.type.intelligencebonus;
            this._mana = mana + this.type.manabonus;
            this._chanceCoupCritique = chanceCoupCritique + this.type.critiquebonus;
            this._equipement = equipement
        }

        onFightBeginning(target : Personnage) {
            this.type.SpecialapacityBeforeFight(this, target);
        } 
    
        abstract TriggerBeforeAttack(target: Personnage): any
    
        abstract TriggerAttack(target: Personnage, attack_result : number) : any
    
        abstract TriggerAfterAttack(target: Personnage) : any
        
        BeforeAttack(target: Personnage) {
            this.TriggerBeforeAttack(target);
        }
        
        ClassicalAttack(): number {
            let dommage: number = this._force;
    
            if(Math.random() < this._chanceCoupCritique) {
                dommage *= 2
            }
            return dommage;
        }
    
        Attack(target: Personnage) : number{
            let attack_result = this.ClassicalAttack()
            target._currentPV -= attack_result;
            this.TriggerAttack(target, attack_result)
    
            return attack_result;
        }
    
        AfterAttack(target: Personnage) {
            this.TriggerAfterAttack(target);
        }
    
        Heal(regainHP: number) {
            if (regainHP + this._currentPV > this._maxPV) {
                this._currentPV = this._maxPV
            } else { 
                this._currentPV += regainHP
            }
        }
        
        AbsorbMana(manaleech: number) {
            this.mana += manaleech;
        }
    
        // levelUp(): any { 
        //     //TODO  
        // }
    
        isDead(): boolean {
            return this._currentPV <= 0;
    
        }
    

    public get nom(): string {
        return this._nom;
    }
    public set nom(value: string) {
        this._nom = value;
    }
    
    public get niveau(): number {
        return this._niveau;
    }
    public set niveau(value: number) {
        this._niveau = value;
    }
    
    public get experience(): number {
        return this._experience;
    }
    public set experience(value: number) {
        this._experience = value;
    }
    
    public get type(): CharacterType {
        return this._type;
    }

    public set type(value: CharacterType) {
        this._type = value;
    }

    public get currentPV(): number {
        return this._currentPV + this.type.santemaxbonus
    }
    public set currentPV(value: number) {
        this._currentPV = value;
    }
    

    public get maxPV(): number {
        return this._maxPV + this.type.santemaxbonus;
    }
    public set maxPV(value: number) {
        this._maxPV = value;
    }


    public get force(): number {
        return this._force + this.type.forcebonus;
    }
    public set force(value: number) {
        this._force = value;
    }
    
    public get vitesse(): number {
        return this._vitesse + this.type.vitessebonus;
    }
    public set vitesse(value: number) {
        this._vitesse = value;
    }

    public get intelligence(): number {
        return this._intelligence + this.type.intelligencebonus;
    }
    public set intelligence(value: number) {
        this._intelligence = value;
    }

    public get mana(): number {
        return this._mana + this.type.manabonus;
    }
    public set mana(value: number) {
        this._mana = value;
    }
    
    public get chanceCoupCritique_1(): number {
        return this._chanceCoupCritique  + this.type.critiquebonus;
    }
    public set chanceCoupCritique_1(value: number) {
        this._chanceCoupCritique = value;
    }

    public get equipement(): Iobjet[] {
        return this._equipement;
    }
    public set equipement(value: Iobjet[]) {
        this._equipement = value;
    }
    
}