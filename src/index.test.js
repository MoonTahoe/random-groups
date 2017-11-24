import { suggest, group } from './'

describe("suggest()", () => {

    it("SUCCESS - groups of 12", () => {
        const result = suggest(12)
        expect(result).toEqual([
            [3, 4],
            [4, 3],
            [6, 2],
            [2, 6]
        ])
    })

    it("SUCCESS - groups of 13", () => {
        const result = suggest(13)
        expect(result).toEqual(null)
    })

    it("SUCCESS - groups of 42", () => {
        const result = suggest(42)
        expect(result).toEqual([
            [7, 6],
            [6, 7],
            [3, 14],
            [14, 3],
            [21, 2],
            [2, 21]
        ])
    })

    it("ERROR - groups of 1", () => {
        const result = suggest(1)
        expect(result).toEqual(null)
    })
    
    it("ERROR - groups of 2", () => {
        const result = suggest(2)
        expect(result).toEqual(null)
    })

})

describe("group()", () => {

    it("SUCCESS - group(12)")

    it("SUCCESS - group(13)")

    it("SUCCESS - group(208)")

    it("SUCCESS - group(50)")

    it("SUCCESS - group(4)")

    it("SUCCESS - group(23)")

    it("ERROR - groups of 1")
    
    it("ERROR - groups of 2")

    it("ERROR - groups of 3")

})