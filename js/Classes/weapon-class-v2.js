export default class Weapon
{
    constructor (name, damage, type, numOfHands, cost, encumbrance, attackType)
    {
        this.name = name;
        this.damage = damage;
        this.type = type;
        this.numOfHands = numOfHands;
        this.cost = cost;
        this.encumbrance = encumbrance;
        this.attackType = attackType;
    }


}


let noWeapon = new Weapon('None', 0, 'Melee', 1, 0, 0, "None");

let fists = new Weapon('Fists', 1, 'Melee', 1, 0, 0, "Blunt");

// 1d4 damage
let woodenClub = new Weapon('Wooden Club', 4, 'Melee', 1, 3, 50, "Blunt");
let dagger = new Weapon('Dagger', 4, 'Melee', 1, 3, 10, "Edged");
let sling = new Weapon('Sling', 4, 'Missile', 1, 2, 20, "Blunt");

// 1d6 damage
let shortBow = new Weapon('Short Bow', 6, 'Missile', 2, 25, 20, "Edged");
let longBow = new Weapon('Long Bow', 6, 'Missile', 2, 40, 30, "Edged");
let silverDagger = new Weapon('Silver Dagger', 6, 'Melee', 1, 30, 10, "Edged");
let handAxe = new Weapon('Hand Axe', 6, 'Melee', 1, 4, 30, "Edged");
let shortSword = new Weapon('Short Sword', 6, 'Melee', 1, 7, 30, "Edged");
let javelin = new Weapon('Javelin', 6, 'Missile', 1, 1, 20, "Edged");
let spear = new Weapon('Spear', 6, 'Melee', 1, 3, 30, "Edged");
let crossBow = new Weapon('Cross Bow', 6, 'Missile', 2, 30, 50, "Edged");
let mace = new Weapon('Mace', 6, 'Melee', 1, 5, 30, "Blunt");
let warHammer = new Weapon('War Hammer', 6, 'Melee', 1, 5, 50, "Blunt");

//1d8 damage
let battleAxe = new Weapon('Battle Axe', 8, 'Melee', 2, 7, 60, "Edged");
let normalSword = new Weapon('Normal Sword', 8, 'Melee', 1, 10, 60, "Edged");
let mahoganyStaff = new Weapon('Mahogany Staff', 6, 'Melee', 1, 20, 20);
let gemStaff = new Weapon('Gem Staff', 8, 'Melee', 1, 100, 20);

//1d10 damage
let silverSword = new Weapon('Silver Sword', 10, 'Melee', 1, 200, 50, "Edged");
let ebonyBow = new Weapon('Ebony Bow', 10, 'Missile', 2, 75, 30, "Edged");
let poleArm = new Weapon('Pole Arm', 10, 'Melee', 2, 7, 150, "Edged");
let twoHandedBroadSword = new Weapon('Two-Handed Sword', 10, 'Melee', 2, 15, 100, "Edged");


//mega weapon
let obsidianSword = new Weapon('Obsidian Sword', 100, 'Melee', 1, 1000, 40, "Edged");



export
{
    fists, normalSword, shortBow, silverSword, twoHandedBroadSword, longBow, ebonyBow, mahoganyStaff, gemStaff, noWeapon, obsidianSword, woodenClub, dagger,
    silverDagger, battleAxe, handAxe, crossBow, shortSword, mace, javelin, poleArm, sling, spear, warHammer
};