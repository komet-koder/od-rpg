//import other js modules to access

import {
  finalCharacter,
  continueChapterThreeFour,
  render,
  animate,
} from "../js_v14-3.js";
import Weapon from "./weapon-class-v2.js";
import {
  normalSword,
  shortBow,
  silverSword,
  twoHandedBroadSword,
  longBow,
  ebonyBow,
  mahoganyStaff,
  gemStaff,
  noWeapon,
  obsidianSword,
  woodenClub,
  dagger,
  silverDagger,
  battleAxe,
  handAxe,
  crossBow,
  shortSword,
  mace,
  javelin,
  poleArm,
  sling,
  spear,
  warHammer,
} from "./weapon-class-v2.js";
import Armor from "./armor-class-v2.js";
import {
  chainMail,
  leatherArmor,
  robes,
  noArmor,
  scaleMail,
  plateMail,
  bandedMail,
  obsidianPlateMail,
} from "./armor-class-v2.js";
import Specialty from "./specialty-class-v2.js";
import {
  adventurer,
  warrior,
  highMage,
  dragonWarrior,
  elf,
  dwarf,
  halfling,
  cleric,
  thief,
} from "./specialty-class-v2.js";
import {
  fighterVeteran,
  fighterWarrior,
  fighterSwordmaster,
} from "../character-class-levels/fighter-level-class.js";
import {
  veteranMedium,
  warriorSeer,
  swordMasterConjurer,
} from "../character-class-levels/elf-level-class.js";
import {
  apprentice,
  footpad,
  robber,
} from "../character-class-levels/thief-level-class.js";
import { dragonWarriorVeteran } from "../character-class-levels/dragon-warrior-level-class.js";
import {
  continualLight,
  detectEvil,
  invisibility,
  esp,
  knock,
  levitate,
  locateObject,
  mirrorImage,
  phantasmalForce,
  web,
  wizardLock,
  detectInvisible,
} from "../mage-spells/mage-level-two-spells-class.js";
import {
  charmPerson,
  detectMagic,
  floatingDisc,
  holdPortal,
  light,
  magicMissile,
  protectionFromEvil,
  readLanguages,
  shield,
  sleep,
  ventriloquism,
  readMagic,
} from "../mage-spells/mage-level-one-spells-class.js";
import {
  smallWolf,
  wolf1,
  wolf2,
  goblin,
  goblin1,
  goblin2,
  noMonster,
  fireBeetle,
  hobGoblin,
  bugBear,
  kobold,
  phantasmalTroll,
} from "./monster-class-v2.js";
import { Utilities } from "../Utilities/utilityFunctions.js";

//import { noAchievements, killedFarmWolves, spokeToRaynard } from './achievements-v1.js';

//==============================================end imports===============================================//

//exports Character class for other module access

export default class Character {
  constructor(
    name,
    specialty,
    armor,
    weapon,
    inventory1,
    inventory2,
    inventory3,
    enchantedItem,
    achievements,
    characterImage,
    treasure,
    hitRollTable,
    activeSpellStatuses,
    status,
    mirrorImages
  ) {
    this.name = name;
    this.specialty = specialty;
    this.armor = armor;
    this.weapon = weapon;
    this.inventory1 = inventory1;
    this.inventory2 = inventory2;
    this.inventory3 = inventory3;
    this.enchantedItem = enchantedItem;
    this.achievements = achievements;
    this.characterImage = characterImage;
    this.treasure = treasure;
    (this.hitRollTable = [
      [9, 10],
      [8, 11],
      [7, 12],
      [6, 13],
      [5, 14],
      [4, 15],
      [3, 16],
      [2, 17],
      [1, 18],
      [0, 19],
      [-1, 20],
    ]),
      (this.activeSpellStatuses = []);
    this.status = [];
    this.mirrorImages = 0;
    this.armorClass = 9;
  }

  //updates & initiates Character creation

