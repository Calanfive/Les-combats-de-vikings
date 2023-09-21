export class Metier{
    private _santemaxbonus: number;
    private _forcebonus: number;
    private _vitessebonus: number;
     private _intelligencebonus:number;
    private _manabonus:number;
    private _critiquebonus:number;

    public get santemaxbonus(): number {
        return this._santemaxbonus;
    }
    public set santemaxbonus(value: number) {
        this._santemaxbonus = value;
    }

    public get forcebonus(): number {
        return this._forcebonus;
    }
    public set forcebonus(value: number) {
        this._forcebonus = value;
    }

    public get vitessebonus(): number {
        return this._vitessebonus;
    }
    public set vitessebonus(value: number) {
        this._vitessebonus = value;
    }
}