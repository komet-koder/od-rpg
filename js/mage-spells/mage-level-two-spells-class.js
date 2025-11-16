import
{
    finalCharacter
} from "../js_v14-3.js";

import { toggleShowSpellList } from "../js_v14-3.js";
import { SpellUtilities } from "../Utilities/spellUtilityFunctions.js";
import { Utilities } from "../Utilities/utilityFunctions.js";

export let mageLevelTwoSpells = [];

export default class MageLevelTwoSpells
{
    constructor (name, level, range, duration, effect, castingEffect, className, useBattle, damage, isAreaEffect, numberOfUses = 0)
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
    }
};

//completed
let continualLight = new MageLevelTwoSpells("Continual Light", 2, 120, 999, "Volume of 60 foot diameter", function () { console.log('Casting'); }, "continual-light", true, 0, true);


let detectEvil = new MageLevelTwoSpells("Detect Evil", 2, 60, 2, "Everything within 60 feet", function () { console.log('Casting'); }, "detect-evil", false, 0, true);

//completed
let invisibility = new MageLevelTwoSpells("Invisibility", 2, 240, 999, "The Mage only", function () { console.log('Casting'); }, "invisibility", true, 0, false);


let esp = new MageLevelTwoSpells("ESP", 2, 60, 12, "All thoughts in one direction", function () { console.log('Casting'); }, "esp", false, 0, false);


let knock = new MageLevelTwoSpells("Knock", 2, 60, 1, "One lock or bar", function () { console.log('Casting'); }, "knock", false, 0, false);


let levitate = new MageLevelTwoSpells("Levitate", 2, 0, 6, "The Mage only", function () { console.log('Casting'); }, "levitate", false, 0, false);


let locateObject = new MageLevelTwoSpells("Locate Object", 2, 60, 2, "One object within range", function () { console.log('Casting'); }, "locate-object", false, 0, true);

//completed
let mirrorImage = new MageLevelTwoSpells("Mirror Image", 2, 0, 6, "The Mage only", function () { console.log('Casting'); }, "mirror-image", true, 0, false);

//battle spell
let phantasmalForce = new MageLevelTwoSpells("Phantasmal Force", 2, 999, 12, "20 foot volume", function () { console.log('Casting'); }, "phantasmal-force", true, 0, true);

//completed
let web = new MageLevelTwoSpells("Web", 2, 10, 48, "A volume of 10 by 10 by 10", function () { console.log('Casting'); }, "web", true, 0, true);


let wizardLock = new MageLevelTwoSpells("Wizard Lock", 2, 10, 999, "One portal or lock", function () { console.log('Casting'); }, "wizard-lock", false, 0, false);


let detectInvisible = new MageLevelTwoSpells("Detect Invisible", 2, 10, 6, "Detect invisibility", function () { console.log('Casting'); }, "detect-invisible", false, 0, true);

continualLight.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    let dialogue = document.querySelector('#fight-module-dialogue');
    if (this.numberOfUses <= 0)
    {
        SpellUtilities.cantCastSpell("Continual Light", dialogue);
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
        dialogue.textContent = `You cast Continual Light, which which affects a 60 foot area.`;

        let isBlindedM1 = monster1.status.some((x) => x === "Blind");
        let isBlindedM2 = monster2.status.some((x) => x === "Blind");

        //checking if M1 is alive -

        if ((attackedMonster === "Monster 1" && monster1.healthPoints > 0 && isBlindedM1 === false) || (attackedMonster === "Monster 1" && (monster1.healthPoints > 0 && isBlindedM1 === false)))
        {
            dialogue.textContent += `${monster1.name} has been blinded.`;
            monster1.status.push('Blind');
            let monster1Status = document.querySelector("#monster-one-status");
            monster1Status.innerHTML = `${monster1.status.join(', ')}`

            //need to make variable, push to an array, and then call the function expression

            let blindTimer = setTimeout(function ()
            {
                let removeBlindM1 = monster1.status.filter((x) => "Blind");
                monster1.status.splice(removeBlindM1); //removing Blind after function call
                
                Utilities.updateMonsterOne(monster1);
                                
                console.log('Blind removed m1')
            }, 60000);

            finalCharacter.activeSpellStatuses.push(blindTimer);
            //end of setTimeout

        } else if ((attackedMonster === "Monster 2" && monster2.healthPoints > 0 && isBlindedM2 === false) || (attackedMonster === "Monster 2" && (monster2.healthPoints > 0 && isBlindedM2 === false)))
        {
            dialogue.textContent += `${monster2.name} is blinded.`;
            monster2.status.push('Blind');
            let monster2Status = document.querySelector("#monster-two-status");
            monster2Status.innerHTML = `${monster2.status.join(', ')}`

            let blindTimer2 = setTimeout(function ()
            {
                let removeBlindM2 = monster2.status.filter((x) => "Blind");
                monster2.status.splice(removeBlindM2);
                
                Utilities.updateMonsterTwo(monster2);                
                
                console.log('blind removed m2')

            }, 60000);

            finalCharacter.activeSpellStatuses.push(blindTimer2);

        } else if (attackedMonster === "Monster 2")
        {
            dialogue.textContent += `${monster2.name} was not affected.`;
        } else if (attackedMonster === "Monster 1")
        {
            dialogue.textContent += `${monster1.name} was not affected.`;
        }
    }
}