  characterUpdate() {
    let strengthPlusAdjustment;
    let intelligencePlusAdjustment;
    let wisdomPlusAdjustment;
    let dexterityPlusAdjustment;
    let constitutionPlusAdjustment;
    let charismaPlusAdjustment;

    if (finalCharacter.attributes[0].adjustment > 0) {
      strengthPlusAdjustment = `+${finalCharacter.attributes[0].adjustment}`;
    } else {
      strengthPlusAdjustment = finalCharacter.attributes[0].adjustment;
    }

    if (finalCharacter.attributes[1].adjustment > 0) {
      intelligencePlusAdjustment = `+${finalCharacter.attributes[1].adjustment}`;
    } else {
      intelligencePlusAdjustment = finalCharacter.attributes[1].adjustment;
    }

    if (finalCharacter.attributes[2].adjustment > 0) {
      wisdomPlusAdjustment = `+${finalCharacter.attributes[2].adjustment}`;
    } else {
      wisdomPlusAdjustment = finalCharacter.attributes[2].adjustment;
    }

    if (finalCharacter.attributes[3].adjustment > 0) {
      dexterityPlusAdjustment = `+${finalCharacter.attributes[3].adjustment}`;
    } else {
      dexterityPlusAdjustment = finalCharacter.attributes[3].adjustment;
    }

    if (finalCharacter.attributes[4].adjustment > 0) {
      constitutionPlusAdjustment = `+${finalCharacter.attributes[4].adjustment}`;
    } else {
      constitutionPlusAdjustment = finalCharacter.attributes[4].adjustment;
    }

    if (finalCharacter.attributes[5].adjustment > 0) {
      charismaPlusAdjustment = `+${finalCharacter.attributes[5].adjustment}`;
    } else {
      charismaPlusAdjustment = finalCharacter.attributes[5].adjustment;
    }


    //name
    let charName = document.querySelector('#char-name > .character-display-info');
    charName.innerHTML = finalCharacter.name;

    //speciality
    let charSpecialty = document.querySelector('#char-specialty > .character-display-info');
    charSpecialty.innerHTML = finalCharacter.specialty.name;

    //level
    let charLevel = document.querySelector('#char-level > .character-display-info');
    charLevel.innerHTML = finalCharacter.specialty.characterLevel.level.level;

    //armor
    let charArmor = document.querySelector('.armor-tooltip > .character-display-info');
    charArmor.innerHTML = finalCharacter.armor.name;
    
    let charArmorClass = document.querySelector('.armor-tooltiptext');
    charArmorClass.innerHTML = `Armor Class: ${finalCharacter.armor.armorClass}`

    //weapon
    let charWeapon = document.querySelector('.weapon-tooltip > .character-display-info');

    charWeapon.innerHTML = finalCharacter.weapon.name;

    let charWeaponDamage = document.querySelector('.weapon-tooltiptext');
    charWeaponDamage.innerHTML = `Damage: ${finalCharacter.weapon.damage}`;

    //strength
    let charStrength = document.querySelector('#char-strength > .character-display-attributes-str');
    charStrength.innerHTML = finalCharacter.attributes[0].name.slice(0,3);

    let charStrengthScore = document.querySelector('#char-strength > .character-display-attributes-scores-str');
    charStrengthScore.innerHTML = finalCharacter.attributes[0].score;

    let charStrengthAdjustment = document.querySelector('#char-strength > .character-display-attributes-scores-adj-str');
    charStrengthAdjustment.innerHTML = strengthPlusAdjustment;

    let charStrengthCircle = document.querySelector('circle.circle-str');
    charStrengthCircle.setAttribute("stroke-dashoffset", finalCharacter.attributes[0].dashArrayAdj());

    //intelligence
    let charIntelligence = document.querySelector('#char-intelligence > .character-display-attributes-int');
    charIntelligence.innerHTML = finalCharacter.attributes[1].name.slice(0,3);

    let charIntelligenceScore = document.querySelector('#char-intelligence > .character-display-attributes-scores-int');
    charIntelligenceScore.innerHTML = finalCharacter.attributes[1].score;

    let charIntelligenceAdjustment = document.querySelector('#char-intelligence > .character-display-attributes-scores-adj-int');
    charIntelligenceAdjustment.innerHTML = intelligencePlusAdjustment;

    let charIntelligenceCircle = document.querySelector('circle.circle-int');
    charIntelligenceCircle.setAttribute("stroke-dashoffset", finalCharacter.attributes[1].dashArrayAdj());

    //wisdom
    let charWisdom = document.querySelector('#char-wisdom > .character-display-attributes-wis');
    charWisdom.innerHTML = finalCharacter.attributes[2].name.slice(0,3);

    let charWisdomScore = document.querySelector('#char-wisdom > .character-display-attributes-scores-wis');
    charWisdomScore.innerHTML = finalCharacter.attributes[2].score;

    let charWisdomAdjustment = document.querySelector('#char-wisdom > .character-display-attributes-scores-adj-wis');
    charWisdomAdjustment.innerHTML = wisdomPlusAdjustment;

    let charWisdomCircle = document.querySelector('circle.circle-wis');
    charWisdomCircle.setAttribute("stroke-dashoffset", finalCharacter.attributes[2].dashArrayAdj());

    //dexterity
    let charDexterity = document.querySelector('#char-dexterity > .character-display-attributes-dex');
    charDexterity.innerHTML = finalCharacter.attributes[3].name.slice(0,3);

    let charDexterityScore = document.querySelector('#char-dexterity > .character-display-attributes-scores-dex');
    charDexterityScore.innerHTML = finalCharacter.attributes[3].score;

    let charDexterityAdjustment = document.querySelector('#char-dexterity > .character-display-attributes-scores-adj-dex');
    charDexterityAdjustment.innerHTML = dexterityPlusAdjustment;

    let charDexterityCircle = document.querySelector('circle.circle-dex');
    charDexterityCircle.setAttribute("stroke-dashoffset", finalCharacter.attributes[3].dashArrayAdj());
    
    //constitution
    let charConstitution = document.querySelector('#char-constitution > .character-display-attributes-con');
    charConstitution.innerHTML = finalCharacter.attributes[4].name.slice(0,3);

    let charConstitutionScore = document.querySelector('#char-constitution > .character-display-attributes-scores-con');
    charConstitutionScore.innerHTML = finalCharacter.attributes[4].score;

    let charConstitutionAdjustment = document.querySelector('#char-constitution > .character-display-attributes-scores-adj-con');
    charConstitutionAdjustment.innerHTML = constitutionPlusAdjustment;

    let charConstitutionCircle = document.querySelector('circle.circle-con');
    charConstitutionCircle.setAttribute("stroke-dashoffset", finalCharacter.attributes[4].dashArrayAdj());

    //charisma
    let chaCharisma = document.querySelector('#char-charisma > .character-display-attributes-cha');
    chaCharisma.innerHTML = finalCharacter.attributes[5].name.slice(0,3);
    
    let charCharismaScore = document.querySelector('#char-charisma > .character-display-attributes-scores-cha');
    charCharismaScore.innerHTML = finalCharacter.attributes[5].score;

    let charCharismaAdjustment = document.querySelector('#char-charisma > .character-display-attributes-scores-adj-cha');
    charCharismaAdjustment.innerHTML = charismaPlusAdjustment;

    let charCharismaCircle = document.querySelector('circle.circle-cha');
    charCharismaCircle.setAttribute("stroke-dashoffset", finalCharacter.attributes[5].dashArrayAdj());

/*--- update saving throws ---*/
    //poison
    let savingThrowPoison = document.querySelector('#saving-throw-poison > .saving-throw-score');

    savingThrowPoison.innerHTML = finalCharacter.specialty.characterLevel.level.savingThrows["Poison or Death Ray"];

    //magic wand
    let savingThrowWand = document.querySelector('#saving-throw-wand > .saving-throw-score');

    savingThrowWand.innerHTML = finalCharacter.specialty.characterLevel.level.savingThrows["Magic Wand"];

    //paralysis
  let savingThrowParalysis = document.querySelector('#saving-throw-paralysis > .saving-throw-score');

    savingThrowParalysis.innerHTML = finalCharacter.specialty.characterLevel.level.savingThrows["Turn to Stone or Paralysis"];

    //dragon breath
  let savingThrowDragonBreath = document.querySelector('#saving-throw-dragon-breath > .saving-throw-score');

    savingThrowDragonBreath.innerHTML = finalCharacter.specialty.characterLevel.level.savingThrows["Dragon Breath"];

    //magic staff
    let savingThrowStaff = document.querySelector('#saving-throw-staff > .saving-throw-score');

    savingThrowStaff.innerHTML = finalCharacter.specialty.characterLevel.level.savingThrows["Spells or Magic Staff"];

/*---UPDATE CHARACTER STATS ---*/
    //ac gauge
    let acGuage = document.querySelector('.ac-guage > .ac-guage-value');
    acGuage.innerHTML = finalCharacter.armorClass - finalCharacter.attributes[3].adjustment;  

    //hp guage
    let hpGuageCurrent = document.querySelector('.hitpoint-guage-value-current');
  
    hpGuageCurrent.innerHTML = finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment <= 0 ? 0 : finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment;

    let hpGuageTotal = document.querySelector('.hitpoint-guage-value-total');
    
    hpGuageTotal.textContent = finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment <= 0 ? 0 : finalCharacter.specialty.healthPoints +
    finalCharacter.attributes[4].adjustment;
    
    //xp guage
    let xpGuageCurrent = document.querySelector('.xp-guage-value-current');
    
    xpGuageCurrent.innerHTML = finalCharacter.specialty.characterExperience;
    
    let xpGuageTotal = document.querySelector('.xp-guage-value-total');

    xpGuageTotal.innerHTML = finalCharacter.specialty.characterLevel.level.maxXP;
    
    console.log(finalCharacter);

    //populating normal-equipment tab

    for (let i = 0; i < finalCharacter.inventory.length; i++) {
      let updateInventory = document.querySelector("#normal-equipment-list");
      updateInventory.innerHTML += `${finalCharacter.inventory[i].name} <br>`;
    }
  }

//confirms to attack monsters and populates monster-info section

