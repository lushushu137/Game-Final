import { Woman } from "./Woman.js";
import { KeyboardToAreaList, KeyboardToAreaList2 } from "./KeyboardToAreaList.js";
import {Dialogue} from './Dialogue.js';
import{womanAnimationStatus, switchBrightness, playerAnimationStatus,setWomanAnimation, setPlayerAnimation} from './animationControl.js';


let start = () => {
    const brushAudio = new Audio("./assets/audio/Human Teeth Brushing Teeth Long Strokes 01.wav")
    const sayYes = new Audio("./assets/audio/Human Female Yes 03.wav")
    let woman = new Woman();
    let dialogue = new Dialogue(woman.currWoman.dialogue);
    let inputList = [];
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
                if (suspendDialogue) {
                    brushAudio.pause();
                    return;
                }
                if (dirtState[coordinate]){
                    brushAudio.play();
                    setTimeout(() => { brushAudio.pause(); brushAudio.currentTime = 0; }, 1000);
                    document.getElementById(coordinate).style.opacity = 0;
                    setPlayerAnimation(playerAnimationStatus.animation);
                    dirtState[coordinate] = false;
                    dialogue.next();
                }
              
            }
        }
    }
    
    let handleDialogueEnd = () => {
        sayYes.play();
        brushAudio.pause();
        
        setWomanAnimation(womanAnimationStatus.leave);
        setTimeout(()=>{
            switchBrightness(0);
        }, 1000)
        setTimeout(() => {
            nextWoman();
        }, 3000)
     
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
        resetDirt();
        woman.next();
        dialogue = new Dialogue(woman.currWoman.dialogue)
        switchBrightness(1);
        setWomanAnimation(womanAnimationStatus.lying);
    }
    
    let checkScroll = () => {
        let start = new Date().getTime();
        document.onkeydown = (e) => {
            let current = new Date().getTime();
            if (current - start < 1000) {
                inputList.push(e.code);
            } else  {
                inputList = [];
                inputList.push(e.code);
            }
            start = current;
            clearArea(inputList);
        }
    }
    
    let setCoin = () => {
        document.getElementById('coin').innerText = coin;
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
   
    document.addEventListener("dayEnd", ()=>{
        let overlay = document.createElement('div');
        overlay.id = "overlay";
        overlay.innerText = 
        `Thanks for playing!
        You totally have ${coin} coins now.
        You can spend 20$ to upgrade your srubbing towel.
        You still need 100$ to buy an automatic scrubbing machine.
        `
        document.getElementById("container").appendChild(overlay);
}) 
}



window.onload = () => {
    document.getElementById('startButton').addEventListener('click', ()=>{
        document.getElementById('container').removeChild(document.getElementById('overlay'))
        switchBrightness(1);
        start();
    })
}