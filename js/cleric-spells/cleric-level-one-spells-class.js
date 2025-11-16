import
{
    finalCharacter
} from "../js_v14-3.js";

import { toggleShowSpellList } from "../js_v14-3.js";

import { Utilities } from "../Utilities/utilityFunctions.js";

import { SpellUtilities } from "../Utilities/spellUtilityFunctions.js";

export let clericLevelOneSpells = [];

export default class ClericLevelOneSpells {
    constructor (name, level, range, duration, effect, castingEffect, className, useBattle, damage, isAreaEffect, numberOfUses = 0, isUsedOnOthers, isUsedOnSelf) {
        this.name = name;
        this.level = level;
        this.range = range;
        this.duration = duration;
        this.effect = effect;
        this.castingEffect = castingEffect;
        this.className = className;
        this.useBattle = useBattle;
        this.damage = damage;
        this.isAreaEffect = isAreaEffect;
        this.numberOfUses = numberOfUses;
        this.isUsedOnMonster = isUsedOnOthers;
        this.isUsedOnSelf = isUsedOnSelf;
    }
};

let cureLightWoundsCleric = new ClericLevelOneSpells (
    "Cure Light Wounds", 
    1, 
    0, 
    0, 
    "Cures/Causes 2-7 points of damage upon touch, cleric must make a hit roll. Can cure paralysis",
    function() {console.log('Casting');}, 
    "cure-light-wounds-cleric",
    true,
    7,
    false
);

let detectMagicCleric = new ClericLevelOneSpells (
    "Detect Magic", 
    1, 
    0, 
    2, 
    "Detects magic within 60 feet", 
    function() {console.log('Casting');}, 
    "detect-magic-cleric",
    false,
    0,
    true);

let detectEvilCleric = new ClericLevelOneSpells (
    "Detect Evil", 
    1, 
    60, 
    2, 
    "Everything within 60 feet", 
    function() {console.log('Casting');}, 
    "detect-evil-cleric",
    false,
    0,
    true);

let purifyFoodAndWaterCleric = new ClericLevelOneSpells (
    "Purify Food and Water", 
    1, 
    10, 
    0, "Makes spoiled or poisoned food or water usable (1 ration/6 waterskins)", 
    function() {console.log('Casting');}, 
    "purify-food-and-water-cleric",
    false,
    0,
    false);

let lightCleric = new ClericLevelOneSpells (
    "Light", 
    1, 
    120, 
    6, 
    "Volume of 30 feet diameter", 
    function() {console.log('Casting');}, 
    "light-cleric",
    true,
    0,
    true);

let removeFearCleric = new ClericLevelOneSpells (
    "Remove Fear", 
    1, 
    0, 
    0, 
    "Will calm the creature and remove any fear. Plus 1 bonus for each level up to 6", 
    function() {console.log('Casting');}, 
    "remove-fear-cleric",
    true,
    0,
    false);

let protectionFromEvilCleric = new ClericLevelOneSpells (
    "Protection from Evil", 
    1, 
    0, 
    6, 
    "The Cleric only", 
    function() {console.log('Casting');}, 
    "protection-from-evil-cleric",
    true,
    0,
    false);

let resistColdCleric = new ClericLevelOneSpells (
    "Resist Cold", 
    1, 
    0, 
    6, 
    "All creatures within 30 feet", 
    function() {console.log('Casting');}, 
    "resist-cold-cleric",
    true,
    0,
    true);

cureLightWoundsCleric.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster) {
    let dialogue = document.querySelector('#fight-module-dialogue');
        if (this.numberOfUses <= 0)
        {
            SpellUtilities.cantCastSpell("Cure Light Wounds", dialogue);
            toggleShowSpellList();
    
        } else
        {
            this.numberOfUses -= 1;
    
            if (this.numberOfUses <= 0)
            {
                this.numberOfUses = 0;
            }
            toggleShowSpellList();
    
            finalCharacter.greyOutAttackButtons(monster1, monster2);
            dialogue.innerHTML = `<p>You cast Cure Light Wounds, which cures 2-7 hitpoints.</p>`;
        }


    console.log(monster1);
    console.log(monster2);
    console.log(continueNextChapter);
    console.log(attackedMonster);
    toggleShowSpellList();

};

