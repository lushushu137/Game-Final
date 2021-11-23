
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
    endEvent;
    // isEnd = false;
    constructor(dialogueList){
        this.dialogueList = dialogueList;
        this.beginIterator = iterator(dialogueList.begin);
        this.nextIterator = iterator(dialogueList.next);
        this.iterator = iterator(dialogueList.end);
        this.begin();
        this.endEvent = new Event("isEnd");
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
                document.getElementById(`dialogue_player`).style.opacity = 0;
                document.getElementById(`dialogue_guest`).style.opacity = 0;
                document.dispatchEvent(this.endEvent);
            }
            }, 1000)
    }
    render(character, content){
        document.getElementById(`dialogue_${character}`).style.opacity = 1;
        document.getElementById(`dialogue_${character}`).innerText = content;
    }
}
