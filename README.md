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
Réduire
Les_combats_de_vikings.md
2 Ko
﻿
# Les combats de vikings

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
Les_combats_de_vikings.md
2 Ko ##