  confirmAttack(monsterOne, monsterTwo) {
    //----------------TRYING TO EITHER REMOVE OR CHANGE COLOR OF ATTACK BUTTON IF MONSTER1 IS DEAD-------------

    if (monsterOne.healthPoints <= 0) {
      let removeMonsterOneAttackButton = document.querySelector(
        ".attack-monster-one"
      );
      removeMonsterOneAttackButton.classList.add("monster1-dead");

      let removeMonsterOneSpellAttack = document.querySelector(
        ".monster-one-spell-list"
      );

      if (removeMonsterOneSpellAttack) {
        removeMonsterOneSpellAttack.classList.add("monster1-dead");
      }
    }

    if (monsterTwo.healthPoints <= 0) {
      let removeMonsterTwoAttackButton = document.querySelector(
        ".attack-monster-two"
      );
      removeMonsterTwoAttackButton.classList.add("monster1-dead");

      let removeMonsterTwoSpellAttack = document.querySelector(
        ".monster-two-spell-list"
      );

      if (removeMonsterTwoSpellAttack) {
        removeMonsterTwoSpellAttack.classList.add("monster1-dead");
      }

      let removeMonsterTwoSpellHighlight = document.querySelectorAll(
        ".monster-two-spell-list"
      );
      for (let i = 0; i < removeMonsterTwoSpellHighlight.length; i++) {
        removeMonsterTwoSpellHighlight[i].classList.add("monster2-spell-dead");
      }
    }

    if (monsterOne.healthPoints <= 0 && monsterTwo.healthPoints <= 0) {
      let removeAreaAttackSpellButton = document.querySelector(".area-attack");
      removeAreaAttackSpellButton.classList.add("monster1-dead");
    }

    //----------------------------------------------------------------------------------------------------------
    if (monsterTwo.name = " ") {

      let monsterInfo = document.querySelector("#monster-info");
      monsterInfo.classList.add("monster-info-one-monster");

      monsterInfo.innerHTML = `
        <div class="monster-one-info-heading"> ${monsterOne.name}</div>
        <div class="monster" id="monster-one">
          <div class='monster-info-module'>
            <div id="monster-one-hp">
              <div>Hit Points</div>
              <progress class='monster-hp-prog-bar' id="monster-one-hp-progress-bar" max="${monsterOne.startingHealthPoints}" value="${monsterOne.healthPoints}"></progress>
              <div>${monsterOne.healthPoints}</div>
              </div> 
            <div id="monster-one-ap">Armor Class: ${monsterOne.armorClass}</div>
            <div id="monster-one-damage">Damage: ${monsterOne.damage}</div>
            <div id="monster-one-status-heading">Status</div>
            <div id="monster-one-status">${monsterOne.status}</div>           
            <div id="canvas-area-monster-one">                  
              <canvas id="canvas-monster-one"></canvas>
            </div>
          </div>  
        </div>`
              let monsterInfoModule = document.querySelector(".monster-info-module");
      monsterInfoModule.classList.add("monster-info-module-one-monster");
    } else {
      let monsterInfo = document.querySelector("#monster-info");
    monsterInfo.innerHTML = `
        <div class="monster-one-info-heading"> ${monsterOne.name}</div>
        <div class="monster" id="monster-one">
          <div class='monster-info-module'>
            <div id="monster-one-hp">
              <div>Hit Points</div>
              <progress class='monster-hp-prog-bar' id="monster-one-hp-progress-bar" max="${monsterOne.startingHealthPoints}" value="${monsterOne.healthPoints}"></progress>
              <div>${monsterOne.healthPoints}</div>
              </div> 
            <div id="monster-one-ap">Armor Class: ${monsterOne.armorClass}</div>
            <div id="monster-one-damage">Damage: ${monsterOne.damage}</div>
            <div id="monster-one-status-heading">Status</div>
            <div id="monster-one-status">${monsterOne.status}</div>           
            <div id="canvas-area-monster-one">                  
              <canvas id="canvas-monster-one"></canvas>
            </div>
          </div>  
        </div>
        <div class="monster-two-info-heading"> ${monsterTwo.name}</div>
        <div class="monster" id="monster-two">
          <div class='monster-info-module'>
            <div id="monster-two-hp">
              <div>Hit Points</div>            
              <progress class='monster-hp-prog-bar'  id="monster-two-hp-progress-bar" max="${monsterTwo.startingHealthPoints}" value="${monsterTwo.healthPoints}"></progress>
              <div>${monsterTwo.healthPoints}</div>
            </div> 
            <div id="monster-two-ap">Armor Class: ${monsterTwo.armorClass}</div>
            <div id="monster-two-damage">Damage: ${monsterTwo.damage}</div> 
            <div id="monster-two-status-heading">Status</div>
            <div id="monster-two-status">${monsterTwo.status}</div>
            <div id="canvas-area-monster-two">                  
              <canvas id="canvas-monster-two"></canvas>
            </div>    
          </div>        
        </div>

        `;
    }
    
  }

  //attacking monster 1

  checkLevelUp() {
    if (finalCharacter.specialty.characterLevel.level.maxXP) {
      if (
        finalCharacter.specialty.characterExperience >
        finalCharacter.specialty.characterLevel.level.maxXP
      ) {
        alert("Congratulations, you have achieved the next level!");
        let modalConfig = {
          id: "",
          class: "level-up-modal",
          buttonID: "",
          buttonClass: "close-level-up-modal",
          buttonText: "Close",
          modalText: "Congratulations, you have achieved the next level!"
        }
        Utilities.createModal(modalConfig);
      }
    } else {
      return;
    }
  }

