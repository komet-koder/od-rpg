export default class Spell {
    constructor (name, damage, healing) {
        this.name = name;
        this.damage = damage;
        this.healing = healing;
    }

    
};

let noSpell = new Spell('None', 0, 0);
let minorHealing = new Spell('Minor Healing', 0, 4);
let mediumHealing = new Spell('Medium Healing', 0, 6);
let majorHealing = new Spell('Major Healing', 0, 8);
let fireStorm = new Spell ('Fire Ball', 8, 0);
let earthStrike = new Spell('Earth Strike', 10, 0);
let lightening = new Spell('Lightening', 12, 0);
let dragonFang = new Spell('Dragon Fang', 500, 0)
let fireArrows = new Spell('Fire Arrows', 6, 0);



export { noSpell, mediumHealing, majorHealing, earthStrike, lightening, minorHealing, fireStorm, dragonFang, fireArrows };