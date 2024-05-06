class Gameboard {
    constructor () {
        this.board = []
        this.missedShots = []
        this.gameIsOver = false
    }

    placeShip (ship, ...coordinates) {
        this.board.push({shipType : ship, shipPlacement : coordinates})

        return this.board[this.board.length - 1]
    }

    receiveAttack (coordinate) {
        

        let attackHitsShip = false

        for (let i = 0; i < this.board.length; i++) {
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

    gameOver () {

        for (let i = 0; i < this.board.length; i++) {
            if(this.board[i].shipType.shipIsSunk === false) {
                return this.gameIsOver
            }
            else return this.gameIsOver = true
        }
    }
}



module.exports = Gameboard