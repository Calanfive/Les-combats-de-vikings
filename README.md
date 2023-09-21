# Projet initial pour vos exercices d'algorithmie en typescript

## Installation

1. Clonez le projet
```bash
cd ~/dev
mkdir poo
cd poo
git clone git@github.com:ThomasLaforge/poo-setup-simplon.git poo-template
```
2. Déplacez vous dans le dossier cloné
```bash
cd poo-template
```
3. Supprimez le dossier `.git`
```bash
rm -rf .git
```
3. installez les dépendances
```bash
npm install
``` 
4. Lancez le projet
```bash
npm run dev
```
5. Modifiez le fichier `src/index.ts` pour commencer à coder


## Le combat des vikings ##

## Un viking

Les vikings ont un nom, une santé, une force et une arme.
Une arme a un nom et une force.
La force d'un viking est la force de son arme et la sienne.

Créez 2 vikings
et créez un combat de viking

Afficher le vainqueur du combat. Le combat avec le moins de force débute.
Chaque viking attaque à tour de rôle.
Attaquer enlève de la santé à l'autre viking correspondant à la force de l'attaquant.

## Les dégats critiques

Les vikings ont une chance de faire un coup critique.
Un coup critique double la force de l'attaque.
La chance de faire un coup critique est de 10%.

## Le vol de vie

L'arme "Lame de sang" permet de se soigner de 13% des dégats infligés à l'adversaire.

## La défense

Ajouter de la défense aux vikings.
La défense permet de réduire les dégats subis.

## La défense binaire

Ajouter une défense binaire aux vikings.
Soit la défense binaire est supérieur aux dégats subis et le viking ne subit aucun dégat.
Soit la défense binaire est inférieur aux dégats subis et le viking subit tous les dégats (toujours réduits par la défense normale)



# Correction #

```ts
class Arme {

    private nom: string
    public force: number

    constructor(
        nom: string,
        force: number,
    ) {
        this.nom = nom
        this.force = force
    }

    public isLameDeSang(): boolean {
        return this.nom === 'Lame de sang'
    }
}
```

```ts
class Viking {

    public nom: string
    public sante: number
    private santeInitiale: number
    private _force: number
    private arme: Arme
    private defense: number

    constructor(
        nom: string,
        sante: number,
        santeInitiale: number,
        force: number,
        arme: Arme,
        defense: number
    ) {
        this.nom = nom
        this.sante = sante
        this.santeInitiale = santeInitiale
        this._force = force
        this.arme = arme
        this.defense = defense
    }

    public fight(otherViking: Viking) {
        const attackValue = this.getAttackValue()
        const soinsValue = this.getHealedValueFromAttaque(attackValue)
        otherViking.receiveAttack(attackValue)
        this.heal(soinsValue)
    }

    public get force(): number {
        return this._force + this.arme.force
    }

    private getAttackValue(): number {
        let attackValue = this.force
        if(Math.random() < 0.1) {
            attackValue *= 2
        }
        return attackValue
    }

    private getHealedValueFromAttaque(attaqueValue: number): number {
        let soinsValue = 0
        if(this.arme.isLameDeSang()){
            soinsValue = Math.floor(attaqueValue * 0.13)
        }
        return soinsValue
    }

    private heal(amount: number) {
        this.sante += amount
        if(this.sante > this.santeInitiale) {
            this.sante = this.santeInitiale
        }
    }

    private receiveAttack(amount: number){
        let totalLifeToLose = amount - this.defense
        if(totalLifeToLose > 0) {
            this.sante -= totalLifeToLose
        }
        if(this.sante < 0) {
            this.sante = 0
        }
    }

}
```

```ts
class Combat {

    public vikings: Viking[]

    constructor(
        vikings: Viking[],
    ) {
        this.vikings = vikings
    }

    public simulate() {
        let fighterIndex = this.firstViking.force > this.secondViking.force ? 1 : 0
        
        while (this.firstViking.sante > 0 && this.secondViking.sante > 0) {
            const fighterViking = this.vikings[fighterIndex]
            const defenserViking = this.vikings[1 - fighterIndex]
            
            fighterViking.fight(defenserViking)

            fighterIndex = 1 - fighterIndex
        }
    }

    public afficherVainqueur() {
        const vainqueur = this.firstViking.sante > 0 ? this.firstViking : this.secondViking
        console.log(`${vainqueur.nom} a gagné !`)
    }

    get firstViking(): Viking {
        return this.vikings[0]
    }

    get secondViking(): Viking {
        return this.vikings[1]
    }
}
```

```ts
const viking1 = new Viking('viking1', 48, 48, 12, new Arme('Lame du roi déçu', 10), 6)
const viking2 = new Viking('viking2', 36, 39, 15, new Arme('Lame de sang', 20), 2)

const combat = new Combat([viking1, viking2])
combat.simulate()
combat.afficherVainqueur()
```
