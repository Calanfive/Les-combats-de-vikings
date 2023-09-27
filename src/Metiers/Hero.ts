import { CharacterType } from "../Metiers/CharacterType";
import { Personnage } from "../Personnage";

export class Hero extends Personnage{

    private _job?: CharacterType

    constructor(nom: string, job: CharacterType) {
        super(nom)
        this.job = job,
        this.maxPV = 50 + this.job.santemaxbonus
        this.currentPV = this.maxPV 
        this.force =  10 + this.job.forcebonus
        this.vitesse =  10 + this.job.vitessebonus
        this.intelligence =  10 + this.job.intelligencebonus
        this.mana =  50 + this.job.manabonus
        this.chanceCoupCritique_1 = 2 + this.job.critiquebonus
    }

    TriggerBeforeAttack(target: Personnage) {
        this.job.SpecialBeforeAttackCapacity(this, target);
    }

    TriggerAttack(target: Personnage, attack_result : number) {
        this.job.SpecialAttackCapacity(this, target, attack_result);
    }
    
    TriggerAfterAttack(target: Personnage) {
        this.job.SpecialAfterAttackCapacity(this, target);
    }



/* 
////////////////////////////////////////////////////////////////////////////////////////////////
  ____      _   _                                  _            _   _                
 / ___| ___| |_| |_ ___ _ __ ___    __ _ _ __   __| |  ___  ___| |_| |_ ___ _ __ ___ 
| |  _ / _ \ __| __/ _ \ '__/ __|  / _` | '_ \ / _` | / __|/ _ \ __| __/ _ \ '__/ __|
| |_| |  __/ |_| ||  __/ |  \__ \ | (_| | | | | (_| | \__ \  __/ |_| ||  __/ |  \__ \
 \____|\___|\__|\__\___|_|  |___/  \__,_|_| |_|\__,_| |___/\___|\__|\__\___|_|  |___/*/
////////////////////////////////////////////////////////////////////////////////////////////////

    public get job(): CharacterType {
        return this._job!;
    }
    public set job(value: CharacterType) {
        this._job = value;
    }
}