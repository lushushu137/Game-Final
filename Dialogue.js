let order = 0;

export default function renderDialogue(){
    if (order === 0) {
        document.getElementById("dialogue_guest").style.opacity = 1;
    }
    if (order === 1) {
        document.getElementById("dialogue_player").style.opacity = 1;
    }
    let currentDialogue = dialogueList.find((obj) => obj.order === order);
    let currentCharacter = currentDialogue.character;
    let currentContent = currentDialogue.content;
    document.getElementById(`dialogue_${currentCharacter}`).innerText = currentContent;
    order++;
}

export const dialogueList = [
    {
        character: 'guest',
        content: 'Harder, please.',
        order: 0
    },
    {
        character: 'player',
        content: 'Ok.',
        order: 1
    },
    {
        character: 'player',
        content: 'You got pimples on your back.',
        order: 2
    },
    {
        character: 'guest',
        content: 'Yeah... I hate that.',
        order: 3
    },
    {
        character: 'player',
        content: 'Well, at least it proves you are young enough.',
        order: 4
    },
    {
        character: 'guest',
        content: 'Right, but what is so good about being young? They are not only on my back, they are everywhere. My face, my neck, even my leg.',
        order: 5
    },
    {
        character: 'player',
        content: 'Does that bother you?',
        order: 6
    },
    {
        character: 'guest',
        content: 'Very much. Youth is curse.',
        order: 7
    },
    {
        character: 'player',
        content: 'Interesting.',
        order: 8
    },
    {
        character: 'guest',
        content: 'There is much you don\'t know. ',
        order: 9
    },
    {
        character: 'player',
        content: 'Finished.',
        order: 10
    },
    {
        character: 'guest',
        content: 'Bye. ',
        order: 11
    },
    {
        character: 'player',
        content: 'Bye. ',
        order: 12
    },
]