detectEvil.castSpell = function ()
{
    console.log('Casting Detect Evil')
}

invisibility.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    let dialogue = document.querySelector('#fight-module-dialogue');
    console.log('Casting Invisibility')
    if (this.numberOfUses <= 0)
    {
        
        SpellUtilities.cantCastSpell("Invisibility", dialogue);
        toggleShowSpellList();

    } else if (finalCharacter.status.includes("Invisible"))
    {
        dialogue.textContent = `You are already invisible.`;
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
        dialogue.textContent = `You cast Invisibility, which makes you invisible.`;

        finalCharacter.status.push("Invisible");
        console.log(finalCharacter.status);

        dialogue.textContent += ` You are invisible until you attack or cast a spell.`;

        let addInvisibilityStatus = document.querySelector(".invisibility-status");


        addInvisibilityStatus.classList.toggle('hide-status')

        let invisibilityTimer = setTimeout(function ()
        {
            finalCharacter.status.splice(finalCharacter.status.indexOf("Invisible"), 1);
            if (!addInvisibilityStatus.classList.contains("hide-status"))
            {
                addInvisibilityStatus.classList.toggle('hide-status');
            }

            console.log('Invisibility removed from player')
        }, 30000);

        finalCharacter.activeSpellStatuses.push(invisibilityTimer);
        //end of setTimeout           
    }
}

esp.castSpell = function ()
{
    console.log('Casting ESP')
}

knock.castSpell = function ()
{
    console.log('Casting Knock')
}

levitate.castSpell = function ()
{
    console.log('Casting Levitate')
}

locateObject.castSpell = function ()
{
    console.log('Casting Locate Object')
}

mirrorImage.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    let dialogue = document.querySelector('#fight-module-dialogue');
    console.log('Casting Mirror Image');
    if (this.numberOfUses <= 0)
    {
        SpellUtilities.cantCastSpell("Mirror Image", dialogue);
        toggleShowSpellList();

    } else
    {
        this.numberOfUses -= 1;

        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }
        toggleShowSpellList();
        finalCharacter.mirrorImages = Math.ceil(Math.random(1) * 4);
        finalCharacter.greyOutAttackButtons(monster1, monster2, finalCharacter.mirrorImages);
        dialogue.textContent = `You cast Mirror Image, which which created ${finalCharacter.mirrorImages} more image(s) of you.`;


        // let addMirrorImageStatus = document.querySelector('#char-status');

        if (!finalCharacter.status.includes("Mirror Image"))
        {
            finalCharacter.status.push('Mirror Image')
            console.log(finalCharacter.status)
        }



        let addMirrorImageStatus = document.querySelector(".mirror-image-status");
        if (addMirrorImageStatus.classList.contains("hide-status"))
        {
            addMirrorImageStatus.classList.toggle('hide-status');
        }


        // addMirrorImageStatus.innerHTML = `
        // <h4 id='char-status' class='char-info-label'>Status: <span class="character-display-info">${finalCharacter.status.join(', ')}        
        // </span></h4>
        // `
    }

    let mirrorImageTimer = setTimeout(function ()
    {
        let removeMirrorImage = finalCharacter.status.filter((x) => "Mirror Image");
        finalCharacter.status.splice(removeMirrorImage); //removing Mirror Image after function call

        let removeMirrorImageStatus = document.querySelector(".mirror-image-status");

        if (!removeMirrorImageStatus.classList.contains('hide-status'))
        {
            removeMirrorImageStatus.classList.toggle('hide-status');
        }

        // let updateCharacterStatus = document.querySelector("#char-status");
        // updateCharacterStatus.innerHTML = `
        // <h4 id='char-status' class='char-info-label'>Status: <span class="character-display-info">${finalCharacter.status
        //     }</span></h4>`;
        console.log('Mirror Image removed from player')
        console.log("Statuses: ", finalCharacter.status)
    }, 30000);

    finalCharacter.activeSpellStatuses.push(mirrorImageTimer);
}

