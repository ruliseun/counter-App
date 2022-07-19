const counterEl = document.querySelector('.counter')
const clickBtn = document.querySelector('.button')
let countDownEl = document.querySelector('.countDown')
let countDownText = document.querySelector('.countDown-paragraph')
let count = 0;
let countDownTimerMax = 5
let countDownTimer;
let timer;

counterEl.style.color = 'red'

clickBtn.addEventListener('click', function (){
    render()
})

function render(){
    count++
    counterEl.style.color = '#0a0a23'
    counterEl.textContent = count
    clearTimeout(timer)
    timer = setTimeout(reset, 5000)
    countdown()
}

function reset() {
    count = 0
    counterEl.textContent = count
    counterEl.style.color = 'red'
}

countDownEl.textContent = countDownTimerMax

function countdown() {
    countDownTimerMax = 5
    countDownEl.textContent = countDownTimerMax
    countDownText.style.color = 'black'
    clearInterval(countDownTimer)
    countDownTimer = setInterval(reduceCountDown, 1000)
}

function reduceCountDown () {
    countDownTimerMax--
    countDownEl.textContent = countDownTimerMax
    countDownText.style.color = 'red'
    if(countDownTimerMax === 0){
        clearInterval(countDownTimer)
        countDownTimerMax = 5
        countDownEl.textContent = countDownTimerMax
        countDownText.style.color = 'black'
    }
}





