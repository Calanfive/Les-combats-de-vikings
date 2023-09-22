import { Equipement } from "./Battlefield/Equipement";
import { Type } from "./Metiers/Type";

export class Personnage {
    private _nom: string;
    private _niveau: number;
    private _experience: number;
    private _type: Type;
    private _pv: number;
    private _force: number;
    private _vitesse: number;
    private _intelligence: number;
    private _mana: number;
    private _chanceCoupCritique: number;
    private _equipement: Equipement;
    
    constructor (
        nom: " ",
        niveau: 1,
        experience: 0,
        type: Type,
        pv: 50,
        force: 10,
        vitesse: 10,
        intelligence: 10,
        mana: 50,
        chanceCoupCritique: 2,
        equipement: Equipement
        
        ) {
            this._nom = nom;
            this._niveau = niveau;
            this._experience = experience;
            this._type = type;
            this._pv = pv + this.type.santemaxbonus;
            this._force = force + this.type.forcebonus;
            this._vitesse = vitesse + this.type.vitessebonus;
            this._intelligence = intelligence + this.type.intelligencebonus;
            this._mana = mana + this.type.manabonus;
            this._chanceCoupCritique = chanceCoupCritique + this.type.critiquebonus;
            this._equipement = equipement;
        }
        // this.santemaxbonus = 40;
        // this.forcebonus = 5;
        // this.vitessebonus = 1;
        // this.intelligencebonus = 1;
        // this.manabonus = 5;
        // this.critiquebonus = 3;
        
        
        

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
    
    public get type(): Type {
        return this._type;
    }

    public set type(value: Type) {
        this._type = value;
    }

    public get pv(): number {
        return this._pv;
    }
    public set pv(value: number) {
        this._pv = value;
    }
    
    public get force(): number {
        return this._force;
    }
    public set force(value: number) {
        this._force = value;
    }
    
    public get vitesse(): number {
        return this._vitesse;
    }
    public set vitesse(value: number) {
        this._vitesse = value;
    }

    public get intelligence(): number {
        return this._intelligence;
    }
    public set intelligence(value: number) {
        this._intelligence = value;
    }

    public get mana(): number {
        return this._mana;
    }
    public set mana(value: number) {
        this._mana = value;
    }
    
    public get chanceCoupCritique_1(): number {
        return this._chanceCoupCritique;
    }
    public set chanceCoupCritique_1(value: number) {
        this._chanceCoupCritique = value;
    }

    public get equipement_1(): Equipement {
        return this._equipement;
    }
    public set equipement_1(value: Equipement) {
        this._equipement = value;
    }
    
}