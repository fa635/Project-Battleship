const players = require("../player/player.js")

describe("players.populateComputerBoard", () => {
    test("place ships randomly on computer game board", () => {
        expect(players.populateComputerBoard()).toBe(players.computer)
    })
})

