const Ship = require("./ship")

const carrier = new Ship(5)
const carrierIsSunk = new Ship(5)
carrierIsSunk.numberOfHits = 5

describe("Ship.hit", () => {
    
    test("increment hit number", () => {
        expect(carrier.hit()).toBe(1)
    })
})

describe("Ship.isSunk", () => {

    test("calculates if ship is sunk", () => {
        expect(carrier.isSunk()).toBe(false)
    })
    test("calculates if ship is sunk", () => {
        expect(carrierIsSunk.isSunk()).toBe(true)
    })
})