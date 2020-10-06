// this says i only want the contents of this file to load once all the HTML has been written
// can be done because JS tag is in the header of HTML
// alternative: put script tag at the bottom of the HTML file

document.addEventListener('DOMContentLoaded', () => {
    const grid = document.querySelector('.grid')
    // create a div with createElement
    const doodler = document.createElement('div')
    let doodlerLeftSpace = 50
    let doodlerBottomSpace = 150
    let isGameOver = false
    let platformCount = 5

    function createDoodler() {
        // grid is the parent, putting the child into it (div into grid)
        grid.appendChild(doodler)
        // add the doodler class styling
        doodler.classList.add('doodler')
        // move elements using JS - use JS to give CSS attributes to elements
        doodler.style.left = doodlerLeftSpace + 'px' // '50px' moves the element 50 px, giving left spacing of 50px - variable instead of string allows change later
        doodler.style.bottom = doodlerBottomSpace + 'px'
    }
    
    class Platform {
        // constructor to create new class
        constructor(newPlatBottom) {
            this.bottom = newPlatBottom
            this.left = Math.random() * 315 // random number between 0-315, 400-85 is 315
            this.visual = document.createElement('div') // div for each platform

            const visual = this.visual
            visual.classList.add('platform')
            visual.style.left = this.left + 'px'
            visual.style.bottom = this.bottom + 'px'
            grid.appendChild(visual)
        }
    }

    function createPlatforms() {
        // need to do 5 times
        for (let i=0; i < platformCount; i++) {
            // grid height divided by num of platforms platformCount
            let platGap = 600 / platformCount
            let newPlatBottom = 100 + i * platGap // using for loop to increment platform space
            let newPlatform = new Platform(newPlatBottom) // create a new class of this

        }
    }

    function start() {
        // doodler appears if this function is invoked
        // (isGameOver == false)
        if (!isGameOver) {
            createDoodler()
            createPlatforms()
        }
    }
    // attach to button so it doesn't just start immediately
    start()
});