  weaponAttackMonster1(
    monster1,
    monster2,
    weapon,
    continueNextChapter,
    acAdjustment = 0,
    damageAdjustment = 0
  ) {
    let self = this;
    let hitRollSucceed = function (enemy1, finalCharacter) {
      let attackDialogue = document.querySelector("#fight-module-dialogue");
      attackDialogue.innerHTML = `
        <p>You attack the ${monster1.name} with your ${finalCharacter.weapon.name} and cause ${inflictedDamage} points of damage.</p>
      `;

      if (
        monster1.status.includes("Sleep") &&
        finalCharacter.weapon.attackType === "Edged"
      ) {
        monster1.healthPoints = 0;
        
        alert(
          `The ${monster1.name} was asleep, and was killed instantly with your attack.`
        );

        let modalConfig = {
          id: "",
          class: "sleeping-monster-killed-modal",
          buttonID: "",
          buttonClass: "close-sleeping-monster-killed-modal",
          buttonText: "Close",
          modalText: `The ${monster1.name} was asleep, and was killed instantly with your attack.`
        }
        Utilities.createModal(modalConfig);       
        
        finalCharacter.greyOutAttackButtons(monster1, monster2);
        
        Utilities.updateMonsterOne(monster1);      
      } else if (
        monster1.status.includes("Sleep") &&
        finalCharacter.weapon.attackType !== "Edged"
      ) {
        alert(
          `The ${monster1.name} was asleep, but woke up after being struck by your ${finalCharacter.weapon.name}.`
        );

        let modalConfig = {
          id: "",
          class: "sleeping-monster-woke-modal",
          buttonID: "",
          buttonClass: "close-sleeping-monster-woke-modal",
          buttonText: "Close",
          modalText: `The ${monster1.name} was asleep, but woke up after being struck by your ${finalCharacter.weapon.name}.`
        }
        Utilities.createModal(modalConfig);

        monster1.healthPoints = monster1.healthPoints - inflictedDamage;
        
        Utilities.updateMonsterOne(monster1);

        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        monster1.status.splice(monster1.status.indexOf("Sleep"), 1);
        let monster1Status = document.querySelector("#monster-one-status");
        monster1Status.innerHTML = `${monster1.status.join(
          ", "
        )}`;
        finalCharacter.greyOutAttackButtons(monster1, monster2);
      }

      //checking if monster is charmed
      else if (monster1.status.includes("Charmed")) {
        alert(
          `The ${monster1.name} was charmed, but the charm was broken after being attacked.`
        );

        let modalConfig = {
          id: "",
          class: "charmed-monster-broken-modal",
          buttonID: "",
          buttonClass: "close-charmed-monster-broken-modal",
          buttonText: "Close",
          modalText: `The ${monster1.name} was charmed, but the charm was broken after being attacked.`
        }
        Utilities.createModal(modalConfig);

        monster1.healthPoints = monster1.healthPoints - inflictedDamage;
        
        Utilities.updateMonsterOne(monster1);

        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        monster1.status.splice(monster1.status.indexOf("Charmed"), 1);
        let monster1Status = document.querySelector("#monster-one-status");
        monster1Status.innerHTML = `${monster1.status.join(
          ", "
        )}`;
        finalCharacter.greyOutAttackButtons(monster1, monster2);
      } else if (finalCharacter.status.includes("Invisibility")) {
        alert(
          `You were invisible and the ${monster1.name} could not see you, but the spell was broken after you attacked`
        );

        let modalConfig = {
          id: "",
          class: "invisibility-spell-broken-modal",
          buttonID: "",
          buttonClass: "close-invisibility-spell-broken-modal",
          buttonText: "Close",
          modalText: `You were invisible and the ${monster1.name} could not see you, but the spell was broken after you attacked.`
        }
        Utilities.createModal(modalConfig);

        monster1.healthPoints = monster1.healthPoints - inflictedDamage;
        
        Utilities.updateMonsterOne(monster1);

        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        monster1.status.splice(
          monster1.status.indexOf("Visibility Impaired"),
          1
        );
        let monster1Status = document.querySelector("#monster-one-status");
        monster1Status.innerHTML = `${monster1.status.join(
          ", "
        )}`;
        finalCharacter.greyOutAttackButtons(monster1, monster2);
      }

      //CHECKING ATTACK INTERACTION
      else if (monster1.healthPoints - inflictedDamage > 0) {
        monster1.healthPoints = monster1.healthPoints - inflictedDamage;
        
        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//

        Utilities.updateMonsterOne(monster1);

        finalCharacter.greyOutAttackButtons(monster1, monster2);

        //END
      } else if (monster1.healthPoints - inflictedDamage <= 0) {
        monster1.healthPoints = 0;

        Utilities.updateMonsterOne(monster1);
        
        let defeatMonster1 = document.querySelector("#fight-module-dialogue");
        defeatMonster1.innerHTML = `<p>Congratulations, you defeated the Monster 1!</p>`;

        let characterExperienceGuage = document.querySelector(
          ".xp-guage-value-current"
        );
        characterExperienceGuage.textContent =
          finalCharacter.specialty.characterExperience;

        let characterXPGuage = document.querySelector(".circle-xp");

        let characterXPGuageDashoffset =
          380 -
          (240 / finalCharacter.specialty.characterLevel.level.maxXP) *
          finalCharacter.specialty.characterExperience;

        if (characterXPGuageDashoffset <= 140) {
          characterXPGuageDashoffset = 140;
        }

        if (characterXPGuageDashoffset >= 380) {
          characterXPGuageDashoffset = 380;
        }

        characterXPGuage.style.strokeDashoffset = characterXPGuageDashoffset;

        //----------------------------trying to remove monster attack button--------------//

        let removingMonster1Button =
          document.getElementsByClassName("attack-monster-one");
        removingMonster1Button[0].classList.add("monster1-dead");

        let removeMonsterOneSpellHighlight = document.querySelectorAll(
          ".monster-one-spell-list"
        );
        for (let i = 0; i < removeMonsterOneSpellHighlight.length; i++) {
          removeMonsterOneSpellHighlight[i].classList.add(
            "monster1-spell-dead"
          );
        }

        //-------------------------------------------------------------------//
      }
      finalCharacter.confirmMonstersDead(
        monster1,
        monster2,
        continueNextChapter
      );
    };
    //ADD HITROLL VALUE

    let playerHitRollValue =
      Math.ceil(Math.random() * 20) +
      finalCharacter.attributes[0].adjustment +
      acAdjustment;

    if (playerHitRollValue > 20) {
      playerHitRollValue = 20;
    }

    let monsterArmorClass = monster1.armorClass;

    //END HITROLL VALUE

    let inflictedDamage =
      Math.ceil(Math.random(1) * finalCharacter.weapon.damage) +
      finalCharacter.attributes[0].adjustment +
      damageAdjustment;
    if (inflictedDamage <= 0) {
      inflictedDamage = 0;
    }

    let checkPlayerHitRoll = (
      playerHitRollValue1,
      monsterArmorClass1,
      playerHitRoll1
    ) => {
      if (finalCharacter.status.includes("Invisible")) {
        alert(
          `You were invisible and the ${monster1.name} could not see you, but the spell was broken after you attacked`
        );

        let modalConfig = {
          id: "",
          class: "invisibility-spell-broken-modal",
          buttonID: "",
          buttonClass: "close-invisibility-spell-broken-modal",
          buttonText: "Close",
          modalText: `You were invisible and the ${monster1.name} could not see you, but the spell was broken after you attacked.`
        }
        Utilities.createModal(modalConfig);
        finalCharacter.status.splice(
          finalCharacter.status.indexOf("Invisible"),
          1
        );

        let addInvisibilityStatus = document.querySelector(
          ".invisibility-status"
        );
        addInvisibilityStatus.classList.toggle("hide-status");

      }
      for (let i = 0; i < playerHitRoll1.length; i++) {
        if (playerHitRoll1[i][0] === monsterArmorClass1) {
          if (playerHitRollValue1 < playerHitRoll1[i][1]) {
            let modalConfig = {
              id: "",
              class: "player-misses-modal",
              buttonID: "",
              buttonClass: "close-player-misses-modal",
              buttonText: "Close",
              modalText: "Player misses!"
            }
            Utilities.createModal(modalConfig);
            finalCharacter.greyOutAttackButtons(monster1, monster2);
          } else {
            hitRollSucceed(monster1, finalCharacter);
          }
        }
      }
    };
    checkPlayerHitRoll(
      playerHitRollValue,
      monsterArmorClass,
      finalCharacter.hitRollTable
    );
  }

