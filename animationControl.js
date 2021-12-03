let currOrigin = document.location.origin;

export let getUrl = (url) => {
  return `url(${currOrigin}${url})`;
};

export let womanAnimationStatus = {
  lying: "/assets/guestCome_no_repeat.gif",
  leave: "/assets/guestLeave_no_repeat.gif",
};
export let playerAnimationStatus = {
  stop: "/assets/player.png",
  animation: "/assets/player.gif",
};

export let setWomanAnimation = (movement) => {
  document.getElementById(
    "guest"
  ).style.backgroundImage = `url(${currOrigin}${movement})`;
  console.log(
    "setWomanAnimation backgroundImage:",
    `url(${currOrigin}${movement})`
  );
};

export let setPlayerAnimation = (status) => {
  document.getElementById(
    "player"
  ).style.backgroundImage = `url(${currOrigin}${status})`;
};

export let switchBrightness = (value) => {
  document.getElementById("game").style.filter = `brightness(${value})`;
};
