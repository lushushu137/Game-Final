export let womanAnimationStatus = {
    lying: 'url(/assets/guestCome_no_repeat.gif)',
    leave: 'url(/assets/guestLeave_no_repeat.gif)',
}
export let playerAnimationStatus = {
    stop: 'url(/assets/player.png)',
    animation: 'url(/assets/player.gif)'
}


export let setWomanAnimation = (movement) => {
    document.getElementById("guest").style.backgroundImage = `${movement}`
}

export let setPlayerAnimation = (status) => {
    document.getElementById("player").style.backgroundImage = status;
}

export  let switchBrightness = (value) => {
    document.getElementById('game').style.filter = `brightness(${value})`;
}