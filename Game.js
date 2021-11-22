import { Woman } from "./Woman.js";
import { KeyboardToAreaList } from "./KeyboardToAreaList.js";
import {Dialogue} from './Dialogue.js';

// let scrubber = new Scrubber();
let woman = new Woman();
console.log(woman)
let dialogue = new Dialogue(woman.currWoman.dialogue);
let inputList = [];
let start = 0;
let playerAnimationStatus = {
    stop: 'url(/assets/player.png)',
    animation: 'url(/assets/player.gif)'
}
let dirtState = {
    "00": true,
    "01":true,
    "02":true,
    "10": true,
    "11":true,
    "12":true,
    "20": true,
    "21":true,
    "22":true,
}

let clearArea = (inputList) => {
    for (let i = 0; i < KeyboardToAreaList.length; i++) {
        let isCovered = KeyboardToAreaList[i].keys.every((curr) => {
            return inputList.includes(curr);
        })
        if (isCovered) {
            let coordinate = `${KeyboardToAreaList[i].row}${KeyboardToAreaList[i].col}`;
            if (dirtState[coordinate]) {
                // remove dirt view
                document.getElementById(coordinate).style.opacity = 0;
                // animate charactor
                setPlayerAnimation(playerAnimationStatus.animation);
                dirtState[coordinate] = false;
                dialogue.next();
                if (Object.keys(dirtState).every(d => dirtState[d] === false)) {
                    handleEnd();
                }
            }
        }
    }
}

let handleEnd = () => {
    setPlayerAnimation(playerAnimationStatus.stop);
    setTimeout(() => {
        resetDirt();
        nextWoman();
    }, 5000)

}

let resetDirt = () => {
    let rowHTMLCollection = document.getElementsByClassName("row");
    for (let i = 0; i < rowHTMLCollection.length; i++) {
        let curr = rowHTMLCollection.item(i);
        curr.style.opacity = 1;
    }
    Object.keys(dirtState).forEach(d => dirtState[d] = true);
}

let setPlayerAnimation = (status) => {
    document.getElementById("player").style.backgroundImage = status;
}

let nextWoman = () => {
    woman.next();
    dialogue = new Dialogue(woman.currWoman.dialogue)
}

let checkScroll = () => {
    let start = new Date().getTime();
    document.onkeydown = (e) => {
        let current = new Date().getTime();
        if (current - start < 1000) {
            inputList.push(e.code);
        } else  {
            inputList = [];
        }
        start = current;
        clearArea(inputList);
    }
}

checkScroll();

