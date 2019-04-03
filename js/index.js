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
createGrid()

var color = document.getElementById('eraser').getAttribute('data-color')

function setPaintColor(color) {
    paintColor = color
}