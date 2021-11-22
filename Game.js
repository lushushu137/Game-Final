import { Woman } from "./Woman.js";
import { KeyboardToAreaList } from "./KeyboardToAreaList.js";
import {Dialogue} from './Dialogue.js';

// let scrubber = new Scrubber();
let woman = new Woman();
let inputList = [];
let start = 0;
let dialogue = new Dialogue();
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
                document.getElementById("player").style.backgroundImage = 'url(/assets/player.gif)';
                dirtState[coordinate] = false;
                dialogue.next();
                if (dialogue.finish) {
                    document.getElementById("player").style.backgroundImage = 'url(/assets/player.png)';
                }
            }
        }
    }
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
dialogue.begin();
woman.render();

