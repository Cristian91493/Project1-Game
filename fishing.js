function updateProgressBar(progressBar, value, percentage){
    value = Math.round(value)
    progressBar.querySelector(".progress__fill").style.width = `${percentage}%`
    progressBar.querySelector(".progress__text").innerText = `${value/10} Secs`
}

pBar = document.querySelector(".progress")

//setinterval

// console.log(pBar)
let timeLeft= 100
let timeToFour= 0


//need to put the lines below into functions to be called on later
//also should make a progress bar for each one or find a way to use the same for both

// setInterval(function zeroToFour(){
//     if(timeToFour<=30){
//                 timeToFour+= 10
//                 updateProgressBar(pBar, timeToFour,timeToFour*2.5)   
//             }},1000)


// setInterval(function tenToZero(){
//     if(timeLeft>=1){
//         timeLeft= timeLeft-10
//         updateProgressBar(pBar, timeLeft, timeLeft)   
//     }},1000) 