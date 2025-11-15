
export function cantCastSpell(spell, dialogueDiv) {
    let dialogueArray = [
        "nothing happens.",
        "you can't remember the words.",
        "you mind draws blank.",
        "you forget the words.",
        "you lose sight of the phrases.",
        "your thoughts escape you."
    ];

    let randomNumber = Math.round(Math.random()*(dialogueArray.length - 1));

    return dialogueDiv.innerHTML = `<p>You try to cast ${spell}, but ${dialogueArray[randomNumber]}</p>`;    
}

export * as SpellUtilities from "./spellUtilitiesFunctions.js";