  weaponAttackMonster2(
    monster1,
    monster2,
    weapon,
    continueNextChapter,
    acAdjustment = 0,
    damageAdjustment = 0
  ) {
    let self = this;

    let inflictedDamage =
      Math.ceil(Math.random(1) * finalCharacter.weapon.damage) +
      finalCharacter.attributes[0].adjustment;
    if (inflictedDamage <= 0) {
      inflictedDamage = 0;
    }

    let hitRollSucceed = function (enemy2, finalCharacter) {
      let attackDialogue = document.getElementById("fight-module-dialogue");
      attackDialogue.innerHTML = `
          <p>You attack the ${monster2.name} with your ${finalCharacter.weapon.name} and cause ${inflictedDamage} points of damage.</p>`;

      //CHECKING ATTACK INTERACTION

      if (
        monster2.status.includes("Sleep") &&
        finalCharacter.weapon.attackType === "Edged"
      ) {
        monster2.healthPoints = 0;
        alert(
          `The ${monster2.name} was asleep, and was killed instantly with your attack.`
        );

        let modalConfig = {
          id: "",
          class: "sleeping-monster-killed-modal",
          buttonID: "",
          buttonClass: "close-sleeping-monster-killed-modal",
          buttonText: "Close",
          modalText: `The ${monster2.name} was asleep, and was killed instantly with your attack.`
        }
        Utilities.createModal(modalConfig);

        finalCharacter.greyOutAttackButtons(monster1, monster2);
        
        Utilities.updateMonsterTwo(monster2);
        
      } else if (
        monster2.status.includes("Sleep") &&
        finalCharacter.weapon.attackType !== "Edged"
      ) {
        alert(
          `The ${monster2.name} was asleep, but woke up after being struck by your ${finalCharacter.weapon.name}.`
        );

        let modalConfig = {
          id: "",
          class: "charmed-monster-broken-modal",
          buttonID: "",
          buttonClass: "close-charmed-monster-broken-modal",
          buttonText: "Close",
          modalText: `The ${monster2.name} was asleep, but woke up after being struck by your ${finalCharacter.weapon.name}.`
        }
        Utilities.createModal(modalConfig);

        monster2.healthPoints = monster2.healthPoints - inflictedDamage;
        
        Utilities.updateMonsterTwo(monster2);

        let monster2Status = document.querySelector("#monster-two-status");
        monster2Status.innerHTML = `${monster2.status.join(
          ", "
        )}`;


        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        monster2.status.splice(monster2.status.indexOf("Sleep"), 1);

        finalCharacter.greyOutAttackButtons(monster1, monster2);
      } else if (monster2.status.includes("Charmed")) {
        alert(
          `The ${monster2.name} was charmed, but the charm was broken after being attacked`
        );

        let modalConfig = {
          id: "",
          class: "charmed-monster-broken-modal",
          buttonID: "",
          buttonClass: "close-charmed-monster-broken-modal",
          buttonText: "Close",
          modalText: `The ${monster2.name} was charmed, but the charm was broken after being attacked.`
        }
        Utilities.createModal(modalConfig);

        monster2.healthPoints = monster2.healthPoints - inflictedDamage;
        
        Utilities.updateMonsterTwo(monster2);

        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        monster2.status.splice(monster2.status.indexOf("Charmed"), 1);
        let monster2Status = document.querySelector("#monster-two-status");
        monster2Status.innerHTML = `${monster2.status.join(
          ", "
        )}`;

        finalCharacter.greyOutAttackButtons(monster2, monster2);
      } else if (monster2.status.includes("Visibility Impaired")) {
        alert(
          `You were invisible and the ${monster2.name} could not see you, but the spell was broken after you attacked`
        );

        let modalConfig = {
          id: "",
          class: "invisibility-spell-broken-modal",
          buttonID: "",
          buttonClass: "close-invisibility-spell-broken-modal",
          buttonText: "Close",
          modalText: `You were invisible and the ${monster2.name} could not see you, but the spell was broken after you attacked.`
        }
        Utilities.createModal(modalConfig);

        monster2.healthPoints = monster2.healthPoints - inflictedDamage;
        
        Utilities.updateMonsterTwo(monster2);
        
        let updatedMonsterHP = document.querySelector("#monster-two-hp");
        
        //ATTEMPTING TO GREY OUT ATTACK MODULE BUTTONS//
        monster2.status.splice(
          monster2.status.indexOf("Visibility Impaired"),
          1
        );
        let monster2Status = document.querySelector("#monster-two-status");
        monster2Status.innerHTML = `${monster2.status.join(
          ", "
        )}`;
        finalCharacter.greyOutAttackButtons(monster1, monster2);
      } else if (monster2.healthPoints - inflictedDamage > 0) {
        monster2.healthPoints = monster2.healthPoints - inflictedDamage;
        
        Utilities.updateMonsterTwo(monster2);

        finalCharacter.greyOutAttackButtons(monster1, monster2);
      } else if (monster2.healthPoints - inflictedDamage <= 0) {
        monster2.healthPoints = 0;

        Utilities.updateMonsterTwo(monster2);
        
        let defeatMonster2 = document.querySelector("#fight-module-dialogue");
        defeatMonster2.innerHTML = `
          <p>Congratulations, you defeated the Monster 2!</p>
        `;

        let characterExperienceGuage = document.querySelector(
          ".xp-guage-value-current"
        );
        characterExperienceGuage.textContent =
          finalCharacter.specialty.characterExperience;

        let characterXPGuage = document.querySelector(".circle-xp");

        let characterXPGuageDashoffset =
          380 -
          (240 / finalCharacter.specialty.characterLevel.level.maxXP) *
          finalCharacter.specialty.characterExperience;

        if (characterXPGuageDashoffset <= 140) {
          characterXPGuageDashoffset = 140;
        }

        if (characterXPGuageDashoffset >= 380) {
          characterXPGuageDashoffset = 380;
        }

        characterXPGuage.style.strokeDashoffset = characterXPGuageDashoffset;

        let removingMonster2Button =
          document.getElementsByClassName("attack-monster-two");
        removingMonster2Button[0].classList.add("monster1-dead");

        let removeMonsterTwoSpellHighlight = document.querySelectorAll(
          ".monster-two-spell-list"
        );
        for (let i = 0; i < removeMonsterTwoSpellHighlight.length; i++) {
          removeMonsterTwoSpellHighlight[i].classList.add(
            "monster2-spell-dead"
          );
        }
      }
      finalCharacter.confirmMonstersDead(
        monster1,
        monster2,
        continueNextChapter
      );
    };

    let playerHitRollValue =
      Math.ceil(Math.random() * 20) +
      finalCharacter.attributes[0].adjustment +
      acAdjustment;

    if (playerHitRollValue > 20) {
      playerHitRollValue = 20;
    }

    let monsterArmorClass = monster1.armorClass;

    //END HITROLL VALUE

    let inflictedDamage2 =
      Math.ceil(Math.random(1) * finalCharacter.weapon.damage) +
      finalCharacter.attributes[0].adjustment +
      damageAdjustment;
    if (inflictedDamage2 <= 0) {
      inflictedDamage2 = 0;
    }

    let checkPlayerHitRoll = (
      playerHitRollValue1,
      monsterArmorClass1,
      playerHitRoll1
    ) => {
      if (finalCharacter.status.includes("Invisible")) {
        alert(
          `You were invisible and the ${monster2.name} could not see you, but the spell was broken after you attacked`
        );

        let modalConfig = {
          id: "",
          class: "invisibility-spell-broken-modal",
          buttonID: "",
          buttonClass: "close-invisibility-spell-broken-modal",
          buttonText: "Close",
          modalText: `You were invisible and the ${monster2.name} could not see you, but the spell was broken after you attacked.`
        }
        Utilities.createModal(modalConfig);

        finalCharacter.status.splice(
          finalCharacter.status.indexOf("Invisible"),
          1
        );

        let addInvisibilityStatus = document.querySelector(
          ".invisibility-status"
        );
        addInvisibilityStatus.classList.toggle("hide-status");

      }
      for (let i = 0; i < playerHitRoll1.length; i++) {
        if (playerHitRoll1[i][0] === monsterArmorClass1) {
          if (playerHitRollValue1 < playerHitRoll1[i][1]) {
            let modalConfig = {
              id: "",
              class: "player-misses-modal",
              buttonID: "",
              buttonClass: "close-player-misses-modal",
              buttonText: "Close",
              modalText: "Player misses!"
            }
            Utilities.createModal(modalConfig);
            finalCharacter.greyOutAttackButtons(monster1, monster2);
          } else {
            hitRollSucceed(monster1, finalCharacter);
          }
        }
      }
    };
    checkPlayerHitRoll(
      playerHitRollValue,
      monsterArmorClass,
      finalCharacter.hitRollTable
    );
  }

