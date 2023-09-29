import { Equipable } from "./Equipable";

export abstract class Arme extends Equipable {

    private _plusDeForce: number;
    private _plusDintell: number;
    private _plusDeVitss: number;

    constructor (name: string, prix: number, poids: number, niveau: number, giveForce: number, giveIntell: number, giveVitss: number) {
        super(name, prix, poids, niveau)
        this._plusDeForce = giveForce
        this._plusDintell = giveIntell
        this._plusDeVitss = giveVitss
    }
    
    use() {
        this.equipe();
    }
    
    equipe() {
        super.equipe()
        console.log("port de l'arme"+ this.name);
    }

    public get plusDeForce(): number {
        return this._plusDeForce;
    }
    public set plusDeForce(value: number) {
        this._plusDeForce = value;
    }

    public get plusDintell(): number {
        return this._plusDintell;
    }
    public set plusDintell(value: number) {
        this._plusDintell = value;
    }

    public get plusDeVitss(): number {
        return this._plusDeVitss;
    }
    public set plusDeVitss(value: number) {
        this._plusDeVitss = value;
    }
}