function updateProgressBar(progressBar, value, percentage){
    value = Math.round(value)
    progressBar.querySelector(".progress__fill").style.width = `${percentage}%`
    progressBar.querySelector(".progress__text").innerText = `${value/10} Secs`
}

pBar = document.querySelector(".progress")


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
            timeLeft= 100
        },10000)
}



function fishOnHook(){ 
    let chance= Math.floor(Math.random()*13-3)
    console.log(chance)
    if(chance >= 0){
        setTimeout(()=>{
            bobber.style.visibility = "hidden"
            progress.style.visibility = "hidden"
            splash.style.visiblity = "visible"
            fishingRod.style.animationName = "fish-on-hook"
            

        },chance*1000)
    }
    splash.addEventListener("click",() => {
        window.location.href = "puzzle.html";
        
    })
}

// fishOnHook()

function gamePlay(){
    ripple.addEventListener("click", () => {
        castingForFish()
        // fishOnHook()
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

    
    