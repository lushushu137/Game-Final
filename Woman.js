import {
  aliceDialogueMap1,
  susanDialogueMap1,
  weiliDialogueMap1,
  carolineDialogueMap1,
} from "./allDialogue.js";
import { Dialogue } from "./Dialogue.js";
import {
  getUrl,
  setPlayerAnimation,
  setWomanAnimation,
  playerAnimationStatus,
  womanAnimationStatus,
} from "./animationControl.js";

const brushAudio = new Audio(
  "./assets/audio/Human Teeth Brushing Teeth Long Strokes 01.wav"
);

export class Woman {
  currWoman;
  emmm;
  dirtState = {
    "00": 1,
    "01": 1,
    "02": 1,
    10: 1,
    11: 1,
    12: 1,
    20: 1,
    21: 1,
    22: 1,
  };
  constructor(day) {
    this.womanIterator = iterator(womanList, day);
    this.currWoman = this.womanIterator.next().value;
    this.render();
    this.emmm = new Audio("./assets/audio/Human Female Mmm 01.wav");
    this.emmm.volume = 0.2;
    this.dialogue = new Dialogue(this.currWoman.dialogue);
    this.emmm.play();
    this.resetDirt();
    setWomanAnimation(womanAnimationStatus.lying);
  }
  next() {
    let curr = this.womanIterator.next();
    setWomanAnimation(womanAnimationStatus.lying);
    if (!curr.done) {
      this.resetDirt();
      this.emmm.play();
      this.currWoman = curr.value;
      this.dialogue = new Dialogue(this.currWoman.dialogue);
      this.render();
    } else {
      document.dispatchEvent(new Event("dayEnd"));
    }
  }

  removeDirt(coordinate) {
    console.log("coordinate:", coordinate);
    if (this.dirtState[coordinate] > 0) {
      brushAudio.play();
      setTimeout(() => {
        brushAudio.pause();
        brushAudio.currentTime = 0;
      }, 1000);
      this.dirtState[coordinate] -= 0.5;
      document.getElementById(coordinate).style.opacity =
        this.dirtState[coordinate];
      setPlayerAnimation(playerAnimationStatus.animation);
      if (this.dirtState[coordinate] == 0) {
        this.dialogue.next();
      }
    }
  }
  resetDirt = () => {
    let rowHTMLCollection = document.getElementsByClassName("row");
    for (let i = 0; i < rowHTMLCollection.length; i++) {
      let curr = rowHTMLCollection.item(i);
      curr.style.opacity = 1;
    }
    Object.keys(this.dirtState).forEach((d) => (this.dirtState[d] = 1));
  };
  render() {
    let womanDiv = document.getElementById("woman");
    womanDiv.style.backgroundImage = getUrl(this.currWoman.imgUrl);
    womanDiv.style.zIndex = 0;
  }
}
function* iterator(list, day) {
  for (let item of list) {
    if (item.day === day) {
      yield item;
    }
  }
}
const womanList = [
  {
    name: "Susan",
    dialogue: susanDialogueMap1,
    imgUrl: "/assets/susan.png",
    day: 1,
  },
  {
    name: "Alice",
    dialogue: aliceDialogueMap1,
    imgUrl: "/assets/alice.png",
    day: 1,
  },
  {
    name: "Caroline",
    dialogue: carolineDialogueMap1,
    imgUrl: "/assets/caroline.png",
    day: 2,
  },
  {
    name: "Weili",
    dialogue: weiliDialogueMap1,
    imgUrl: "/assets/weili.png",
    day: 2,
  },
];