  spell2AttackMonster1(
    monster1,
    monster2,
    continueNextChapter,
    damage,
    spellName
    ) {
    if (finalCharacter.status.includes("Invisible")) {
      alert(
        `You were invisible and the ${monster1.name} could not see you, but the spell was broken after you attacked`
      );

      let modalConfig = {
          id: "",
          class: "invisibility-spell-broken-modal",
          buttonID: "",
          buttonClass: "close-invisibility-spell-broken-modal",
          buttonText: "Close",
          modalText: `You were invisible and the ${monster1.name} could not see you, but the spell was broken after you attacked.`
        }
        Utilities.createModal(modalConfig);

      finalCharacter.status.splice(
        finalCharacter.status.indexOf("Invisible"),
        1
      );

      let addInvisibilityStatus = document.querySelector(
        ".invisibility-status"
      );
      addInvisibilityStatus.classList.toggle("hide-status");

    }

    let self = this;

    let inflictedDamage = Math.ceil(Math.random(1) * damage);
    if (inflictedDamage <= 0) {
      inflictedDamage = 0;
    }

    let attackDialogue = document.querySelector("#fight-module-dialogue");
    attackDialogue.innerHTML = `
        <p>You cast ${spellName} on the ${monster1.name} and cause ${inflictedDamage} points of damage.</p>`;

    //CHECKING ATTACK INTERACTION

    if (monster1.healthPoints === 0 || monster1.healthPoints === " ") {
      let attackDialogue = document.querySelector("#fight-module-dialogue");
      attackDialogue.innerHTML = `
      <p>You cast ${spellName}, but it had no effect.</p>`;
      finalCharacter.greyOutAttackButtons(monster1, monster2);
    } else if (monster1.healthPoints - inflictedDamage > 0) {
      let isSleepingM1 = monster1.status.some((x) => x === "Sleep");
      let isCharmedM1 = monster1.status.some((x) => x === "Charmed");

      if (isSleepingM1 === true) {
        alert(
          `The ${monster1.name} was asleep, but woke up after being struck by your spell.`
        );

        let modalConfig = {
          id: "",
          class: "sleeping-monster-woke-modal",
          buttonID: "",
          buttonClass: "close-sleeping-monster-woke-modal",
          buttonText: "Close",
          modalText: `The ${monster1.name} was asleep, but woke up after being struck by your spell.`
        }

        monster1.status.splice(monster1.status.indexOf("Sleep"), 1);
        
      } else if (isCharmedM1 === true) {
        let attackDialogue = document.querySelector('#fight-module-dialogue');
        attackDialogue.textContent = `The ${monster1.name} was charmed, but the spell was broken once struck by ${spellName}, `;
         monster1.status.splice(monster1.status.indexOf("Charmed"), 1);

      }

        let monster1Status = document.querySelector("#monster-one-status");
        monster1Status.innerHTML = `${monster1.status.join(
          ", "
        )}`;
        // Utilities.updateMonsterOne(monster1);

      monster1.healthPoints = monster1.healthPoints - inflictedDamage;
      
      Utilities.updateMonsterOne(monster1);
      
      //greying out attack module buttons when pressed

      finalCharacter.greyOutAttackButtons(monster1, monster2);
    } else if (monster1.healthPoints - inflictedDamage <= 0) {
      monster1.healthPoints = 0;
      
      Utilities.updateMonsterOne(monster1);

      
      let defeatMonster1 = document.querySelector("#fight-module-dialogue");
      defeatMonster1.innerHTML = `
            <p>Congratulations, you defeated the Monster 1!</p>`;

      let removingMonster1Button =
        document.getElementsByClassName("attack-monster-one");
      removingMonster1Button[0].classList.add("monster1-dead");

      let removeMonsterOneSpellHighlight = document.querySelectorAll(
        ".monster-one-spell-list"
      );
      for (let i = 0; i < removeMonsterOneSpellHighlight.length; i++) {
        removeMonsterOneSpellHighlight[i].classList.add("monster1-spell-dead");
      }
    }
    finalCharacter.confirmMonstersDead(monster1, monster2, continueNextChapter);
  }

