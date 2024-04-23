class Ship {
    constructor (shipLength) {
        this.shipLength = shipLength
        this.numberOfHits = 0
        this.shipIsSunk = false
    }

    hit() {
        this.numberOfHits++
        return this.numberOfHits
    }
}




module.exports = Ship