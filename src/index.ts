import { Viking } from "./Metiers/Viking"
import { Archer } from "./Metiers/Archer"
import { NewViking } from "./Metiers/NewViking"
import { Chevalier } from "./Metiers/Chevalier"
import { Voleur } from "./Metiers/Voleur"
import { Magicien } from "./Metiers/Magicien"
import { Newcombat } from "./Battlefield/Newcombat"
import { Hero } from "./Metiers/Hero";
import { Epee } from "./Objets/Epee"
import { Hache } from "./Objets/Hache"


// const gourdin = new Arme('Gourdin', 10)
// const marteau = new Arme('Marteau', 8)

// const v1 = new Viking('Brutas', 150, 80, gourdin, 15)
// const v2 = new Viking('Raval', 200, 60, marteau, 8)

// const combat = new Combat(v1, v2)
// combat.simulate()
// combat.showGagnant()

// const player3 = new Chevalier()
// console.log(player3);

// const player4 = new Voleur()
// console.log(player4);

// const player5 = new Magicien()
// console.log(player5);

const archer1 = new Archer()
const viking1 = new NewViking()

let Ava = new Hero("Ava", archer1);
let Harald = new Hero("Harald", viking1)

let FightManager = new Newcombat(Ava, Harald);

FightManager.OneTurn();

FightManager.Fight();
// name: string, prix: number, poids: number, niveau: number, giveForce: number, giveIntell: number, giveVitss: number
let epee1 = new Epee("Lame de sang", 5, 2, 1, 1, 2, 1)

// Ava.use(epee1)

console.log(Ava.currentPV);

//let hache1 = new Hache()