  spell2AttackMonster2(
    monster1,
    monster2,
    continueNextChapter,
    damage,
    spellName
  ) {
    if (finalCharacter.status.includes("Invisible")) {
      alert(
        `You were invisible and the ${monster2.name} could not see you, but the spell was broken after you attacked`
      );

      let modalConfig = {
          id: "",
          class: "invisibility-spell-broken-modal",
          buttonID: "",
          buttonClass: "close-invisibility-spell-broken-modal",
          buttonText: "Close",
          modalText: `You were invisible and the ${monster2.name} could not see you, but the spell was broken after you attacked.`
        }
        Utilities.createModal(modalConfig);

      finalCharacter.status.splice(
        finalCharacter.status.indexOf("Invisible"),
        1
      );

      let addInvisibilityStatus = document.querySelector(
        ".invisibility-status"
      );
      addInvisibilityStatus.classList.toggle("hide-status");

    }

    let self = this;

    let inflictedDamage = Math.ceil(Math.random(1) * damage);

    if (inflictedDamage <= 0) {
      inflictedDamage = 0;
    }

    let attackDialogue = document.querySelector("#fight-module-dialogue");

    attackDialogue.innerHTML = `
    <p>You cast ${spellName} on the ${monster2.name} and cause ${inflictedDamage} points of damage.</p>`;

    //CHECKING ATTACK INTERACTION
    if (monster2.healthPoints === 0 || monster2.healthPoints === " ") {
      let attackDialogue = document.querySelector("#fight-module-dialogue");
      attackDialogue.innerHTML = `
        <p>You cast ${spellName}, but it had no effect.</p>`;
      finalCharacter.greyOutAttackButtons(monster1, monster2);

    } else if (monster2.healthPoints - inflictedDamage > 0) {
      let isSleepingM2 = monster2.status.some((x) => x === "Sleep");

      if (isSleepingM2 === true) {
        alert(
          `The ${monster2.name} was asleep, but woke up after being struck by your spell.`
        );

        let modalConfig = {
          id: "",
          class: "sleeping-monster-woke-modal",
          buttonID: "",
          buttonClass: "close-sleeping-monster-woke-modal",
          buttonText: "Close",
          modalText: `The ${monster2.name} was asleep, but woke up after being struck by your spell.`
        }
        Utilities.createModal(modalConfig);

        monster2.status.splice(monster2.status.indexOf("Sleep"), 1);
        let monster2Status = document.querySelector("#monster-two-status");
        monster2Status.innerHTML = `${monster2.status.join(
          ", "
        )}`;
      } else if (monster2.status.includes("Charmed")) {
        alert(
          `The ${monster2.name} was charmed, but the charm was broken after being struck by your spell.`
        );

         let modalConfig = {
          id: "",
          class: "charmed-monster-broken-modal",
          buttonID: "",
          buttonClass: "close-charmed-monster-broken-modal",
          buttonText: "Close",
          modalText: `The ${monster2.name} was charmed, but the charm was broken after being struck by your spell.`
        }
        Utilities.createModal(modalConfig);

        monster2.status.splice(monster2.status.indexOf("Charmed"), 1);
        let monster2Status = document.querySelector("#monster-two-status");
        monster2Status.innerHTML = `${monster2.status.join(
          ", "
        )}`;
      }

      monster2.healthPoints = monster2.healthPoints - inflictedDamage;
      
      Utilities.updateMonsterTwo(monster2);
      
      //greying out attack module buttons when pressed

      finalCharacter.greyOutAttackButtons(monster1, monster2);
    } else if (monster2.healthPoints - inflictedDamage <= 0) {
      monster2.healthPoints = 0;

      Utilities.updateMonsterTwo(monster2);
      
      let defeatMonster2 = document.querySelector("#fight-module-dialogue");
      defeatMonster2.innerHTML = `
            <p>Congratulations, you defeated the Monster 2!</p>`;

      let removingMonster2SpellButton =
        document.getElementsByClassName("spell2-monster-two");
      removingMonster2SpellButton[0].classList.add("monster1-dead");

      let removingMonster2Button =
        document.getElementsByClassName("attack-monster-two");
      removingMonster2Button[0].classList.add("monster1-dead");
    }

    let removeMonsterTwoSpellHighlight = document.querySelectorAll(
      ".monster-two-spell-list"
    );
    for (let i = 0; i < removeMonsterTwoSpellHighlight.length; i++) {
      removeMonsterTwoSpellHighlight[i].classList.add("monster2-spell-dead");
    }
    finalCharacter.confirmMonstersDead(monster1, monster2, continueNextChapter);
  }

  greyOutAttackButtons(monster1, monster2, images) {
    let attackButtons = document.querySelectorAll(".attack");

    for (let attackButton of attackButtons) {
      attackButton.classList.add("no-display");
    }

    let spellAttackButton = document.querySelector(".attack-spell");
    spellAttackButton.classList.add("no-display");

    let showMonsterAttackButton = document.querySelector("#monster-attack");
    showMonsterAttackButton.classList.remove("no-display");

    showMonsterAttackButton.onclick = function () {
      if (monster1.healthPoints <= 0) {
        monster2.monsterAttack(monster1, monster2, finalCharacter.mirrorImages);
      } else {
        monster1.monsterAttack(monster1, monster2, finalCharacter.mirrorImages);
      }
    };
  }

  //***TRYING TO CREATE AREA ATTACK SPELL

  areaAttackSpell(
    monster1,
    monster2,
    continueNextChapter,
    damage,
    spellName,
    spellDialogue
  ) {
    let areaSpell = (item) => {
      let self = this;

      if (damage <= 0) {
        damage = 0;
      }

      item.healthPoints -= damage;

      if (item.name === " ") {
        let attackDialogue = document.querySelector("#fight-module-dialogue");

        attackDialogue.innerHTML += ` `;
      } else if (item.healthPoints <= 0) {
        let attackDialogue = document.querySelector("#fight-module-dialogue");

        attackDialogue.innerHTML += `
            <p>${item.name} is dead.</p>`;
      } else {
        let attackDialogue = document.querySelector("#fight-module-dialogue");

        let isSleepingMonster = item.status.some((x) => x === "Sleep");

        if (isSleepingMonster === true) {
          alert(
            `The ${item.name} was asleep, but woke up after being struck by your spell.`
          );

          let modalConfig = {
            id: "",
            class: "sleeping-monster-woke-modal",
            buttonID: "",
            buttonClass: "close-sleeping-monster-woke-modal",
            buttonText: "Close",
            modalText: `The ${item.name} was asleep, but woke up after being struck by your spell.`
          }
          Utilities.createModal(modalConfig);

          item.status.splice(item.status.indexOf("Sleep"), 1);
        } else if (item.status.includes("Charmed")) {
          alert(
            `The ${item.name} was charmed, but the charm was broken after being struck by your spell.`
          );
          
         let modalConfig = {
          id: "",
          class: "sleeping-monster-woke-modal",
          buttonID: "",
          buttonClass: "close-sleeping-monster-woke-modal",
          buttonText: "Close",
          modalText: `The ${item.name} was charmed, but the charm was broken after being struck by your spell.`
        }
        Utilities.createModal(modalConfig);

          item.status.splice(item.status.indexOf("Charmed"), 1);
        }

        attackDialogue.innerHTML += `
            <p>You cause ${damage} points of damage on ${item.name}.</p>`;
      }
    };

    let self = this;
    this.monster1 = monster1;
    this.monster2 = monster2;

    let clearDialogue = document.querySelector("#fight-module-dialogue");
    clearDialogue.innerHTML = spellDialogue;

    let monstersGroup = [monster1, monster2];
    monstersGroup.forEach(function (monster1, monster2, damage, spellName) {
      areaSpell(monster1, monster2, damage, spellName);
    });

    //checking if both monsters are dead

    if (monster1.healthPoints <= 0) {
      monster1.healthPoints = 0;
    }

    if (monster2.healthPoints <= 0) {
      monster2.healthPoints = 0;
    }

    Utilities.updateMonsterOne(monster1);
    
    Utilities.updateMonsterTwo(monster2);
    
    let monster1Status = document.querySelector("#monster-one-status");
    monster1Status.textContent = `${monster1.status.join(
      ", "
    )}`;

    let monster2Status = document.querySelector("#monster-two-status");
    if (monster2Status) {
      monster2Status.innerHTML = `${monster2.status.join(", ")}`;
    };   

    finalCharacter.greyOutAttackButtons(
      monster1,
      monster2,
      continueNextChapter
    );

    finalCharacter.confirmMonstersDead(monster1, monster2, continueNextChapter);
  }

