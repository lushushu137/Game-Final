import { Scrubber } from "./Scrubber.js";
import {Woman} from "./Woman.js";

let scrubber = new Scrubber();
let woman = new Woman();

let start = 0;
let inputList = [];

setInterval(() => {
    scrubber.render();
}, 100)

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
        console.log(inputList)
        
    }
}

checkScroll();
woman.render();
