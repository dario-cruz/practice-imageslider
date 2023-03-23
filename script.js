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


// Create function that triggers transition when in viewport.
const imageObserver = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            return;
        }
        entry.target.classList.remove('is-visible')
    })
})

const theImages = document.querySelectorAll('.actual-image')
theImages.forEach(image => imageObserver.observe(image))
console.log(document.querySelectorAll('.actual-image'))

// Create a event fucnc that allows for navigating images with arrow keys. 
document.addEventListener('keydown', (e) => {
    if (e.code === 'ArrowLeft') {
        spanButtonLeft.click()
    } else if (e.code === 'ArrowRight') {
        spanButtonRight.click()
    }
})