  confirmMonstersDead(monster1, monster2, continueNextChapter) {
    if (monster1.healthPoints <= 0 && monster2.healthPoints <= 0) {
      monster1.healthPoints = 0;
      monster2.healthPoints = 0;

      Utilities.updateMonsterOne(monster1);
      
      Utilities.updateMonsterTwo(monster2);
      
      let defeatedMonsters = document.querySelector("#fight-module-dialogue");
      let removeFightModule = document.querySelector("#fight-module");
      finalCharacter.specialty.characterExperience += monster1.experienceValue;
      finalCharacter.specialty.characterExperience += monster2.experienceValue;

      finalCharacter.treasure.gold.quantity += monster1.treasure.gold.quantity;
      finalCharacter.treasure.gold.quantity += monster2.treasure.gold.quantity;

      finalCharacter.treasure.electrum.quantity +=
        monster1.treasure.electrum.quantity;
      finalCharacter.treasure.electrum.quantity +=
        monster2.treasure.electrum.quantity;

      finalCharacter.treasure.silver.quantity +=
        monster1.treasure.silver.quantity;
      finalCharacter.treasure.silver.quantity +=
        monster2.treasure.silver.quantity;

      finalCharacter.treasure.copper.quantity +=
        monster1.treasure.copper.quantity;
      finalCharacter.treasure.copper.quantity +=
        monster2.treasure.copper.quantity;

      finalCharacter.treasure.gems.quantity += monster1.treasure.gems.quantity;
      finalCharacter.treasure.gems.quantity += monster2.treasure.gems.quantity;

      let updateTreasure = document.querySelector(".char-coins");
      updateTreasure.innerHTML = `
        <span id="char-gp" class="char-treasure">Gold: </span><span">${finalCharacter.treasure.gold.quantity}</span></br>
        <span id="char-ep" class="char-treasure">Electrum: </span><span>${finalCharacter.treasure.electrum.quantity}</span></br>
        <span id="char-sp" class="char-treasure">Silver: </span><span>${finalCharacter.treasure.silver.quantity}</span></br>
        <span id="char-cp" class="char-treasure">Copper: </span><span>${finalCharacter.treasure.copper.quantity}</span></br>
        <span id="char-gems" class="char-treasure">Gems: </span><span>${finalCharacter.treasure.gems.quantity}</span></br>
      `;

      let characterExperienceGuage = document.querySelector(
        ".xp-guage-value-current"
      );
      characterExperienceGuage.textContent =
        finalCharacter.specialty.characterExperience;

      let characterXPGuage = document.querySelector(".circle-xp");

      let characterXPGuageDashoffset =
        380 -
        (240 / finalCharacter.specialty.characterLevel.level.maxXP) *
        finalCharacter.specialty.characterExperience;

      if (characterXPGuageDashoffset <= 140) {
        characterXPGuageDashoffset = 140;
      }

      if (characterXPGuageDashoffset >= 380) {
        characterXPGuageDashoffset = 380;
      }

      characterXPGuage.style.strokeDashoffset = characterXPGuageDashoffset;

      finalCharacter.checkLevelUp();

      defeatedMonsters.innerHTML = `
          <p>Congratulations, you won the battle!</p>`;

      let addButtonToContainer = document.querySelector('#container');
      let createNextChapterButton = document.createElement('input');
      createNextChapterButton.setAttribute('type', 'submit');
      createNextChapterButton.setAttribute('value', 'Continue');
      createNextChapterButton.setAttribute('id', 'start-chapter-three-four');
      addButtonToContainer.appendChild(createNextChapterButton);
      
      removeFightModule.innerHTML = ` `;

      //CLEAR SPELL STATUSES FROM MONSTERS AND CHARACTERS
      //1. Remove spell timers
      //2. Hide status icon
      //3. Clear monster statuses
      //4. Update monster statuses

      finalCharacter.clearSpellTimeouts(finalCharacter.activeSpellStatuses);

      $(".container-item").addClass("hide-status");
      monster1.status = [];
      monster2.status = [];

      $("#monster-one-status").text(monster1.status);
      $("#monster-two-status").text(monster2.status);

      var startChapterThreeFour = document.querySelector(
        "#start-chapter-three-four"
      );
      startChapterThreeFour.addEventListener(
        "click",
        continueNextChapter,
        false
      );
    }
  }

  // confirmMonsterStatus(monster1, monster2) {
  //   if (monster1.status.includes("Sleep")) {
  //     let sleepDialogue = document.querySelector("#fight-module-dialogue");

  //     sleepDialogue.innerHTML += `
  //           <p>Monster 1 is asleep.</p>`;
  //   }
  // }

  clearSpellTimeouts(spellTimeouts) {
    //need to iterate over the spell timer object id property from mage-level spell classes
    //clear the timeouts in the id property
    for (let i = 0; i < spellTimeouts.length; i++) {
      console.log(finalCharacter.activeSpellStatuses[i].name);
      clearTimeout(finalCharacter.activeSpellStatuses[i].id);
    }

    for (let spell in spellTimeouts) {
      console.log(finalCharacter.activeSpellStatuses);
      console.log("clearing spell timouts: " + spell);
      clearTimeout(spellTimeouts[spell]);
      delete spellTimeouts[spell];
    }

    //5. remove character statuses
    finalCharacter.status = [];
    finalCharacter.mirrorImages = 0;
  }
}
