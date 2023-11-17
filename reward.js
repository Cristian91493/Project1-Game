function backToGame(){
    window.location.href = "index.html"
}

class Fish {
    constructor(nameOfFish, tokens,healthPoints,picture){
        this.name  = nameOfFish;
        this.tokens = tokens;
        this.healthPoints = healthPoints
        this.picture = picture
    }
}

const fish1 = new Fish("trout",2,8,"/Images/fish1.png")

const fish2 = new Fish("rockfish",4,14,"/Images/fish2.png")

const fish3 = new Fish("holographic spiner",6,12,"/Images/fish3.png")


const fish4 = new Fish("transparent anglerfish",8,10,"/Images/fish4.png")



let fishTypes = [fish1,fish2,fish3,fish4]

let inventory = []