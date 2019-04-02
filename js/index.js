window.addEventListener('load', function () {

    var canvas = document.querySelector('main')

    function createGrid() {

        for(var i = 0; i < 19200; i++ ) {
            newDiv = document.createElement('div')
            div = canvas.appendChild(newDiv)
            div.classList.add('paintable')
        }
    }
    createGrid()
})
