import {
  setPlayerAnimation,
  playerAnimationStatus,
} from "./animationControl.js";
function* iterator(dialogueList) {
  for (let item of dialogueList) {
    yield item;
  }
}
const sayYes = new Audio("./assets/audio/Human Female Yes 03.wav");
const sayNo = new Audio("./assets/audio/Human Male No Whinny No 01.wav");
sayNo.volume = 0.2;
export class Dialogue {
  dialogueList;
  beginIterator;
  nextIterator;
  endIterator;
  curr;
  constructor(dialogueList, beginType = "normal") {
    this.dialogueList = dialogueList;
    this.beginIterator = iterator(dialogueList.begin);
    this.nextIterator = iterator(dialogueList.next);
    this.iterator = iterator(dialogueList.end);
    if (beginType === "normal") {
      this.begin();
    } else if (beginType === "onlyTalk") {
      this.onlyTalk();
    }

    this.curr = dialogueList.next[0];
  }

  onlyTalk() {
    document.dispatchEvent(new Event("isSuspendDialogue"));
    console.log("enter onlyTalk");
    let getBegin = setInterval(() => {
      let curr = this.beginIterator.next();
      console.log(curr.value);
      if (!curr.done) {
        this.render(curr.value.character, curr.value.content);
      } else {
        clearInterval(getBegin);
        document.getElementById(`dialogue_player`).style.opacity = 0;
        document.getElementById(`dialogue_guest`).style.opacity = 0;
        document.dispatchEvent(new Event("dialogueEnd"));
        sayNo.play();
      }
    }, 2000);
  }

  begin() {
    console.log("enter begin");
    let getBegin = setInterval(() => {
      let curr = this.beginIterator.next();
      if (!curr.done) {
        this.render(curr.value.character, curr.value.content);
      } else {
        clearInterval(getBegin);
      }
    }, 1000);
  }

  next() {
    setPlayerAnimation(playerAnimationStatus.animation);
    let curr = this.nextIterator.next();
    console.log("Dialogue next()");
    if (!curr.done) {
      this.render(curr.value.character, curr.value.content);
      if (curr.value.options) {
        document.dispatchEvent(new Event("isSuspendDialogue"));
        this.renderChoices(
          curr.value.options.choice1,
          curr.value.options.choice2
        );
      }
    } else {
      this.end();
    }
  }

  end() {
    setPlayerAnimation(playerAnimationStatus.stop);
    let getEnd = setInterval(() => {
      let curr = this.iterator.next();
      if (!curr.done) {
        this.render(curr.value.character, curr.value.content);
      } else {
        clearInterval(getEnd);
        document.getElementById(`dialogue_player`).style.opacity = 0;
        document.getElementById(`dialogue_guest`).style.opacity = 0;
        document.dispatchEvent(new Event("dialogueEnd"));
        sayYes.play();
      }
    }, 1000);
  }
  renderChoices(choice1, choice2) {
    const coin = new Audio("./assets/audio/coin.wav");
    const cough = new Audio(
      "./assets/audio/Human Female Cough Short Cough 01.wav"
    );
    coin.volume = 0.5;
    cough.volume = 0.5;
    cough.play();
    setPlayerAnimation(playerAnimationStatus.stop);
    let choice1Div = document.createElement("button");
    let choice2Div = document.createElement("button");
    let choices = document.createElement("div");

    choice1Div.id = "choice1";
    choice1Div.innerText = choice1.content;

    choice2Div.id = "choice2";
    choice2Div.innerText = choice2.content;

    choice1Div.addEventListener("click", () => {
      choice1Div.innerText = `+${choice1.coin}$`;
      coin.play();
      document.dispatchEvent(
        new CustomEvent("clickChoice", { detail: choice1.coin })
      );
      setTimeout(() => this.remove("player"), 500);
    });
    choice2Div.addEventListener("click", () => {
      coin.play();
      choice2Div.innerText = `+${choice2.coin}$`;
      document.dispatchEvent(
        new CustomEvent("clickChoice", { detail: choice2.coin })
      );
      setTimeout(() => this.remove("player"), 500);
    });

    choices.appendChild(choice1Div);
    choices.appendChild(choice2Div);
    document.getElementById(`dialogue_player`).appendChild(choices);
  }
  render(character, content) {
    document.getElementById(`dialogue_${character}`).style.opacity = 1;
    document.getElementById(`dialogue_${character}`).innerText = content;
  }

  remove(character) {
    document.getElementById(`dialogue_${character}`).style.opacity = 0;
  }
}
