import { throttle } from "./Throttle.js";
import { Woman } from "./Woman.js";
import { KeyboardToAreaList } from "./KeyboardToAreaList.js";
import {
  womanAnimationStatus,
  switchBrightness,
  setWomanAnimation,
} from "./animationControl.js";

const sayYes = new Audio("./assets/audio/Human Female Yes 03.wav");
const ambience = new Audio("./assets/audio/ambience.mp3");
const ending = new Audio("./assets/audio/Merry-Bay-Upbeat-Summer-Lofi.mp3");
let coin = 0;
let disableStart = false;

let start = () => {
  console.log("start");
  ambience.play();
  let woman = new Woman();
  let suspendDialogue = false;
  let throttleRemoveDirt = throttle((coordinate) => {
    woman.removeDirt(coordinate);
  });
  let clearArea = (inputList) => {
    if (suspendDialogue) return;
    let areaMap = KeyboardToAreaList;
    for (let i = 0; i < areaMap.length; i++) {
      let isCovered = areaMap[i].keys.every((curr) => {
        return inputList.includes(curr);
      });
      if (isCovered) {
        throttleRemoveDirt(`${areaMap[i].row}${areaMap[i].col}`);
      }
    }
  };
  let handleDialogueEnd = () => {
    document.removeEventListener("dialogueEnd", handleDialogueEnd);
    sayYes.play();
    setWomanAnimation(womanAnimationStatus.leave);
    setTimeout(() => {
      switchBrightness(0);
    }, 1000);
    setTimeout(() => {
      woman.next();
      switchBrightness(1);
    }, 3000);
  };
  let handleDayEnd = () => {
    document.removeEventListener("dayEnd", handleDayEnd);
    console.log("dayend");
    let overlay = document.createElement("div");
    overlay.id = "overlay";
    overlay.innerText = `Day 1 - You totally have ${coin} coins now.
          You can spend 20$ to upgrade your srubbing towel.
          You still need 100$ to buy an automatic scrubbing machine.
          
          scrub to next day ->
          `;
    document.getElementById("container").appendChild(overlay);
    ambience.pause();
    disableStart = false;
    setTimeout(() => ending.play(), 500);
    checkScroll((inputList) => {
      woman = null;
      ending.pause();
      scrubToStart(inputList);
    });
  };
  let handleIsSuspendDialogue = () => {
    document.removeEventListener("isSuspendDialogue", handleIsSuspendDialogue);
    suspendDialogue = true;
  };
  let handleClickChoice = (e) => {
    document.removeEventListener("clickChoice", handleClickChoice);
    console.log("clickChoice and e.detail: ", e.detail);
    suspendDialogue = false;
    coin += e.detail;
    setCoin();
  };
  let setCoin = () => {
    document.getElementById("coin").innerText = coin;
  };

  setTimeout(() => checkScroll(clearArea), 1000);
  document.addEventListener("dayEnd", handleDayEnd);
  document.addEventListener("dialogueEnd", handleDialogueEnd);
  document.addEventListener("isSuspendDialogue", handleIsSuspendDialogue);
  document.addEventListener("clickChoice", handleClickChoice);
};

let checkScroll = (fn) => {
  let start = new Date().getTime();
  let inputList = [];
  document.onkeydown = (e) => {
    let current = new Date().getTime();
    if (current - start < 500) {
      inputList.push(e.code);
    } else {
      inputList = [];
      inputList.push(e.code);
    }
    start = current;
    fn(inputList);
  };
};

let scrubToStart = (inputList) => {
  if (inputList.length > 4) {
    let overlay = document.getElementById("overlay");
    overlay
      ? document
          .getElementById("container")
          .removeChild(document.getElementById("overlay"))
      : null;
    switchBrightness(1);
    if (!disableStart) {
      start();
      disableStart = true;
    }
  }
};

window.onload = () => {
  checkScroll(scrubToStart);
  console.log(document.location);
};
