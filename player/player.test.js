// const Player = require("../player/player.js")

const players = require("../player/player.js")

describe("shipCoordinates", () => {
    test("works", () => {
        expect(players.populateComputerBoard()).toBe(players.computer)
    })
})

// describe("Player", () => {
//     test("creates player with board", () => {
//         expect(human).toBe("hello")
//     })
// })