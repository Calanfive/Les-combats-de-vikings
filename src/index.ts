import { Arme } from "./Battlefield/Arme"
import { Equipement } from "./Battlefield/Equipement"
import { Combat } from "./Combat"
import { Personnage } from "./Personnage"
import { Viking } from "./Metiers/Viking"
import { Archer } from "./Metiers/Archer"
import { NewViking } from "./Metiers/NewViking"
import { Chevalier } from "./Metiers/Chevalier"
import { Voleur } from "./Metiers/Voleur"
import { Magicien } from "./Metiers/Magicien"
import { Newcombat } from "./Battlefield/Newcombat"


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

let Ava = new Hero();
let Harald = new Hero()



console.log(Ava)
console.log(Harald)

let FightManager = new Newcombat(Ava, Harald);

FightManager.OneTurn();

FightManager.Fight();

