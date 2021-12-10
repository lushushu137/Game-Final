import { throttle } from "./Throttle.js";
import { Woman } from "./Woman.js";
import { KeyboardToAreaList } from "./KeyboardToAreaList.js";
import {
  womanAnimationStatus,
  switchBrightness,
  setWomanAnimation,
} from "./animationControl.js";

const ambience = new Audio("./assets/audio/ambience.mp3");
const ending = new Audio("./assets/audio/Merry-Bay-Upbeat-Summer-Lofi.mp3");
ending.volume = 0.3;
let coin = 0;
let disableStart = false;
let day = 0;

let handleDialogueEnd = null;
let handleDayEnd = null;
let handleIsSuspendDialogue = null;
let handleClickChoice = null;

let start = () => {
  day++;
  handleDialogueEnd && document.removeEventListener("dayEnd", handleDayEnd);
  handleDialogueEnd &&
    document.removeEventListener("dialogueEnd", handleDialogueEnd);
  handleIsSuspendDialogue &&
    document.removeEventListener("isSuspendDialogue", handleIsSuspendDialogue);
  handleClickChoice &&
    document.removeEventListener("clickChoice", handleClickChoice);

  console.log("start");
  ambience.play();
  let woman = new Woman(day);
  let suspendDialogue = false;
  let throttleRemoveDirt = throttle((coordinate) => {
    woman.removeDirt(coordinate);
  });
  let clearArea = (inputList) => {
    console.log("suspendDialogue:", suspendDialogue);
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
  handleDialogueEnd = () => {
    suspendDialogue = false;
    setWomanAnimation(womanAnimationStatus.leave);
    setTimeout(() => {
      switchBrightness(0);
    }, 1000);
    setTimeout(() => {
      woman.next();
      switchBrightness(1);
    }, 3000);
  };
  handleDayEnd = () => {
    let overlay = document.createElement("div");
    overlay.id = "overlay";
    if (day >= 2) {
      overlay.innerHTML = `<h1>Day ${day} - You totally have ${coin} coins now.</h1>
      <p>Because of limited time, I have only made these contents and there are many shortcomings.</p>
      <p>If you want to discuss with me, please send me email.</p>
      <p>Thank you for playing here!</p>
      <a href='https://lushushu137.github.io/COMP5322-Mid-Term/' target="_blank"><h3>- Made by Lu Shu</h3> </a>
     
      `;
      ambience.pause();
      document.getElementById("game_area").appendChild(overlay);
      setTimeout(() => ending.play(), 500);
    } else {
      overlay.innerHTML = `<h1>Day ${day} - You totally have ${coin} coins now.</h1>
      scrub to next day ->
      `;
      document.getElementById("game_area").appendChild(overlay);
      ambience.pause();
      disableStart = false;
      setTimeout(() => ending.play(), 500);
      checkScroll((inputList) => {
        ending.pause();
        scrubToStart(inputList);
      });
    }
  };
  handleIsSuspendDialogue = () => {
    suspendDialogue = true;
  };
  handleClickChoice = (e) => {
    console.log("clickChoice and e.detail: ", e.detail);
    suspendDialogue = false;
    coin += e.detail;
    setCoin();
  };
  let setCoin = () => {
    document.getElementById("coin").innerText = coin;
  };

  document.addEventListener("dayEnd", handleDayEnd);
  document.addEventListener("dialogueEnd", handleDialogueEnd);
  document.addEventListener("isSuspendDialogue", handleIsSuspendDialogue);
  document.addEventListener("clickChoice", handleClickChoice);
  setTimeout(() => checkScroll(clearArea), 1000);
};

let checkScroll = (fn) => {
  let start = new Date().getTime();
  let inputList = [];
  document.onkeydown = (e) => {
    e.returnValue = false;
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
          .getElementById("game_area")
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
