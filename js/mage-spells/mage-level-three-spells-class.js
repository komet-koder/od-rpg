import
{
    finalCharacter
} from "../js_v14-3.js";

import { toggleShowSpellList } from "../js_v14-3.js";

export default class MageLevelThreeSpells
{
    constructor (name, level, range, duration, effect, castingEffect, className, useBattle, damage, isAreaEffect, numberOfUses = 0, isUsedOnOthers, isUsedOnSelf)
    {
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
        this.isUsedOnOthers = isUsedOnOthers;
        this.isUsedOnSelf = isUsedOnSelf;
    }
};

let clairvoyance = new MageLevelThreeSpells("Clairvoyance", 3, 60, 12, "See through another's eyes", function () { console.log('Casting'); }, "clairvoyance", false, 0, false, 0, false, false);

let dispelMagic = new MageLevelThreeSpells("Dispel Magic", 3, 120, 999, "Destroys spells in a 20 foot cube", function () { console.log('Casting'); }, "dispel-magic", false, 0, true, 0, true, true);

//completed fireBall
let fireBall = new MageLevelThreeSpells("Fire Ball", 2, 240, 0, "Explosion in a sphere 40 foot diameter", function () { console.log('Casting'); }, "fire-ball", true, 8, true, 0, true, false);

let fly = new MageLevelThreeSpells("Fly", 3, 0, 6, "One creature may fly", function () { console.log('Casting'); }, "fly", false, 0, false, 0, true, true);

let haste = new MageLevelThreeSpells("Haste", 3, 240, 3, "Up to 24 creatures move double speed", function () { console.log('Casting'); }, "haste", true, 0, false, 0, true, true);

//
let holdPerson = new MageLevelThreeSpells("Hold Person", 3, 120, 1, "Parlyzes up to 4 creatures", function () { console.log('Casting'); }, "hold-person", true, 0, false, 0, true, false);

let infravision = new MageLevelThreeSpells("Infravision", 3, 0, 24, "One living creature", function () { console.log('Casting'); }, "infravision", false, 0, false, 0, true, true);

let invisibilityTenFoot = new MageLevelThreeSpells("Invisibility 10 feet radius", 3, 120, 999, "All creatures within 10 feet", function () { console.log('Casting'); }, "invisibility-ten-feet", true, 0, true, 0, false, true);

// completed lightenBolt
let lightningBolt = new MageLevelThreeSpells("Lightning Bolt", 3, 180, 0, "Bolt 60 feet long, 5 feet wide", function () { console.log('Casting'); }, "lightning-bolt", true, 6, true, 0, true, false);

let protectionFromEvilTenFoot = new MageLevelThreeSpells("Prot From Evil 10 ft radius", 3, 0, 12, "Barrier 20 feet in diameter", function () { console.log('Casting'); }, "protection-from-evil-ten-feet", true, 0, true, 0, false, true);

let protectionFromNormalMissiles = new MageLevelThreeSpells("Protection From Missiles", 3, 30, 12, "One creature", function () { console.log('Casting'); }, "protection-from-missiles", true, 0, false, 0, false, true);

let waterBreathing = new MageLevelThreeSpells("Water Breathing", 3, 30, 24, "One air-breathing creature", function () { console.log('Casting'); }, "water-breathing", false, 0, false, 0, true, true);

clairvoyance.castSpell = function ()
{
    console.log('Casting Clairvoyance')
}

dispelMagic.castSpell = function ()
{
    console.log('Casting Dispel Magic')
}

fly.castSpell = function ()
{
    console.log('Casting Fly')
}

haste.castSpell = function ()
{
    console.log('Casting Haste')
}

holdPerson.castSpell = function ()
{
    console.log('Casting Hold Person')
}

infravision.castSpell = function ()
{
    console.log('Casting Infravision')
}

invisibilityTenFoot.castSpell = function ()
{
    console.log('Casting Invisibility 10 Foot Radius')
}

protectionFromEvilTenFoot.castSpell = function ()
{
    console.log('Casting Protection from Evil 10 Foot Radius')
}

protectionFromNormalMissiles.castSpell = function ()
{
    console.log('Casting Protection from Normal Missiles')
}

waterBreathing.castSpell = function ()
{
    console.log('Casting Water Breathing')
}

fireBall.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    let dialogue = document.querySelector('#fight-module-dialogue');
    toggleShowSpellList();

    let thisSpellDamage = 0;

    let filteredSpells = finalCharacter.specialty.characterLevel.specialtySkills["Third Level Mage Spells"];
    let thisSpell = filteredSpells.filter((x) => x === fireBall);
    let filteredSpellDamage = thisSpell[0].damage;

    for (let i = 0; i < finalCharacter.specialty.characterLevel.level.level; i++)
    {

        let damageAccumulator = Math.ceil(Math.random(1) * filteredSpellDamage);
        thisSpellDamage += damageAccumulator;
    };

    let castingDialogue = `<p>You cast ${this.name}.</p>`;

    finalCharacter.areaAttackSpell(monster1, monster2, continueNextChapter, thisSpellDamage, this.name, castingDialogue);
}

lightningBolt.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    let dialogue = document.querySelector('#fight-module-dialogue');
    toggleShowSpellList();
    let thisSpellDamage = 0;

    let filteredSpells = finalCharacter.specialty.characterLevel.specialtySkills["Third Level Mage Spells"];
    let thisSpell = filteredSpells.filter((x) => x === lightningBolt);
    let filteredSpellDamage = thisSpell[0].damage;

    for (let i = 0; i < finalCharacter.specialty.characterLevel.level.level; i++)
    {

        let damageAccumulator = Math.ceil(Math.random(1) * filteredSpellDamage);
        thisSpellDamage += damageAccumulator;
    };

    let castingDialogue = `<p>You cast ${this.name}.</p>`;

    finalCharacter.areaAttackSpell(monster1, monster2, continueNextChapter, thisSpellDamage, this.name, castingDialogue);
}
export { clairvoyance, dispelMagic, fireBall, fly, haste, holdPerson, infravision, invisibilityTenFoot, lightningBolt, protectionFromEvilTenFoot, protectionFromNormalMissiles, waterBreathing }