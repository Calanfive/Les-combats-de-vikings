import { Iobjet } from "./Objet";

export abstract class Equipable implements Iobjet {

    private _name: string;
    private _prix: number;
    private _poids: number;
    private _niveau: number;
    
    constructor (name: string, prix: number, poids: number, niveau: number){
        this._name = name,
        this._poids = poids,
        this._prix = prix,
        this._niveau = niveau
    }
    
    use() {
        console.log("utilise l'objet");
        this.equipe();
    }
    
    equipe() {
        console.log("port de l'objet");
    }


    public get name(): string {
        return this._name;
    }
    public set name(value: string) {
        this._name = value;
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

    public get niveau(): number {
        return this._niveau;
    }
    public set niveau(value: number) {
        this._niveau = value;
    }
}
