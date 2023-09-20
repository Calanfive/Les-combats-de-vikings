import { Arme } from "./Arme"
import { Combat } from "./Combat"
import { Viking } from "./Viking"

const gourdin = new Arme('Gourdin', 10)
const marteau = new Arme('Marteau', 8)

const v1 = new Viking('Brutas', 150, 80, gourdin, 15)
const v2 = new Viking('Raval', 200, 60, marteau, 8)

const combat = new Combat(v1, v2)
combat.simulate()
combat.showGagnant()