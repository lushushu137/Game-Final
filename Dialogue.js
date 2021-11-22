
function* iterator (list) {
    for (let item of list) {
        yield item;
    }
}

export class Dialogue {
    dialogueList;
    beginIterator;
    nextIterator;
    endIterator;
    finish = false;
    constructor(dialogueList = dialogueMap){
        this.dialogueList = dialogueList;
        this.beginIterator = iterator(dialogueList.begin);
        this.nextIterator = iterator(dialogueList.next);
        this.iterator = iterator(dialogueList.end);
    }
    begin(){
        let getBegin = setInterval(()=> {
            let curr = this.beginIterator.next();
            if (!curr.done) {
                this.render(curr.value.character, curr.value.content);
            } else {
                clearInterval(getBegin);
            }
        }, 1000)
    }

    next(){
        let curr = this.nextIterator.next();
        if (!curr.done) {
            this.render(curr.value.character, curr.value.content);
        } else {
            this.finish = true;
            this.end();
        }
    }

    end(){
        let getEnd = setInterval(()=> {
            let curr = this.iterator.next();
            if (!curr.done) {
                this.render(curr.value.character, curr.value.content);
            } else {
                clearInterval(getEnd);
            }
        }, 1000)
    }

    render(character, content){
        document.getElementById(`dialogue_${character}`).style.opacity = 1;
        document.getElementById(`dialogue_${character}`).innerText = content;
    }
}


export const dialogueMap = {
    begin: [
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
    ],
    next: [
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
    ],
    end: [
   
   
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
    ],
}
