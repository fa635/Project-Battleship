// const Player = require("../player/player.js")

const computerPlaceShip = require("../player/player.js")

describe("shipCoordinates", () => {
    test("works", () => {
        expect(computerPlaceShip(3)).toBe("hello")
    })
})

// describe("Player", () => {
//     test("creates player with board", () => {
//         expect(human).toBe("hello")
//     })
// })