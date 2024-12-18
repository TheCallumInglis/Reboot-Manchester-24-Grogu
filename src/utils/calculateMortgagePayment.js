export default function calculateMortgagePayments(
  loanamount,
  annualInterestRate,
  loanTermMonths,
  monthlyPayment,
  monthlyOverpayment = 0
) {
  const monthlyInterestRate = annualInterestRate / 12 / 100; // Convert annual rate to monthly decimal

  // Calculate fixed monthly payment (M) if not already provided
  let payment;

  if (monthlyPayment) {
    payment = monthlyPayment + monthlyOverpayment;
  } else {
    payment =
      (loanamount *
        (monthlyInterestRate *
          Math.pow(1 + monthlyInterestRate, loanTermMonths))) /
      (Math.pow(1 + monthlyInterestRate, loanTermMonths) - 1);
  }

  let remainingBalance = loanamount;
  const paymentSchedule = [];

  for (let month = 1; month <= loanTermMonths; month++) {
    const interestPayment = remainingBalance * monthlyInterestRate;
    const capitalPayment = payment - interestPayment;
    remainingBalance -= capitalPayment;

    // Push the details for this month
    paymentSchedule.push({
      month,
      capitalPayment: parseFloat(capitalPayment.toFixed(2)),
      interestPayment: parseFloat(interestPayment.toFixed(2)),
      totalPayment: parseFloat(payment.toFixed(2)),
      remainingBalance: parseFloat(remainingBalance.toFixed(2)),
    });

    // Prevent negative balance due to rounding
    if (remainingBalance < 0) remainingBalance = 0;
  }

  return paymentSchedule;
}

// // Example usage
// const loanamount = 250000; // Loan amount in GBP
// const annualInterestRate = 6; // Annual interest rate in percent
// const loanTermMonths = 30; // Loan term in years

// const payments = calculateMortgagePayments(loanamount, annualInterestRate, loanTermMonthsYears);

// // Log each month's payment schedule
// console.log(payments);
