import reverse from "./Reverse"

describe("unit test :: Reverse", () => {
    it("reverses a string and returns it", () => {
        //Given
        const normalText = "neuefische GMBH"

        //When
        const actual = reverse(normalText)

        //Then
        expect(actual).toBe("HBMG ehcsifeuen")
    })
})