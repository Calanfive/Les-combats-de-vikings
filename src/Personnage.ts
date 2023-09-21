import { Equipement } from "./Equipement";

export class Personnage {
    private _nom: string;
    private _niveau: number;
    private _experience: number;
    private _type: string;
    private _pv: string;
    private _force: number;
    private _vitesse: number;
    private _intelligence: number;
    private _mana: number;
    private _chanceCoupCritique: number;
    
    constructor (
        nom: string,
        niveau: number,
        experience: number,
        type: string,
        pv: string,
        force: number,
        vitesse: number,
        intelligence: number,
        mana: number,
        chanceCoupCritique: number,
        equipement: Equipement
        ) {
            this._nom = nom;
            this._niveau = niveau;
            this._experience = experience;
            this._type = type;
            this._pv = pv;
            this._force = force;
            this._vitesse = vitesse;
            this._intelligence = intelligence;
            this._mana = mana;
            this._chanceCoupCritique = chanceCoupCritique;
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

    public get type(): string {
        return this._type;
    }
    public set type(value: string) {
        this._type = value;
    }

    public get pv(): string {
        return this._pv;
    }
    public set pv(value: string) {
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
    
}