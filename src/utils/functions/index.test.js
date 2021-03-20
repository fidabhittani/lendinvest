import {
  findTotalAvailableAmount,
  findTotalAmount,
  findPercentages,
  formatAmountNum,
  formatMoney,
} from ".";

const mockData = [
  { id: 1, available: "10", amount: "11" },
  { id: 2, available: "3", amount: "12" },
  { id: 3, available: "2", amount: "13" },
];

/**
 *  Test suite for :formatMoney
 */
describe("Calculate Available Amount : formatMoney", () => {
  test("It Should format number money as human readable", () => {
    expect(formatMoney(44000)).toEqual("44,000");
    expect(formatMoney(145000)).toEqual("145,000");
    expect(formatMoney(33000)).toEqual("33,000");
    expect(formatMoney(14400099)).toEqual("14,400,099");
  });
});

/**
 *  Test suite for :formatAmountNum
 */
describe("Calculate Available Amount : formatAmountNum", () => {
  test("It Should format money as integer", () => {
    expect(formatAmountNum("44,000")).toEqual(44000);
    expect(formatAmountNum("145,000")).toEqual(145000);
    expect(formatAmountNum("33,000")).toEqual(33000);
    expect(formatAmountNum("14,400,099")).toEqual(14400099);
  });
});

/**
 *  Test suite for :findPercentages
 */
describe("Calculate Available Amount : findPercentages", () => {
  test("Mock data should be an array", () => {
    expect(mockData).toBeInstanceOf(Array);
  });

  test("Mock data instances should objects", () => {
    const [instance] = mockData;
    expect(instance).toBeInstanceOf(Object);
  });

  test("Mock data object should have available , amount key", () => {
    const [instance] = mockData;
    expect(instance.available).toBe("10");
    expect(instance.amount).toBe("11");
  });

  test("It Should calculate percentages", () => {
    const outputInvestedPercentage = 58;
    const outputAvailablePercentage = 42;

    const { investedPercentage, availablePercentage } = findPercentages(
      mockData
    );

    expect(Math.round(investedPercentage)).toEqual(outputInvestedPercentage);
    expect(Math.round(availablePercentage)).toEqual(outputAvailablePercentage);
  });
});

/**
 *  Test suite for :findTotalAmount
 */
describe("Calculate Available Amount : findTotalAmount", () => {
  test("Mock data should be an array", () => {
    expect(mockData).toBeInstanceOf(Array);
  });

  test("Mock data instances should objects", () => {
    const [instance] = mockData;
    expect(instance).toBeInstanceOf(Object);
  });

  test("Mock data object should have available key", () => {
    const [instance] = mockData;
    expect(instance.amount).toBe("11");
  });

  test("It Should calculate total; amount", () => {
    const output = 36;
    expect(findTotalAmount(mockData)).toEqual(output);
  });
});

/**
 *  Test suite for :findTotalAvailableAmount
 */
describe("Calculate Available Amount : findTotalAvailableAmount", () => {
  test("Mock data should be an array", () => {
    expect(mockData).toBeInstanceOf(Array);
  });

  test("Mock data instances should objects", () => {
    const [instance] = mockData;
    expect(instance).toBeInstanceOf(Object);
  });

  test("Mock data object should have available key", () => {
    const [instance] = mockData;
    expect(instance.available).toBe("10");
  });

  test("It Should calculate available amount", () => {
    const output = 15;
    expect(findTotalAvailableAmount(mockData)).toEqual(output);
  });
});
