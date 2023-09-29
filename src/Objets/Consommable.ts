import { Personnage } from "../Personnage";
import { Iobjet } from "./Objet";

export abstract class Consommable implements Iobjet{
    private _name: string;
    private _prix: number;
    private _poids: number;

    constructor (nom: string, prix: number, poids: number){
        this._name = nom
        this._poids = poids
        this._prix = prix
    }

    use(personnage: Personnage) {
        throw new Error("Method not implemented.");
    }
    
    public get poids(): number {
        return this._poids;
    }
    public set poids(value: number) {
        this._poids = value;
    }
    public get prix(): number {
        return this._prix;
    }
    public set prix(value: number) {
        this._prix = value;
    }
    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
    }
}
