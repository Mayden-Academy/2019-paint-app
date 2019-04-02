window.addEventListener('load', function () {

    var canvas = document.querySelector('main')
    var paintColor = '#FFFFFF'
    var mouseIsPressed = false

    function createGrid() {

        for(var i = 0; i < 18644; i++ ) {
            newDiv = document.createElement('div')
            div = canvas.appendChild(newDiv)
            div.classList.add('paintable')
        }
    }

    canvas.addEventListener('mousedown', function (e) {
        mouseIsPressed = true
        var box = e.target
        if (mouseIsPressed) {
            e.preventDefault()
            box.style.backgroundColor = paintColor
        }

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
})
