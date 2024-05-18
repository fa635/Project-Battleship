const Gameboard = require("../gameboard/gameboard")


const players = (function () {

    const human = new Gameboard

    const computer = new Gameboard
})

const random = (function () {

    const randomNumber = () => Math.floor(Math.random() * 101)

    const chooseVerticalOrHorizontalAxe = () => Math.floor(Math.random() * 11)

    return { randomNumber, chooseVerticalOrHorizontalAxe }
})()


function computerPlaceShip (shipLength) {

    let verticalOrHorizontal = random.chooseVerticalOrHorizontalAxe()

    if (verticalOrHorizontal % 2 === 0) return placeVertical(shipLength)
    else return placeHorizontal(shipLength)

    // at the end i need a variable of numbers 

    // tchip, it just need to attack in random mode

    // and place ships in random mode at the start

    // avoid that ships can be placed of board
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


function placeHorizontalRight (number, length) {
    let shipCoordinates = [number]

    for (let i = 0; i < length - 1; i++) {

        let toPush = number + (i + 1)

        if (toPush > 100 || toPush < 0) return computerPlaceShip(length)

        shipCoordinates.push(toPush)

    }

    return shipCoordinates
}


function placeHorizontalLeft (number, length) {
    let shipCoordinates = [number]

    for (let i = 0; i < length - 1; i++) {

        let toPush = number - (i + 1)

        if (toPush > 100 || toPush < 0) return computerPlaceShip(length)

        shipCoordinates.push(toPush)

    }

    return shipCoordinates
}




function placeVerticalUp (number, length) {
    let shipCoordinates = [number]

    for (let i = 0; i < length - 1; i++) {

        let toPush = number - (i + 1) * 10

        if (toPush > 100 || toPush < 0) return computerPlaceShip(length)

        shipCoordinates.push(toPush)


    }

    return shipCoordinates
}


function placeVerticalDown (number, length) {
    let shipCoordinates = [number]

    for (let i = 0; i < length - 1; i++) {

        let toPush = number + (i + 1) * 10

        if (toPush > 100 || toPush < 0) return computerPlaceShip(length)

        shipCoordinates.push(toPush)

    }

    return shipCoordinates
}


function makeShipStayOnGameBoard (coordinates, l) {
    

    // a = coordinates.length

    // return a

    // bitch ?!

    // maybe i should just check in the loop before the array gets printed

    // also function to populate computer gameboard




    // for (let i = 0; i < coordinates.length; i++) {

    //     if (coordinates[i] > 100 || coordinates[i] < 0) {

    //         return computerPlaceShip(l)

    //     }
    // }

    

}


// commit for everybody change variable to array for placement input


module.exports = placeVerticalDown