phantasmalForce.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    let dialogue = document.querySelector('#fight-module-dialogue');
    console.log('Casting Phantasmal Force')
    if (this.numberOfUses <= 0)
    {
        SpellUtilities.cantCastSpell("Phantasmal Force", dialogue);
        toggleShowSpellList();

    } else
    {
        this.numberOfUses -= 1;

        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }



        if (attackedMonster === "Monster 1")
        {
            let phantasmalForceScreen = document.querySelector('#phantasmalForce');
            console.log(phantasmalForceScreen)
            phantasmalForceScreen.classList.toggle('phantasmalForce-hide');
            let cancelPhantasmalForce = document.querySelector('[name="ph-cancel"]');
            cancelPhantasmalForce.addEventListener('click', function () { phantasmalForceScreen.classList.toggle('phantasmalForce-hide') }, false)
            console.log(cancelPhantasmalForce);
            console.log(phantasmalForceScreen.classList)
            toggleShowSpellList();




            finalCharacter.spell2AttackMonster1(monster1, monster2, continueNextChapter, this.damage, this.name);
        } else if (attackedMonster === "Monster 2")
        {
            toggleShowSpellList();




            finalCharacter.spell2AttackMonster2(monster1, monster2, continueNextChapter, this.damage, this.name);
        }

        //add random monsters/items in an array to pick which one attacks?
        //Troll lasts 1d4 turns
        //monsters attack the troll first, if it's hit, it disappears
        //Magic Missile
        //Fireball
        //Lightning Bolt 
        //Boulder
        //if it's a monster, how long does it last?
        //when does the phantasmal force disappear?
        //Monster is AC 9 and disappears when hit
        //if mage moves, takes any damage, or fails saving throws, it disappears
        //no real damage is inflicted (falls unconcious if hp = 0). 
        //recipient THINKS it is turned to stone/falls unconcious/etc.
        //wears off in 1-4 turns



        toggleShowSpellList();

        finalCharacter.greyOutAttackButtons(monster1, monster2);
        dialogue.textContent = `You cast Phantasmal Force and create a Troll to attack the monsters.`;
    }
}

web.castSpell = function (monster1, monster2, continueNextChapter, attackedMonster)
{
    let dialogue = document.querySelector('#fight-module-dialogue');
    console.log('Casting Web');

    //casts a web and prevents monsters from attacking like a sleep spell
    //Giants and other creatures with great strength can break through a web in 2 rounds. 
    //A human of average Strength (a score of 9-12) will take 2-8 (2d4) turns to
    //break through the web. 

    if (this.numberOfUses <= 0)
    {
        SpellUtilities.cantCastSpell("Web", dialogue);
        toggleShowSpellList();

    } else
    {
        this.numberOfUses -= 1;

        if (this.numberOfUses <= 0)
        {
            this.numberOfUses = 0;
        }

        toggleShowSpellList();

        let isWebbedM1 = monster1.status.some((x) => x === "Web");
        let isWebbedM2 = monster2.status.some((x) => x === "Web");
        console.table(isWebbedM1, monster2.status, monster1.status, isWebbedM2)
        console.log(isWebbedM2)

        //checking if M1 is alive -

        if ((monster1.healthPoints > 0 && isWebbedM1 === false))
        {
            dialogue.textContent += `${monster1.name} is stuck in the web.`;
            monster1.status.push('Web');
            let monster1Status = document.querySelector("#monster-one-status");
            console.log(monster1Status);
            monster1Status.textContent = `${monster1.status.join(', ')}`

            //need to make variable, push to an array, and then call the function expression

            let webTimer = setTimeout(function ()
            {
                let removeWebM1 = monster1.status.filter((x) => "Web");
                monster1.status.splice(removeWebM1); //removing Web after function call
                
                Utilities.updateMonsterOne(monster1);
                                
                console.log('Web removed m1')

            }, 30000);

            finalCharacter.activeSpellStatuses.push(webTimer);
            //end of setTimeout
        }

        if ((monster2.healthPoints > 0 && isWebbedM2 === false))
        {
            dialogue.textContent += `${monster2.name} is stuck in the web.`;
            monster2.status.push('Web');
            let monster2Status = document.querySelector("#monster-two-status");
            monster2Status.innerHTML = `${monster2.status.join(', ')}`

            let webTimer2 = setTimeout(function ()
            {
                let removeWebM2 = monster2.status.filter((x) => "Web");
                monster2.status.splice(removeWebM2);

                Utilities.updateMonsterTwo(monster2);
                
                console.log('Web removed m2');
                console.log(monster2.status)

            }, 30000);

            finalCharacter.activeSpellStatuses.push(webTimer2);
        }
    }
}

wizardLock.castSpell = function ()
{
    console.log('Casting Wizard Lock')
}

detectInvisible.castSpell = function ()
{
    console.log('Casting Detect Invisibility')
}

export { continualLight, detectEvil, invisibility, esp, knock, levitate, locateObject, mirrorImage, phantasmalForce, web, wizardLock, detectInvisible }