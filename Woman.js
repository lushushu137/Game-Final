import { aliceDialogueMap, susanDialogueMap, carolineDialogueMap} from './allDialogue.js';

export class Woman {
    womanIterator = iterator(womanList);
    currWoman;
    constructor(){
        this.currWoman = this.womanIterator.next().value;
        this.render();
    }
    next() {
        let curr = this.womanIterator.next();
        if (!curr.done) {
            this.currWoman = curr.value;
            this.render();
        } else {
            document.dispatchEvent(new Event("dayEnd"));
        }
    }
    render(){
        let womanDiv = document.getElementById("woman");
        womanDiv.style.backgroundImage = `url(/assets/${this.currWoman.type}.png)`;
        womanDiv.style.zIndex = 0;
    }
}
function* iterator (list = womanList) {
    for (let item of list) {
        yield item;
    }
}
const womanList = [
    {
        name: 'Susan',
        type: 'old',
        dialogue: susanDialogueMap
    },
    {
        name: 'Alice',
        type: 'young',
        dialogue: aliceDialogueMap
    },
    {
        name: 'Caroline',
        type: 'beauty',
        dialogue: carolineDialogueMap
    },
]