class Gameboard {
    constructor (player) {
        this.player = player
        this.board = []
    }

    placeShip (ship, ...coordinates) {
        this.board.push({shipType : ship, shipPlacement : coordinates})

        return this.board[this.board.length - 1]
    }

    // this is stupid, the ship's gonna take a bunch of places not 1 cell
}


module.exports = Gameboard