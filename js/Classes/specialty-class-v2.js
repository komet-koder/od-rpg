//import fighter
import { fighterVeteran, fighterWarrior, fighterSwordmaster } from '../character-class-levels/fighter-level-class.js';

//import mage
import { mageMedium, mageSeer, mageConjurer } from '../character-class-levels/mage-level-class.js';

//import thief
import { apprentice, footpad, robber } from '../character-class-levels/thief-level-class.js';

//import elf
import { veteranMedium, warriorSeer, swordMasterConjurer } from '../character-class-levels/elf-level-class.js';

//import dwarf
import { dwarvenVeteran, dwarvenWarrior, dwarvenSwordmaster } from '../character-class-levels/dwarf-level-class.js';

//import halfling
import { halflingVeteran, halflingWarrior, halflingSwordmaster } from '../character-class-levels/halfling-level-class.js';

//import cleric
import { acolyte, adept, priest } from '../character-class-levels/cleric-level-class.js';

//import spells
import { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireStorm, fireArrows, dragonFang } from './spell-class-v2.js';
import { dragonWarriorVeteran } from '../character-class-levels/dragon-warrior-level-class.js';
import { traveller } from '../character-class-levels/adventurer-level-class.js';

//==============================================end imports===============================================//


export default class Specialty
{
    constructor (name, healthPoints, spell1, spell2, spell3, maxHealthPoints, characterExperience, characterLanguages, characterLevel)
    {
        this.name = name;
        this.healthPoints = healthPoints;
        this.spell1 = spell1;
        this.spell2 = spell2;
        this.spell3 = spell3;
        this.maxHealthPoints = maxHealthPoints;
        this.characterExperience = characterExperience || 0;
        this.chacterLanguages = characterLanguages || ["Common Tongue"];
        this.characterLevel = characterLevel || 1;

    };
};

let adventurer = new Specialty('Traveller', 0, noSpell, noSpell, noSpell, 0, 0, ["Common Tongue"], traveller);

let warrior = new Specialty('Warrior', 8, noSpell, noSpell, noSpell, 8, 0, ['Common Tongue'], fighterVeteran);

let highMage = new Specialty('High Mage', 500, minorHealing, fireStorm, fireArrows, 500, 0, ["Common Tongue"], mageConjurer);

let dragonWarrior = new Specialty('Dragon Warrior', 500, majorHealing, dragonFang, dragonFang, 500, 0, ["Common Tongue"], dragonWarriorVeteran);

let elf = new Specialty('Elf', 6, noSpell, noSpell, noSpell, 6, 0, ["Common Tongue", "Elvish", "Gnoll", "Hobgoblin", "Orc"], veteranMedium);

let dwarf = new Specialty('Dwarf', 8, noSpell, noSpell, noSpell, 8, 0, ["Common Tongue", "Dwarvish", "Gnome", "Goblin", "Kobold"], dwarvenVeteran);

let halfling = new Specialty('Halfling', 6, noSpell, noSpell, noSpell, 6, 0, ["Common Tongue", "Halfling"], halflingVeteran);

let cleric = new Specialty('Cleric', 6, minorHealing, noSpell, noSpell, 6, 0, ["Common Tongue"], acolyte);

let thief = new Specialty('Thief', 4, noSpell, noSpell, noSpell, 4, 0, ["Common Tongue"], apprentice);


export { adventurer, warrior, highMage, dragonWarrior, elf, dwarf, halfling, cleric, thief };




