import { Equipable } from "./Equipable";

export abstract class Accessoires extends Equipable { 

    private _plusDeForce : number;
    private _plusDintell : number;
    private _plusDarmure : number;
    
    constructor (name: string, prix: number, poids: number, niveau: number, giveForce: number, giveDintell: number, giveDarmure: number) {
        super(name, prix, poids, niveau)
        this._plusDeForce = giveForce
        this._plusDintell = giveDintell
        this._plusDarmure = giveDarmure
    }
    
    use() {
        this.equipe();
    }
    
    equipe() {
        super.equipe()
        console.log("port de l'accessoire" + this.name);
    }


    public get plusDarmure(): number {
        return this._plusDarmure;
    }
    public set plusDarmure(value: number) {
        this._plusDarmure = value;
    }
    
    public get plusDintell(): number {
        return this._plusDintell;
    }
    public set plusDintell(value: number) {
        this._plusDintell = value;
    }
    public get plusDeForce(): number {
        return this._plusDeForce;
    }
    public set plusDeForce(value: number) {
        this._plusDeForce = value;
    }
}