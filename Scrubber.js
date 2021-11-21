export class Scrubber {
    x = 0;
    y = 0;
    constructor(x, y){
        this.x = x;
        this.y = y;
    }

    moveX = (distance) => {
        this.x += distance;
    };
    moveY = (distance) => {
        this.y += distance;
    }
    
    

    render(){
        let scrubberDiv = document.getElementById("scrubber");
        scrubberDiv.style.left = this.x + 'px';
        scrubberDiv.style.top = this.y + 'px';
    }
}
