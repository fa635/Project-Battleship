class Gameboard {
    constructor (player) {
        this.player = player
        this.board = []
        this.missedShots = []
    }

    placeShip (ship, ...coordinates) {
        this.board.push({shipType : ship, shipPlacement : coordinates})

        return this.board[this.board.length - 1]
    }

    receiveAttack (coordinate) {
        

        let attackHitsShip = false

        for (let i = 0;  i < this.board.length; i++ ) {
            if (this.board[i].shipPlacement.includes(coordinate)) {
                this.board[i].shipType.hit()

                attackHitsShip = true

                if (this.board[i].shipType.numberOfHits === this.board[i].shipType.shipLength) {
                    this.board[i].shipType.shipIsSunk = true
                } 

                return this.board[i].shipType
            }
        }

        if (attackHitsShip === false) {

            this.missedShots.push(coordinate)

            return this.missedShots
        } 
    }
}



module.exports = Gameboard