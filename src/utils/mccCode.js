const transactions = [
    {
        "transactionId": "1",
        "date": "2023-10-01",
        "description": "Grocery Store",
        "amount": -50.25,
        "mcc": "5411",
        "category": "Groceries"
    },
    {
        "transactionId": "2",
        "date": "2023-10-02",
        "description": "Gas Station",
        "amount": -30.00,
        "mcc": "5541",
        "category": "Fuel"
    },
    {
        "transactionId": "3",
        "date": "2023-10-03",
        "description": "Restaurant",
        "amount": -75.50,
        "mcc": "5812",
        "category": "Dining"
    },
    {
        "transactionId": "4",
        "date": "2023-10-04",
        "description": "Online Subscription",
        "amount": -12.99,
        "mcc": "4899",
        "category": "Subscriptions"
    },
    {
        "transactionId": "5",
        "date": "2023-10-05",
        "description": "Clothing Store",
        "amount": -120.00,
        "mcc": "5651",
        "category": "Shopping"
    },
    {
        "transactionId": "6",
        "date": "2023-10-06",
        "description": "ATM Withdrawal",
        "amount": -200.00,
        "mcc": "6011",
        "category": "Cash Withdrawal"
    },
    {
        "transactionId": "7",
        "date": "2023-10-07",
        "description": "Utility Bill",
        "amount": -100.00,
        "mcc": "4900",
        "category": "Utilities"
    },
    {
        "transactionId": "8",
        "date": "2023-10-08",
        "description": "Pharmacy",
        "amount": -25.75,
        "mcc": "5912",
        "category": "Healthcare"
    },
    {
        "transactionId": "9",
        "date": "2023-10-09",
        "description": "Electronics Store",
        "amount": -300.00,
        "mcc": "5732",
        "category": "Electronics"
    },
    {
        "transactionId": "10",
        "date": "2023-10-10",
        "description": "Coffee Shop",
        "amount": -5.50,
        "mcc": "5814",
        "category": "Dining"
    },
    {
        "transactionId": "11",
        "date": "2023-10-11",
        "description": "Supermarket",
        "amount": -60.00,
        "mcc": "5411",
        "category": "Groceries"
    },
    {
        "transactionId": "12",
        "date": "2023-10-12",
        "description": "Fuel Station",
        "amount": -40.00,
        "mcc": "5541",
        "category": "Fuel"
    },
    {
        "transactionId": "13",
        "date": "2023-10-13",
        "description": "Cafe",
        "amount": -15.00,
        "mcc": "5812",
        "category": "Dining"
    },
    {
        "transactionId": "14",
        "date": "2023-10-14",
        "description": "Streaming Service",
        "amount": -9.99,
        "mcc": "4899",
        "category": "Subscriptions"
    },
    {
        "transactionId": "15",
        "date": "2023-10-15",
        "description": "Boutique",
        "amount": -150.00,
        "mcc": "5651",
        "category": "Shopping"
    },
    {
        "transactionId": "16",
        "date": "2023-10-16",
        "description": "Cash Withdrawal",
        "amount": -100.00,
        "mcc": "6011",
        "category": "Cash Withdrawal"
    },
    {
        "transactionId": "17",
        "date": "2023-10-17",
        "description": "Electric Bill",
        "amount": -120.00,
        "mcc": "4900",
        "category": "Utilities"
    },
    {
        "transactionId": "18",
        "date": "2023-10-18",
        "description": "Medical Store",
        "amount": -30.00,
        "mcc": "5912",
        "category": "Healthcare"
    },
    {
        "transactionId": "19",
        "date": "2023-10-19",
        "description": "Tech Store",
        "amount": -400.00,
        "mcc": "5732",
        "category": "Electronics"
    },
    {
        "transactionId": "20",
        "date": "2023-10-20",
        "description": "Bistro",
        "amount": -20.00,
        "mcc": "5814",
        "category": "Dining"
    }
];

const mccCodeMap = {
    "5411": "Grocery Stores, Supermarkets",
    "5541": "Service Stations (with or without ancillary services)",
    "5812": "Eating Places, Restaurants",
    "4899": "Cable, Satellite, and Other Pay Television and Radio Services",
    "5651": "Family Clothing Stores",
    "6011": "Financial Institutions, Manual Cash Disbursements",
    "4900": "Utilities - Electric, Gas, Water, Sanitary",
    "5912": "Drug Stores and Pharmacies",
    "5732": "Electronics Stores",
    "5814": "Fast Food Restaurants"
};

const valueToMccCode = (value) => {
    return mccCodeMap[value] || "Unknown MCC Code";
};

const getTopMccCodes = (transactions, topN = 3) => {
    const mccCount = {};

    transactions.forEach(transaction => {
        const mcc = transaction.mcc;
        if (mccCount[mcc]) {
            mccCount[mcc]++;
        } else {
            mccCount[mcc] = 1;
        }
    });

    const sortedMccCodes = Object.entries(mccCount)
        .sort((a, b) => b[1] - a[1])
        .slice(0, topN)
        .map(([mcc, count]) => ({ mcc, count, description: valueToMccCode(mcc) }));

    return sortedMccCodes;
};

const valueToCommonTransactions = (overpaymentValue) => {
    const topMccCodes = getTopMccCodes(transactions);

    // Choose random mcc
    const randomMcc = topMccCodes[Math.floor(Math.random() * topMccCodes.length)];

    // Sum total value of all transactions with this mcc
    const filteredTransactions = transactions
        .filter(transaction => transaction.mcc === randomMcc.mcc);

    const valueOfTransactions = filteredTransactions
        .reduce((acc, transaction) => acc + transaction.amount, 0) * -1;

    console.log(`Last month you spent ${valueOfTransactions} across ${filteredTransactions.length} transaction(s) at "${randomMcc.description}"`);
    console.log(`With your overpayment of £${overpaymentValue}, this is equivelant to ${(overpaymentValue / valueOfTransactions * 100).toFixed(2)}% of your total spend at "${randomMcc.description}"`);
}

console.log(valueToCommonTransactions(100));