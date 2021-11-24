import { Woman } from "./Woman.js";
import { KeyboardToAreaList, KeyboardToAreaList2 } from "./KeyboardToAreaList.js";
import {Dialogue} from './Dialogue.js';
import{womanAnimationStatus, playerAnimationStatus,setWomanAnimation, setPlayerAnimation} from './animationControl.js';

// let scrubber = new Scrubber();
let woman = new Woman();
let dialogue = new Dialogue(woman.currWoman.dialogue);
let inputList = [];
let start = 0;
let coin = 0;
let suspendDialogue = false;


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
    let areaMap = KeyboardToAreaList;
    for (let i = 0; i < areaMap.length; i++) {
        let isCovered = areaMap[i].keys.every((curr) => {
            return inputList.includes(curr);
        })
        if (isCovered) {
            let coordinate = `${areaMap[i].row}${areaMap[i].col}`;
            if (!dirtState[coordinate]) return;
            if (suspendDialogue) return;
            document.getElementById(coordinate).style.opacity = 0;
            setPlayerAnimation(playerAnimationStatus.animation);
            dirtState[coordinate] = false;
            dialogue.next();
        }
    }
}

let handleDialogueEnd = () => {
    setWomanAnimation(womanAnimationStatus.leave);
    setTimeout(()=>{
        switchBrightness(0);
    }, 1000)
    setTimeout(() => {
        nextWoman();
    }, 3000)
 
}


let switchBrightness = (value) => {
    document.getElementById('container').style.filter = `brightness(${value})`;
}
let resetDirt = () => {
    let rowHTMLCollection = document.getElementsByClassName("row");
    for (let i = 0; i < rowHTMLCollection.length; i++) {
        let curr = rowHTMLCollection.item(i);
        curr.style.opacity = 1;
    }
    Object.keys(dirtState).forEach(d => dirtState[d] = true);
}


let nextWoman = () => {
    switchBrightness(1);
    setWomanAnimation(womanAnimationStatus.lying);
    setTimeout(()=>{
        resetDirt();
        woman.next();
        dialogue = new Dialogue(woman.currWoman.dialogue)
    }, 2000)
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
setWomanAnimation(womanAnimationStatus.lying);

document.addEventListener("isEnd", handleDialogueEnd)
document.addEventListener("isSuspendDialogue", () => suspendDialogue = true)
document.addEventListener("clickChoice", (e)=>{
    suspendDialogue = false;
    coin += e.detail
    setCoin();
})

let setCoin = () => {
    document.getElementById('coin').innerText = coin;
}
