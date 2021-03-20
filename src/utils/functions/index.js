/**
 *  Utility Business functions
 */

/** Find All available amount */
export const findTotalAvailableAmount = (loans) => {
  return loans.reduce((available, next) => {
    const ava = formatAmountNum(next.available);
    available = available + ava;
    return available;
  }, 0);
};

/** Find All  amount */
export const findTotalAmount = (loans) => {
  return loans.reduce((amount, next) => {
    const ava = formatAmountNum(next.amount);
    amount = amount + ava;
    return amount;
  }, 0);
};

/** Find Invested Percentage */
export const findPercentages = (data) => {
  const totalAmount = findTotalAmount(data);
  const totalAvailableAmount = findTotalAvailableAmount(data);
  const investedAmount = totalAmount - totalAvailableAmount;
  const investedPercentage = (investedAmount / totalAmount) * 100;
  const availablePercentage = (totalAvailableAmount / totalAmount) * 100;

  return {
    investedPercentage,
    availablePercentage,
  };
};

/**
 * Format number amount
 */

export const formatMoney = (amount) => {
  return (Math.round(amount * 100) / 100).toLocaleString();
};

/**
 * Format a string amount into number
 * @param {*} strNum
 * @returns
 */
export const formatAmountNum = (strNum) => {
  if (typeof strNum !== "string") {
    return 0;
  }
  const num = Number(strNum.split(",").join(""));
  if (isNaN(num)) {
    return 0;
  }
  return num;
};

/**
 *  Get Updated Loan
 */

export const getUpdatedLoan = (loan, investment) => {
  const { available } = loan;
  const newTotalAvailable = formatAmountNum(available) - investment;
  const newLoan = {
    ...loan,
    available: formatMoney(newTotalAvailable),
    invested: true,
  };
  return newLoan;
};
