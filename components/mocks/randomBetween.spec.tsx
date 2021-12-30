import { randomBetween } from "./randomBetween";

const randomSpy = jest.spyOn(Math, "random");

describe("randomBetween", () => {
  describe("when Math.random() returns 0", () => {
    beforeEach(async () => {
      randomSpy.mockClear().mockReturnValue(0);
    });

    it("called with min=3 and max=5 and returns 3", () => {
      expect(randomBetween(3, 5)).toBe(3);
      expect(randomSpy).toHaveBeenCalledTimes(1);
    });
  });

  describe("when Math.random() returns 0.5", () => {
    beforeEach(async () => {
      randomSpy.mockClear().mockReturnValue(0.5);
    });

    it("called with min=3 and max=5 and returns 4", () => {
      expect(randomBetween(3, 5)).toBe(4);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });

  describe("when Math.random() returns 0.999", () => {
    beforeEach(async () => {
      randomSpy.mockClear().mockImplementation(() => 0.999);
    });

    it("called with min=3 and max=5 and returns 5", () => {
      expect(randomBetween(3, 5)).toBe(5);
      expect(Math.random).toHaveBeenCalledTimes(1);
    });
  });
});
