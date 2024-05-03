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

describe("Gameboard.receiveAttack", () => {
    test("hit ship but the ship doesn't sink", () => {
        expect(player1.receiveAttack(1)).toEqual({"numberOfHits": 1, "shipIsSunk": false, "shipLength": 5})
    })
    test("hit ship but the ship doesn't sink", () => {
        expect(player1.receiveAttack(11)).toEqual({"numberOfHits": 1, "shipIsSunk": false, "shipLength": 2})
    })
    test("hit ship but the ship doesn't sink", () => {
        expect(player1.receiveAttack(8)).toEqual({"numberOfHits": 1, "shipIsSunk": false, "shipLength": 3})
    })
    test("hit ship but the ship doesn't sink", () => {
        expect(player1.receiveAttack(9)).toEqual({"numberOfHits": 2, "shipIsSunk": false, "shipLength": 3})
    })



    test("doesn't hit any ship 6", () => {
        expect(player1.receiveAttack(6)).toEqual([6])
    })
    test("doesn't hit any ship 7", () => {
        expect(player1.receiveAttack(7)).toEqual([6, 7])
    })
    test("doesn't hit any ship 13", () => {
        expect(player1.receiveAttack(13)).toEqual([6, 7, 13])
    })


    test("hit ship and the ship is sunk", () => {
        expect(player1.receiveAttack(12)).toEqual({"numberOfHits": 2, "shipIsSunk": true, "shipLength": 2})
    })
    test("hit ship and the ship is sunk", () => {
        expect(player1.receiveAttack(10)).toEqual({"numberOfHits": 3, "shipIsSunk": true, "shipLength": 3})
    })
})