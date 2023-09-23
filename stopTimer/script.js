const startBtn = document.querySelector('.start')
const stopBtn = document.querySelector('.stop')
const resetBtn = document.querySelector('.reset')


let h=m=s=mss=0                  //create variable for value = 0;
let startTime = 0;               //create variable for clearinterval function callback

//create function for start button
startBtn.addEventListener('click',()=>{
    startBtn.classList.add('start-active')
    stopBtn.classList.remove('stop-active')
    startTime = setInterval(()=>{
        mss++
    if(mss==100){
        s++ 
        mss=0
    }if(s==60){
        m++
        s=0
    }if(m==60){
        h++
        m=0
    }
    speedTest()
    },10)
})

//create function for stop button
stopBtn.addEventListener('click',()=>{
    startBtn.classList.remove('start-active')
    stopBtn.classList.add('stop-active')
    clearInterval(startTime)     // call variable in clearInterval function
})

//create function for reset function
resetBtn.addEventListener('click',()=>{
    h=m=s=mss=0                  //call variable
    startBtn.classList.remove('start-active')
    stopBtn.classList.remove('stop-active')
    clearInterval(startTime)
    speedTest()                  //call function from value = 0
})

//create function for value = 0
function speedTest(){
    // creat ternary oprator for value < 10  
    hrs = h<10 ?"0"+h:h
    min = m<10 ?`0${m}`:m
    sec = s<10 ?"0"+s:s
    mil = mss<10 ? "0"+mss:mss
    
    // Using DOM concept final Output
    document.querySelector('.hrs').innerText = hrs
    document.querySelector('.min').innerText = min
    document.querySelector('.sec').innerText = sec
    document.querySelector('.ms').innerText = mil
}