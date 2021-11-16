const classifyWord = require("./index.js");

describe("word classification", () => {
  it("can classify 'kar'", () => {
    // Arrange
    const input = "kar";

    // Act
    const result = classifyWord(input);

    // Assert

    // Note: This result is just a "suggestion"
    // feel free to create your own classification
    // result data structure
    const expectedResult = [
      ["k", "rest"],
      ["a", "korteKlinker"],
      ["r", "rest"],
    ];
    expect(result).toEqual(expectedResult);
  });
});
