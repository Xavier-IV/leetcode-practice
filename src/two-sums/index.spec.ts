import { twoSum } from "./index";

describe("twoSum", () => {
  it("should return indices of two numbers that add up to target", () => {
    const nums = [2, 7, 11, 15];
    const target = 9;
    const result = twoSum(nums, target);
    expect(result).toEqual([0, 1]);
  });

  it("should handle negative numbers", () => {
    const nums = [-1, -2, -3, -4];
    const target = -5;
    const result = twoSum(nums, target);
    expect(result).toEqual([1, 2]);
  });
});
