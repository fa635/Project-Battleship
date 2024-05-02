const Gameboard = require("./gameboard")
const Ship = require("./ship/ship.js")

const carrier = new Ship(5)
const cruiser = new Ship(3)
const destroyer = new Ship(2)

const player1 = new Gameboard ("hey")

describe("Gameboard.placeShip", () => {

    test("places carrier at coordinates on gameboard", () => {
        expect(player1.placeShip(carrier, 1, 2, 3, 4, 5)).toEqual({"shipPlacement": [1, 2, 3, 4, 5], "shipType": {"numberOfHits": 0, "shipIsSunk": false, "shipLength": 5}})
    })
    test("places cruiser at coordinates on gameboard", () => {
        expect(player1.placeShip(cruiser, 8, 9, 10)).toEqual({"shipPlacement": [8, 9, 10], "shipType": {"numberOfHits": 0, "shipIsSunk": false, "shipLength": 3}})
    })
    test("places destroyer at coordinates on gameboard", () => {
        expect(player1.placeShip(destroyer, 11, 12)).toEqual({"shipPlacement": [11, 12], "shipType": {"numberOfHits": 0, "shipIsSunk": false, "shipLength": 2}})
    })
})