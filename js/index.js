var canvas = document.querySelector('main')
var paintColor = '#FFFFFF'
var mouseIsPressed = false
var buttonArray = document.querySelectorAll('.button')

function createGrid() {
    for(var i = 0; i < 18644; i++ ) {
        newDiv = document.createElement('div')
        div = canvas.appendChild(newDiv)
        div.classList.add('paintable')
    }
}

function setToInactive() {
    buttonArray.forEach(function (currentColor) {
        currentColor.className = ''
        currentColor.classList.add('button', currentColor.id);
    })
}

function setPaintColor(color) {
    paintColor = color
}

 canvas.addEventListener('contextmenu', function () {
     mouseIsPressed = false
 })

canvas.addEventListener('mousedown', function (e) {
    e.preventDefault()
    mouseIsPressed = true
    var box = e.target
    box.style.backgroundColor = paintColor

    canvas.addEventListener('mousemove', function (e) {
        var box = e.target
        if (mouseIsPressed) {
            box.style.backgroundColor = paintColor
        }
    })
})

window.addEventListener('mouseup', function () {
    mouseIsPressed = false
})

buttonArray.forEach(function (button) {
    button.addEventListener('click', function (e) {
        var buttonClick = e.target
        var color = buttonClick.getAttribute('data-color')
        setToInactive()
        setPaintColor(color)
    })
})

createGrid()