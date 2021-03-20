import { findTotalAvailableAmount } from ".";

const mockData = [
  { id: 1, available: "10" },
  { id: 2, available: "3" },
  { id: 3, available: "2" },
];

describe("Calculate Available Amount", () => {
  test("Mock data should be an array", () => {
    expect(mockData).toBeInstanceOf(Array);
  });

  test("Mock data instances should objects", () => {
    const [instance] = mockData;
    expect(instance).toBeInstanceOf(Object);
  });

  test("Mock data object should have available key", () => {
    const [instance] = mockData;

    // expect(instance.available).shou;
  });

  test("It Should calculate available amount", () => {
    const output = 15;

    expect(findTotalAvailableAmount(mockData)).toEqual(output);
  });
});
