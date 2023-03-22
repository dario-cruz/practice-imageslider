// Define all of the elements to be used.
const spanButtonLeft = document.getElementById('left-arrow')
const spanButtonRight = document.getElementById('right-arrow')
console.log(spanButtonLeft, spanButtonRight)

let counterValue = 1
// Events for arrow buttons.
spanButtonLeft.addEventListener('click', leftArrowCycle)
spanButtonRight.addEventListener('click', rightArrowCycle)


// Function for cycling through elems. 
function leftArrowCycle() {
    window.open(`#image-${counterValue}`, '_self')
    if (counterValue == 10) {
        counterValue = 1
    } else {
        counterValue = ++counterValue
    }
    console.log(counterValue)
}
function rightArrowCycle() {
    window.open(`#image-${counterValue}`, '_self')
    if (counterValue == 1) {
        counterValue = 10
    } else {
        counterValue = --counterValue
    }
    console.log(counterValue)  
}