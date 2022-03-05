const hour       = document.querySelector('.h'),
      min        = document.querySelector('.m'),
      sec        = document.querySelector('.s'),
      hoursNum   = document.querySelector('.hours'),
      minutesNum =  document.querySelector('.minutes');

function clock() {
    let time    = new Date(),
          seconds = time.getSeconds() * 6,
          minutes = time.getMinutes() * 6,
          hours   = time.getHours() * 6;


          sec.style = `transform: rotate(${seconds}deg)`,
          min.style = `transform: rotate(${minutes}deg)`,
          hour.style = `transform: rotate(${hours}deg)`


hoursNum.innerHTML = time.getHours() < 10 ? '0' + time.getHours() : time.getHours()


minutesNum.innerHTML = time.getMinutes() < 10 ? '0' + time.getMinutes() : time.getMinutes()


setTimeout(() => clock(), 1000)


}
clock()



const links = document.querySelectorAll('.tabsItem'),
      tabs  = document.querySelectorAll('.tabsContentItem');


      for (let i = 0; i < links.length; i++) {
         links[i].addEventListener('click', function (e){
             e.preventDefault()
             for (let x = 0; x < links.length; x++) {
                 links[x].classList.remove('active');
                 tabs[x].classList.remove('active')
                 
             }
             tab(this, tabs[i])
        
         })

          
      }

      function tab(el,arr){
          el.classList.add('active')
          arr.classList.add('active')
      }



const hourElement = document.querySelector('.stopwatch__hours'),
    minuteElement = document.querySelector('.stopwatch__minutes'),
    secondsElement = document.querySelector('.stopwatch__seconds'),
    millisecondsElement = document.querySelector('.stopwatch__miliseconds');

const startButton = document.querySelector('.stopwatch__btn'),
      stooopButton = document.querySelector('.stooopwatch__btn'),
      pauseButton = document.querySelector('.pausewatch__btn'),
      newButton = document.querySelector('.new__btn');


// startButton.addEventListener('click', () =>{
//     clearInterval(interval)
//     interval = setInterval(startTimer, 10)
// }) 
 startButton.addEventListener('click', () =>{
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
    
})

pauseButton.addEventListener('click', () =>{
    clearInterval(interval)
})
stooopButton.addEventListener('click', () =>{
    clearInterval(interval)
    clearFields()
    disableBtn()
    
    
    
})
newButton.addEventListener('click', () =>{
    clearInterval(interval)
    counter++
    const results = document.querySelector('.results')
    const block = document.createElement('div')
    block.classList.add('results-info')
    block.innerText = `Result ${counter} :${hours}:${minutes}:${seconds}:${milliseconds}`
    results.append(block)
    clearFields()
    clearInterval(interval)
    interval = setInterval(startTimer, 10)
    

    
})




let hours = 00,
    minutes = 00,
    seconds = 00,
    milliseconds = 00,
    interval,
    counter = 0,
    disabled = true
    


function startTimer(){
    milliseconds++

    // seconds
    if(milliseconds < 9){
        millisecondsElement.innerText = '0' + milliseconds
    }
    if(milliseconds > 9){
        millisecondsElement.innerText = milliseconds
    }
    if(milliseconds > 99){
        seconds++
        secondsElement.innerText = '0' + seconds
        milliseconds = 0
        millisecondsElement.innerText = '0' + milliseconds
        

    }
    if(seconds < 9){
        secondsElement.innerText = '0' + seconds
    }
    if(seconds > 9){
        secondsElement.innerText = seconds
    }
    if(seconds > 59){
        minutes++
        minuteElement.innerText = '0' + minutes
        seconds = 0
        secondsElement.innerText = '0' + seconds
    }



    // hours
    if(minutes < 9){
        minuteElement.innerText = '0' + minutes
    }
    if(minutes > 9){
        minuteElement.innerText = minutes
    }
    if(minutes > 59){
        hours++
        hourElement.innerText = '0' + hours
        hours = 0
        hourElement.innerText = '0' + seconds
    }

    if(hours > 9){
        hourElement.innerText = hours
    }
    newButton.disabled = false
}


function clearFields() {
    hours = 00,
    minutes = 00,
    seconds = 00,
    milliseconds = 00,
    hourElement.textContent = '00'
    minuteElement.textContent = '00'
    secondsElement.textContent = '00'
    millisecondsElement.textContent = '00'
}
function disableBtn(){
    if(disabled){
        newButton.disabled = true
    }
}
disableBtn()
