export default class Armor {
    constructor (name, armorClass, encumbrance, armorCost) {
        this.name = name;
        this.armorClass = armorClass;
        this.encumbrance = encumbrance;
        this.armorCost = armorCost;
       
    }
};
let noArmor = new Armor('None', 9, 0, 0);
let robes = new Armor('Robes', 9, 50, 5);
let leatherArmor = new Armor('Leather Armor', 7, 200, 20);
let scaleMail = new Armor('Scale Mail', 6, 300, 30);
let chainMail = new Armor('Chain Mail', 5, 400, 40);
let bandedMail = new Armor('Banded Mail', 4, 450, 45);
let plateMail = new Armor('Plate Mail', 3, 500, 60);
let obsidianPlateMail = new Armor('Obsidian Plate Mail', 3, 200);

export { chainMail, leatherArmor, robes, noArmor, scaleMail, plateMail, bandedMail, obsidianPlateMail };
