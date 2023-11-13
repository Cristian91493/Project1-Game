function updateProgressBar(progressBar, value){
    value = Math.round(value)
    progressBar.querySelector(".progress__fill").style.width = `${value}%`
    progressBar.querySelector(".progress__text").innerText = `${value/10} Secs`
}

pBar = document.querySelector(".progress")

//setinterval

// console.log(pBar)
let timeLeft= 100
let timeToFour= 0

function tenToZero(){
    setInterval(function(){
        if(timeLeft>=0){
            timeLeft =- 10 }
        } , 1000)
    }
    //count from 10 to 0
    // for(let i=10;i>=0; i--){
        //     setInterval(console.log(i),i*10000)
        // }
        
setInterval(function(){
    if(timeLeft>=1){
        console.log(timeLeft)
        timeLeft= timeLeft-10
        updateProgressBar(pBar, timeLeft)   
    }},1000)

console.log(timeLeft)

function zeroToFour(){

}