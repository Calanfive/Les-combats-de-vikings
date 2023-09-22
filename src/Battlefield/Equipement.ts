export class Equipement {
    private _nomObjet: string;
    
    constructor(
        nomObjet: string, 
        
        ) {
            this._nomObjet = nomObjet
        }
        
    public get nomObjet_1(): string {
        return this._nomObjet;
    }
    public set nomObjet_1(value: string) {
        this._nomObjet = value;
    }
    
}