import { Personnage } from "../Personnage";

export abstract class CharacterType {
    private _santemaxbonus: number;
    private _forcebonus: number;
    private _vitessebonus: number;
    private _intelligencebonus: number;
    private _manabonus: number;
    private _critiquebonus: number;
    
    constructor (
        santemaxbonus: number,
        forcebonus: number,
        vitessebonus: number,
        intelligencebonus: number,
        manabonus: number,
        critiquebonus: number
        )  {
            this._santemaxbonus = santemaxbonus;
            this._forcebonus = forcebonus;
            this._vitessebonus = vitessebonus;
            this._intelligencebonus = intelligencebonus;
            this._manabonus = manabonus;
            this._critiquebonus = critiquebonus;
    }
    abstract SpecialapacityBeforeFight(char: Personnage, target: Personnage): any

    abstract SpecialBeforeAttackCapacity(char : Personnage, target: Personnage) : any
    
    abstract SpecialAttackCapacity(char: Personnage, target: Personnage, attack_result: any) : any
    
    abstract SpecialAfterAttackCapacity(char : Personnage, target: Personnage) : any
    
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
    
    public get intelligencebonus(): number {
        return this._intelligencebonus;
    }
    public set intelligencebonus(value: number) {
        this._intelligencebonus = value;
    }
    
    public get manabonus(): number {
        return this._manabonus;
    }
    public set manabonus(value: number) {
        this._manabonus = value;
    }

    public get critiquebonus(): number {
        return this._critiquebonus;
    }
    public set critiquebonus(value: number) {
        this._critiquebonus = value;
    }
}