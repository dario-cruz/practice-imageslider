// Define all of the elements to be used.
const spanButtonLeft = document.querySelector('.right-arrow')
const spanButtonRight = document.querySelector('.left-arrow')
console.log(spanButtonLeft, spanButtonRight)

let counterValue = 1
// Events for arrow buttons.
spanButtonLeft.addEventListener('click', leftArrowCycle())
spanButtonRight.addEventListener('click', rightArrowCycle())


// Function for cycling through elems. 
function leftArrowCycle() {
    window.open(`#image-${counterValue}`, '_self')
    counterValue = counterValue++
    console.log(counterValue)
}
function rightArrowCycle() {
    window.open(`#image-${counterValue}`, '_self')
    counterValue = counterValue--
    console.log(counterValue)  
}