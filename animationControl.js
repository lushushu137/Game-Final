let currOrigin = document.location.href;

export let getUrl = (url) => {
  let parsedUrl =
    url[0] === "/" ? url.slice(1) : url[0] === "." ? url.slice(2) : url;
  return `url(${currOrigin}${parsedUrl})`;
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
  document.getElementById("guest").style.backgroundImage = getUrl(movement);
  console.log("setWomanAnimation backgroundImage:", getUrl(movement));
};

export let setPlayerAnimation = (status) => {
  document.getElementById("player").style.backgroundImage = getUrl(status);
};

export let switchBrightness = (value) => {
  document.getElementById("game").style.filter = `brightness(${value})`;
};
