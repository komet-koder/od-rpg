
export let clericLevelTwoSpells = [];

export default class ClericLevelTwoSpells {
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

let blessCleric = new ClericLevelTwoSpells ("Bless", 2, 60, 6, "Improves morale of friendly creatures by +1, give +1 hit and damage rolls", function() {console.log('Casting');}, "bless-cleric");
let findTrapsCleric = new ClericLevelTwoSpells ("Find Traps", 2, 0, 2, "Causes traps to glow with blue light with 30 feet", function() {console.log('Casting');}, "find-traps-cleric");
let holdPersonCleric = new ClericLevelTwoSpells ("Hold Person", 2, 180, 9, "Affects humans, humanoids, but not undead or creatures larger than Ogres", function() {console.log('Casting');}, "hold-person-cleric");
let knowAlignmentCleric = new ClericLevelTwoSpells ("Know Alignment", 2, 0, 1, "Caster discovers alignment of creatures or items withing 10 feet", function() {console.log('Casting');}, "know-alignment-cleric");
let resistFireCleric = new ClericLevelTwoSpells ("Resist Fire", 2, 30, 2, "Cannot be harmed by fire, +2 Saving Throw against all magical fire", function() {console.log('Casting');}, "resist-fire-cleric");
let silence15ftCleric = new ClericLevelTwoSpells ("Silence", 2, 180, 12, "Sphere of silence 30 feet across", function() {console.log('Casting');}, "silence-cleric");
let snakeCharmCleric = new ClericLevelTwoSpells ("Snake Charm", 2, 60, 5, "Charm 1 HD of snakes for each level of the cleric", function() {console.log('Casting');}, "snake-charm-cleric");
let speakWithAnimalCleric = new ClericLevelTwoSpells ("Speak With Animals", 2, 0, 6, "Cleric must name one animal", function() {console.log('Casting');}, "speak-with-animals-cleric");


export { blessCleric, findTrapsCleric, holdPersonCleric, knowAlignmentCleric, resistFireCleric, silence15ftCleric, snakeCharmCleric, speakWithAnimalCleric };