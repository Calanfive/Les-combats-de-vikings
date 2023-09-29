import { Personnage } from "../Personnage";

export interface Iobjet {
    name: string;
    prix : number;
    poids: number;

    use(personnage: Personnage): any;
}

