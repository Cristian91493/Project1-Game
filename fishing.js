//function for timer for 10 second count down
function updateProgressBar(progressBar, value, percentage){
    value = Math.round(value)
    progressBar.querySelector(".progress__fill").style.width = `${percentage}%`
    progressBar.querySelector(".progress__text").innerText = `${value/10} Secs`
}
pBar = document.querySelector(".progress")

//function for the timer for the 4 second count
function updateFishingBar(fishingProgressBar, value, percentage){
    value = Math.round(value)
    fishingProgressBar.querySelector(".fishing__progress__fill").style.width = `${percentage}%`
    fishingProgressBar.querySelector(".fishing__progress__text").innerText = `${value/10} Secs`
}
fBar = document.querySelector(".fishing__progress")




// function updateFishigBar()

let timeLeft= 100
let timeToFour= 0

function zeroToFour(){
setInterval(function(){
    if(timeToFour<=30){
                timeToFour+= 10
                updateProgressBar(pBar, timeToFour,timeToFour)   
            }},1000)}
            
            // need to make this not count twice or keep stacking the countdown 
function tenToZero(){
setInterval(function(){
    if(timeLeft>=1){
        timeLeft= timeLeft-10
        console.log(timeLeft)
        updateProgressBar(pBar, timeLeft, timeLeft)  
    }
},1000 )
}


ripple = document.querySelector(".ripple")
bobber = document.querySelector(".bobber")
splash = document.querySelector(".splash")
fishingRod= document.querySelector(".fishing-rod")
progress= document.querySelector(".progress")

function castingForFish(){
    
        bobber.style.visibility="visible"
        fishingRod.style.visibility = "visible"
        progress.style.visibility = "visible"
        tenToZero()
        setTimeout(()=>{
            if(timeLeft <= 0){
            bobber.style.visibility="hidden"
            fishingRod.style.visibility = "hidden"
            progress.style.visibility="hidden"}
        },10000)
}


// need to make this work
function fishOnHook(){ 
    let chance= Math.floor(Math.random()*13-3)
    console.log(chance)
    if(chance >= 0){
        setTimeout(()=>{
            clearInterval(castingForFish)
            bobber.style.visibility = "hidden"
            progress.style.visibility = "hidden"
            splash.style.visibility = "visible"
            fishingRod.style.animationName = "fish-on-hook"
        },chance*1000)}
          
    }
    
function startPuzzle(){
    splash.addEventListener("click",() => {
    window.location.href = "puzzle.html"; 
    })
}

export function backToGame(){
    window.location.href = "index.html"
}

// export function toReward(){
//     return window.location.href = "reward.html"
// }

function gamePlay(){
    ripple.addEventListener("click", () => {
        castingForFish()
        timeLeft=100
        fishOnHook()
        zeroToFour()
        startPuzzle()
    })
    }
    gamePlay()
    













































    
    
    //     gamePlay()
    // function gamePlay(){
    // ripple.addEventListener("click", () => {
    //     bobber.style.visibility="visible"
    //     fishingRod.style.visibility = "visible"
    //     progress.style.visibility = "visible"
    //     tenToZero()
    //     setTimeout(()=>{
    //         if(timeLeft <= 0){
    //         bobber.style.visibility="hidden"
    //         fishingRod.style.visibility = "hidden"
    //         progress.style.visibility="hidden"}
    //         timeLeft= 100
    //     },10000)
    // })
    // }           