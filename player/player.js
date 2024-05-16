const Gameboard = require("../gameboard/gameboard")


const players = (function () {

    const human = new Gameboard

    const computer = new Gameboard
})

const random = (function () {

    const randomNumber = () => Math.floor(Math.random() * 101)

    const chooseVerticalOrHorizontalAxe = () => Math.floor(Math.random() * 11)

    // if (a % 2 === 0) return verticalOrHorizontal = "vertical"
    // else return verticalOrHorizontal = "horizontal"
    return { randomNumber, chooseVerticalOrHorizontalAxe }
})()


function computerPlaceShip (shipLength) {

    // getOtherNumbers(random.randomNumber, ship.shipLength)


    let verticalOrHorizontal = random.chooseVerticalOrHorizontalAxe()

    if (verticalOrHorizontal % 2 === 0) return placeVertical(shipLength)
    else return placeHorizontal(shipLength)

    // at the end i need a variable of numbers 

    // tchip, it just need to attack in random mode

    // and place ships in random mode at the start
}

function placeVertical (shi) {

    let a = Math.floor(Math.random() * 11)

    if (a % 2 === 0) return placeVerticalUp(random.randomNumber(), shi)
    else return placeVerticalDown(random.randomNumber(), shi)
}

function placeHorizontal (shi) {

    let b = Math.floor(Math.random() * 11)

    if (b % 2 === 0) return placeHorizontalRight(random.randomNumber(), shi)
    else return placeHorizontalLeft(random.randomNumber(), shi)
}


// function getOtherNumbers (number, length) {

//     let shipCoordinates = number

//     return placeVerticalDown(shipCoordinates, number, length)

    
// }


function placeHorizontalRight (number, length) {
    let shipCoordinates = number

    for (let i = 0; i < length - 1; i++) {

        shipCoordinates += ", " + (number + (i + 1))

    }

    return shipCoordinates
}

function placeHorizontalLeft (number, length) {
    let shipCoordinates = number

    for (let i = 0; i < length - 1; i++) {

        shipCoordinates += ", " + (number - (i + 1))

    }

    return shipCoordinates
}

function placeVerticalUp (number, length) {
    let shipCoordinates = number

    for (let i = 0; i < length - 1; i++) {

        shipCoordinates += ", " + (number - ((i + 1) * 10))

    }

    return shipCoordinates
}

function placeVerticalDown (number, length) {
    let shipCoordinates = number

    for (let i = 0; i < length - 1; i++) {

        shipCoordinates += ", " + (number + ((i + 1) * 10))

    }

    return shipCoordinates
}

// the only thing that the computer needs to know hoy to do is place ships with sense 


// like why am i even doing that. am just tempted to create two distinct factories that do one or another thing



// module.exports = Player

// console.log(computerPlaceShip(3))

module.exports = computerPlaceShip

