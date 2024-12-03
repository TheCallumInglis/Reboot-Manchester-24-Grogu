import calculateMortgagePayments from "./calculateMortgagePayment";

export default function calculateSavings(mortgageInfo, overpayment) {
  const preOverpaymentTable = calculateMortgagePayments(
    mortgageInfo.loanamount,
    mortgageInfo.annualInterestRate,
    mortgageInfo.loanTermMonths
  );
  console.log("Pre Overpayment Table", preOverpaymentTable);

  const newLoanamount = mortgageInfo.loanamount - overpayment;
  const preOverpaymentMonthlyPayment = preOverpaymentTable[0].totalPayment;

  const postOverpaymentTable = calculateMortgagePayments(
    newLoanamount,
    mortgageInfo.annualInterestRate,
    mortgageInfo.loanTermMonths,
    preOverpaymentMonthlyPayment
  );
  console.log("Post Overpayment Table", postOverpaymentTable);

  const savingsCalculated = [];
  let totalInterestSaved = 0;

  for (let i = 0; i < preOverpaymentTable.length; i++) {
    const interestSaved =
      preOverpaymentTable[i].interestPayment -
      postOverpaymentTable[i].interestPayment;
    totalInterestSaved += interestSaved;
    const savingsData = {
      month: i + 1,
      interestSaved: interestSaved.toFixed(2),
      savingsAccumulator: totalInterestSaved.toFixed(2),
    };

    savingsCalculated.push(savingsData);
  }

  totalInterestSaved = totalInterestSaved.toFixed(2);

  console.log("Savings Calculated:", savingsCalculated);
  console.log("Total Interest Saved:", totalInterestSaved);

  return savingsCalculated;
}
