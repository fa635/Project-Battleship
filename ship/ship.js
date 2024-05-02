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

    isSunk() {
        if (this.numberOfHits === this.shipLength) return this.shipIsSunk = true
        else return false
    }
}




module.exports = Ship