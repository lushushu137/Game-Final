import { aliceDialogueMap, susanDialogueMap, carolineDialogueMap} from './allDialogue.js';

export class Woman {
    womanIterator = iterator(womanList);
    currWoman;
    emmm;
    constructor(){
        this.currWoman = this.womanIterator.next().value;
        this.render();
        this.emmm = new Audio("./assets/audio/Human Female Mmm 01.wav")
        this.emmm.volume = 0.2
        this.emmm.play()
    }
    next() {
        let curr = this.womanIterator.next();
        if (!curr.done) {
            this.emmm.play()
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