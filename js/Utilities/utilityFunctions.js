
export function continueTextAnimation(chapterConfig) {
  if (chapterConfig.dialogueIterator < chapterConfig.thisChapterDialogue.length) {
    chapterConfig.dialogueDiv.textContent += chapterConfig.thisChapterDialogue.charAt(chapterConfig.dialogueIterator);
    chapterConfig.dialogueIterator++;
    chapterConfig.setTimeoutArray.push(setTimeout(function() {continueTextAnimation(
      chapterConfig)}, chapterConfig.typingSpeed));
  } else {
    for (let i = 0; i < chapterConfig.setTimeoutArray.length; i ++) {
      clearTimeout[i];
    }
    chapterConfig.setTimeoutArray = [];
    chapterConfig.dialogueIterator = 0;
    if (chapterConfig.buttonText !== "") {
      createContinueButton(chapterConfig);
    }
  }  
}

export function createContinueButton(
  chapterConfig) {
    if (chapterConfig.buttonText !== "") {
      let containerDiv = document.querySelector('#container');
      let newButton = document.createElement("button");
      newButton.id = `button-${chapterConfig.thisChapterNumber}`;
      newButton.type = "button";
      newButton.textContent = `${chapterConfig.buttonText}`;  
      newButton.classList.add("new-continue-button"); 
      newButton.addEventListener(
        "click",
        function () {
          newButton.remove();
          createNextDialogue(chapterConfig);      
        },
        false
      );
      containerDiv.appendChild(newButton); 
    }
    
};

export function createNextDialogue(chapterConfig) {    
    // let chapterIterator = 1;
    // let nextChapterFunction = "textDialogue" + chapterIterator;
    // let compiledNextChapter = functions[nextChapterFunction];    
    // console.log(nextChapter);
    chapterConfig.dialogueDiv.textContent = "";  
    let nextDialogueDiv = document.createElement('div');
    nextDialogueDiv.id = `dialogue-div-${chapterConfig.thisChapterNumber}`;
    chapterConfig.dialogueDiv.appendChild(nextDialogueDiv);  
    chapterConfig.nextChapterFunction();  
};

export function continueTextAnimationWelcomeTitle(chapterConfig) {
    
  if (chapterConfig.dialogueIterator < chapterConfig.thisChapterDialogue.length) {
    chapterConfig.dialogueDiv.textContent += chapterConfig.thisChapterDialogue.charAt(chapterConfig.dialogueIterator);
    chapterConfig.dialogueIterator++;
    chapterConfig.setTimeoutArray.push(setTimeout(function() {continueTextAnimationWelcomeTitle(
      chapterConfig)}, chapterConfig.typingSpeed));
  } else {
    for (let i = 0; i < chapterConfig.setTimeoutArray.length; i ++) {
      clearTimeout[i];
    }
    chapterConfig.setTimeoutArray = [];
    chapterConfig.dialogueIterator = 0;
    if (chapterConfig.buttonText !== "") {
      createContinueButton(chapterConfig);
    } 
  }  
}

export function createModal(modalConfig) {
  // console.log(modalConfig);

  //  let modalConfig = {
  //     id: "",
  //     class: "",
  //     buttonID: "",
  //     buttonClass: "",
  //     buttonText: "",
  //     modalText: ""
  //  }
  //  Utilities.createModal(modalConfig);

  let newModal = document.createElement('dialog');
  if (modalConfig.id !== "") {
    newModal.setAttribute('id', modalConfig.id);
  }
  if (modalConfig.class !== "") {
    newModal.setAttribute('class', modalConfig.class);

  }
  
  let newModalCloseButton = document.createElement('button');
  newModalCloseButton.setAttribute('type', 'submit');

  if (modalConfig.buttonID !== "") {
    newModalCloseButton.setAttribute('id', modalConfig.buttonID);
  }

  if (modalConfig.buttonClass !== "") {
    newModalCloseButton.setAttribute('class', modalConfig.buttonClass);
  }

  newModalCloseButton.addEventListener('click', function () {
    // let dialog = document.querySelector("dialog");
    newModal.close();
    newModal.remove();

  });

  newModalCloseButton.textContent = modalConfig.buttonText;
  let newModalText = `<p>${modalConfig.modalText}</p>`;

  let gameBody = document.getElementsByTagName('body')[0];

  newModal.innerHTML = newModalText;
  gameBody.appendChild(newModal);

  newModal.appendChild(newModalCloseButton);

  newModal.showModal();
  modalConfig = {};
}

