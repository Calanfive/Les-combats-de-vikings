export abstract class Equipable implements Iobjet {

    private _prix: number;
    private _poids: number;
    constructor (prix: number, poids: number){
        this._poids = poids
        this._prix = prix
    }
    
    use() {
        
    }
    equipe() {
        console.log("port de l'objet");
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
}
