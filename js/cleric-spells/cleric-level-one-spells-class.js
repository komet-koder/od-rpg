import
{
    finalCharacter
} from "../js_v14-3.js";

import { toggleShowSpellList } from "../js_v14-3.js";

export let clericLevelOneSpells = [];

export default class ClericLevelOneSpells {
    constructor (name, level, range, duration, effect, castingEffect, className, useBattle, damage, isAreaEffect, numberOfUses = 0) {
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
    }
};

let cureLightWoundsCleric = new ClericLevelOneSpells (
    "Cure/Cause Light Wounds", 
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


export { cureLightWoundsCleric, detectEvilCleric, detectMagicCleric, purifyFoodAndWaterCleric, lightCleric, removeFearCleric, protectionFromEvilCleric, resistColdCleric };