lightCleric.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    let dialogue = document.querySelector('#fight-module-dialogue');
        if (this.numberOfUses <= 0)
        {
            SpellUtilities.cantCastSpell("Light", dialogue);
            toggleShowSpellList();
    
        } else
        {
            this.numberOfUses -= 1;
    
            if (this.numberOfUses <= 0)
            {
                this.numberOfUses = 0;
            }
            toggleShowSpellList();
    
            finalCharacter.greyOutAttackButtons(monster1, monster2);
            dialogue.innerHTML = `<p>You cast Light, which affects a 30 foot area.</p>`;
    
            let isBlindedM1 = monster1.status.some((x) => x === "Blind");
            let isBlindedM2 = monster2.status.some((x) => x === "Blind");
    
            //checking if M1 is alive -
    
            if ((attackedMonster === "Monster 1" && monster1.healthPoints > 0 && isBlindedM1 === false) || (attackedMonster === "Monster 1" && (monster1.healthPoints > 0 && isBlindedM1 === false)))
            {
                dialogue.innerHTML += `<p>${monster1.name} has been blinded.</p>`;
                monster1.status.push('Blind');
    
                let monster1Status = document.querySelector("#monster-one-status");
                monster1Status.innerHTML = `${monster1.status.join(', ')}`
    
                //need to make variable, push to an array, and then call the function expression
    
                let blindTimer = setTimeout(function ()
                {
                    
                    monster1.status.splice(monster1.status.indexOf("Blind"), 1);
    
                    Utilities.updateMonsterOne(monster1);
                    
                    let monster1Status = document.querySelector("#monster-one-status");
                    monster1Status.innerHTML = `${monster1.status.join(', ')}`;
    
                    console.log('Blind removed m1')
                }, 30000);
    
                finalCharacter.activeSpellStatuses.push(blindTimer);
    
                let blindTimerObject = {
                    id: blindTimer,
                    name: "Light Timer 1"
                };
    
                finalCharacter.activeSpellStatuses.push(blindTimerObject);
                console.log(finalCharacter.activeSpellStatuses)
    
                //end of setTimeout
    
            } else if ((attackedMonster === "Monster 2" && monster2.healthPoints > 0 && isBlindedM2 === false) || (attackedMonster === "Monster 2" && (monster2.healthPoints > 0 && isBlindedM2 === false)))
            {
                dialogue.innerHTML += `<p>${monster2.name} is blinded.</p>`;
                monster2.status.push('Blind');
                
                let monster2Status = document.querySelector("#monster-two-status");
                monster2Status.innerHTML = `${monster2.status.join(', ')}`
    
                let blindTimer2 = setTimeout(function ()
                {
                    monster2.status.splice(monster2.status.indexOf("Blind"), 1);
                   
                    Utilities.updateMonsterTwo(monster2);
    
                    let monsterTwoStatus = document.querySelector("#monster-two-status");
                    monsterTwoStatus.innerHTML = `${monster2.status.join(', ')}`;                
                    
                    console.log('blind removed m2')
    
                }, 30000);
    
                finalCharacter.activeSpellStatuses.push(blindTimer2);
                let blindTimerObject2 = {
                    id: blindTimer2,
                    name: "Light Timer 2"
                };
    
                finalCharacter.activeSpellStatuses.push(blindTimerObject2);
    
                console.log(finalCharacter.activeSpellStatuses)
    
            } else if (attackedMonster === "Monster 2")
            {
                dialogue.innerHTML += `<p>${monster2.name} was not affected.</p>`;
            } else if (attackedMonster === "Monster 1")
            {
                dialogue.innerHTML += `<p>${monster1.name} was not affected.</p>`;
            }
        }
}

export { cureLightWoundsCleric, detectEvilCleric, detectMagicCleric, purifyFoodAndWaterCleric, lightCleric, removeFearCleric, protectionFromEvilCleric, resistColdCleric };