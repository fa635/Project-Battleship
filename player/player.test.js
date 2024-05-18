// const Player = require("../player/player.js")

const placeVerticalDown = require("../player/player.js")

describe("shipCoordinates", () => {
    test("works", () => {
        expect(placeVerticalDown(100, 3)).toBe("hello")
    })
})

// describe("Player", () => {
//     test("creates player with board", () => {
//         expect(human).toBe("hello")
//     })
// })