const Ship = require("./ship")


describe("Ship.hit", () => {
    const carrier = new Ship(5)
    
    test("increment hit number", () => {
        expect(carrier.hit()).toBe(1)
    })
})