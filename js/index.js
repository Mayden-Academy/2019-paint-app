var canvas = document.querySelector('main')
var paintColor = '#FFFFFF'
var mouseIsPressed = false
var buttonArray = document.querySelectorAll('.button')
console.log(buttonArray)
function createGrid() {
    for(var i = 0; i < 18644; i++ ) {
        newDiv = document.createElement('div')
        div = canvas.appendChild(newDiv)
        div.classList.add('paintable')
    }
}

function setActive(button){
    var buttonColorClass = button.id
    var buttonColorClassActive = buttonColorClass + '-active'
    if(!buttonColorClass.includes('-active')){
        button.classList.replace(buttonColorClass, buttonColorClassActive)
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

function setPaintColor(color) {
    paintColor = color
}

buttonArray.forEach(function (button) {
    button.addEventListener('click', function (e) {
        var buttonClick = e.target
        var color = buttonClick.getAttribute('data-color')
        setActive(buttonClick)
        setPaintColor(color)
    })
})

