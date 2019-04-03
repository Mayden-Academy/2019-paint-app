// IE10 Fixes

// Included polyfill to allow forEach loop to work in IE10
if (window.NodeList && !NodeList.prototype.forEach) {
    NodeList.prototype.forEach = function(callback, thisArg) {
        thisArg = thisArg || window;
        for (var i = 0; i < this.length; i++) {
            callback.call(thisArg, this[i], i, this);
        }
    };
}
//  The good stuff from here on down!!!
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

function setActive(button) {
    var buttonColorClass = button.id
    var buttonColorClassActive = buttonColorClass + '-active'
    if (!buttonColorClass.indexOf('-active') > -1) {
        button.classList.remove(buttonColorClass)
        button.classList.add(buttonColorClassActive)
    }
}

function setToInactive() {
    buttonArray.forEach(function (currentColor) {
        currentColor.className = ''
        currentColor.classList.add(currentColor.id)
        currentColor.classList.add('button')
    })
}

function setPaintColor(color) {
    paintColor = color
}

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

canvas.addEventListener('contextmenu', function () {
    mouseIsPressed = false
})

buttonArray.forEach(function (button) {
    button.addEventListener('click', function (e) {
        var buttonClick = e.target
        var color = buttonClick.getAttribute('data-color')
        setToInactive()
        setActive(buttonClick)
        setPaintColor(color)
    })
})

createGrid()