import { finalCharacter } from "../js_v14-3.js";
import Weapon from "./weapon-class-v2.js";

//==============================================end imports===============================================//

export default class MagicalWeapon extends Weapon {
    constructor (name, damage, type, numOfHands, cost, encumbrance) {
        super(name, damage, type, numOfHands, cost, encumbrance, effect)
        this.effect = effect;
    }

    castAreaSpell() {
        finalCharacter.areaAttackSpell(monster1, monster2, spell3, continueNextChapter);
    }
   
}



// 1d4 damage

// 1d6 damage

//1d8 damage
let mahoganyStaff = new Weapon('Mahogany Staff', 6, 'Melee', 1, 20, 20);
let gemStaff = new Weapon('Gem Staff', 8, 'Melee', 1, 100, 20);

//1d10 damage


//mega weapon



export { mahoganyStaff, gemStaff };