export function updateMonsterOne(monsterOne) {
  if (monsterOne.name !== " " && monsterOne.healthPoints >= 0) {
    let monsterOneHP = document.querySelector('#monster-one-hp');
    monsterOneHP.innerHTML = 
    `
    <div>Hit Points</div>
    <progress class='monster-hp-prog-bar' id="monster-one-hp-progress-bar" max="${monsterOne.startingHealthPoints}" value="${monsterOne.healthPoints}"></progress>
    <div>${monsterOne.healthPoints}</div>
    `;
    
    let monsterOneAC = document.querySelector('#monster-one-ap');
    monsterOneAC.innerHTML = `Armor Class: ${monsterOne.armorClass}`;

    let monsterOneDamage = document.querySelector('#monster-one-damage');
    monsterOneDamage.innerHTML = `Damage: ${monsterOne.damage}`;

    let monsterOneStatus = document.querySelector('#monster-one-status');
    monsterOneStatus.innerHTML = `${monsterOne.status}`; 
  }
}

export function updateMonsterTwo(monsterTwo) {
  if (monsterTwo.name !== " " && monsterTwo.healthPoints >= 0) {
    let monsterTwoHP = document.querySelector('#monster-two-hp');
      monsterTwoHP.innerHTML = 
      `
      <div>Hit Points</div>
      <progress class='monster-hp-prog-bar' id="monster-two-hp-progress-bar" max="${monsterTwo.startingHealthPoints}" value="${monsterTwo.healthPoints}"></progress>
      <div>${monsterTwo.healthPoints}</div>
      `;
      
      let monsterTwoAC = document.querySelector('#monster-two-ap');
      monsterTwoAC.innerHTML = `Armor Class: ${monsterTwo.armorClass}`;

      let monsterTwoDamage = document.querySelector('#monster-two-damage');
      monsterTwoDamage.innerHTML = `Damage: ${monsterTwo.damage}`;

      let monsterTwoStatus = document.querySelector('#monster-two-status');
      monsterTwoStatus.innerHTML = `${monsterTwo.status}`; 
  }  
}

export function updateCharacterData(finalCharacter) {
  console.log('update character');
  
  let acGuageValue = document.querySelector('.ac-guage-value');
  
  acGuageValue.textContent = finalCharacter.armorClass - finalCharacter.attributes[3].adjustment;

  let hpGuageCurrent = document.querySelector('.hitpoint-guage-value-current');
  hpGuageCurrent.textContent = finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment <= 0 ? 0 : finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment;

  let hpGuageValueTotal = document.querySelector('.hitpoint-guage-value-total');
  hpGuageValueTotal.textContent = finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment <= 0 ? 0 : finalCharacter.specialty.healthPoints + finalCharacter.attributes[4].adjustment;

  let xpGaugeValueCurrent = document.querySelector('.xp-guage-value-current');
  xpGaugeValueCurrent.textContent = finalCharacter.specialty.characterExperience;

  let xpGuageValueTotal = document.querySelector('.xp-guage-value-total');
  xpGuageValueTotal.textContent = finalCharacter.specialty.characterLevel.level.maxXP;

  let charLevelUpdate = document.querySelector('#char-level > span');
  charLevelUpdate.textContent = finalCharacter.specialty.characterLevel.level.level;

  let charArmorUpdate = document.querySelector('.armor-tooltip > span');
  charArmorUpdate.textContent = finalCharacter.armor.name;

  let charArmorClassUpdate = document.querySelector('.armor-tooltiptext');
  charArmorClassUpdate.textContent = `Armor Class: ${finalCharacter.armor.armorClass}`;

  let weaponCharUpdate = document.querySelector('.weapon-tooltip > span');
  weaponCharUpdate.textContent = finalCharacter.weapon.name;

  let charWeaponToottipText = document.querySelector('.weapon-tooltiptext');
  charWeaponToottipText.textContent = finalCharacter.weapon.damage;
}

export function updateCharacterAttributes(finalCharacter) {
  console.log('update char attributes')
};

export function updateCharacterSaves(finalCharacter) {
  console.log('update char saves');
}

export * as Utilities from "./utilityFunctions.js";