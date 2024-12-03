const transactions = [
  {
    "transaction No.": "TRX20001",
    Date: "01/11/2024",
    transaction: "JavaJuice",
    amount: -3.45,
    Currency: "GBP",
    mcc: 5812,
  },
  {
    "transaction No.": "TRX20002",
    Date: "01/11/2024",
    transaction: "Lidl",
    amount: -45.23,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20003",
    Date: "01/11/2024",
    transaction: "Monthly Salary",
    amount: 2729.21,
    Currency: "GBP",
    mcc: 0,
  },
  {
    "transaction No.": "TRX20004",
    Date: "01/11/2024",
    transaction: "Octopus Energy Ltd",
    amount: -85.0,
    Currency: "GBP",
    mcc: 4900,
  },
  {
    "transaction No.": "TRX20005",
    Date: "01/11/2024",
    transaction: "Pizza Express",
    amount: -65.5,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20006",
    Date: "02/11/2024",
    transaction: "JavaJuice",
    amount: -7.7,
    Currency: "GBP",
    mcc: 5812,
  },
  {
    "transaction No.": "TRX20007",
    Date: "02/11/2024",
    transaction: "PureGym",
    amount: -30.0,
    Currency: "GBP",
    mcc: 7997,
  },
  {
    "transaction No.": "TRX20008",
    Date: "02/11/2024",
    transaction: "Transfer to Savings",
    amount: -200.0,
    Currency: "GBP",
    mcc: 0,
  },
  {
    "transaction No.": "TRX20009",
    Date: "03/11/2024",
    transaction: "ASOS",
    amount: -150.75,
    Currency: "GBP",
    mcc: 5691,
  },
  {
    "transaction No.": "TRX20010",
    Date: "03/11/2024",
    transaction: "Shell",
    amount: -30.0,
    Currency: "GBP",
    mcc: 4814,
  },
  {
    "transaction No.": "TRX20011",
    Date: "03/11/2024",
    transaction: "Interest Income",
    amount: 2.33,
    Currency: "GBP",
    mcc: 0,
  },
  {
    "transaction No.": "TRX20012",
    Date: "03/11/2024",
    transaction: "JavaJuice",
    amount: -4.45,
    Currency: "GBP",
    mcc: 5812,
  },
  {
    "transaction No.": "TRX20013",
    Date: "03/11/2024",
    transaction: "Lidl",
    amount: -12.69,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20014",
    Date: "03/11/2024",
    transaction: "Council tax",
    amount: -122.24,
    Currency: "GBP",
    mcc: 0,
  },
  {
    "transaction No.": "TRX20015",
    Date: "04/11/2024",
    transaction: "Decathlon",
    amount: -39.95,
    Currency: "GBP",
    mcc: 5941,
  },
  {
    "transaction No.": "TRX20016",
    Date: "04/11/2024",
    transaction: "PharmLite",
    amount: -9.65,
    Currency: "GBP",
    mcc: 5912,
  },
  {
    "transaction No.": "TRX20017",
    Date: "04/11/2024",
    transaction: "JavaJuice",
    amount: -3.45,
    Currency: "GBP",
    mcc: 5812,
  },
  {
    "transaction No.": "TRX20018",
    Date: "04/11/2024",
    transaction: "Gather&Gather",
    amount: -5.01,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20019",
    Date: "05/11/2024",
    transaction: "JavaJuice",
    amount: -3.45,
    Currency: "GBP",
    mcc: 5812,
  },
  {
    "transaction No.": "TRX20020",
    Date: "05/11/2024",
    transaction: "Lothian Buses",
    amount: -4.0,
    Currency: "GBP",
    mcc: 4131,
  },
  {
    "transaction No.": "TRX20021",
    Date: "05/11/2024",
    transaction: "Gather&Gather",
    amount: -5.01,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20022",
    Date: "05/11/2024",
    transaction: "H&M",
    amount: -24.99,
    Currency: "GBP",
    mcc: 5300,
  },
  {
    "transaction No.": "TRX20023",
    Date: "06/11/2024",
    transaction: "Gather&Gather",
    amount: -5.01,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20024",
    Date: "06/11/2024",
    transaction: "Lothian Buses",
    amount: -4.0,
    Currency: "GBP",
    mcc: 4131,
  },
  {
    "transaction No.": "TRX20025",
    Date: "08/11/2024",
    transaction: "BP",
    amount: -20.0,
    Currency: "GBP",
    mcc: 4814,
  },
  {
    "transaction No.": "TRX20026",
    Date: "08/11/2024",
    transaction: "Tesco",
    amount: -56.75,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20027",
    Date: "09/11/2024",
    transaction: "Amazon",
    amount: -78.95,
    Currency: "GBP",
    mcc: 5942,
  },
  {
    "transaction No.": "TRX20028",
    Date: "09/11/2024",
    transaction: "Boots",
    amount: -15.3,
    Currency: "GBP",
    mcc: 5912,
  },
  {
    "transaction No.": "TRX20029",
    Date: "09/11/2024",
    transaction: "McDonald's",
    amount: -8.49,
    Currency: "GBP",
    mcc: 5814,
  },
  {
    "transaction No.": "TRX20030",
    Date: "10/11/2024",
    transaction: "National Rail",
    amount: -23.5,
    Currency: "GBP",
    mcc: 4112,
  },
  {
    "transaction No.": "TRX20031",
    Date: "10/11/2024",
    transaction: "Costa Coffee",
    amount: -4.5,
    Currency: "GBP",
    mcc: 5812,
  },
  {
    "transaction No.": "TRX20032",
    Date: "11/11/2024",
    transaction: "Waitrose",
    amount: -66.8,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20033",
    Date: "11/11/2024",
    transaction: "Spotify",
    amount: -9.99,
    Currency: "GBP",
    mcc: 5815,
  },
  {
    "transaction No.": "TRX20034",
    Date: "11/11/2024",
    transaction: "JavaJuice",
    amount: -3.45,
    Currency: "GBP",
    mcc: 5812,
  },
  {
    "transaction No.": "TRX20035",
    Date: "12/11/2024",
    transaction: "Netflix",
    amount: -8.99,
    Currency: "GBP",
    mcc: 5815,
  },
  {
    "transaction No.": "TRX20036",
    Date: "12/11/2024",
    transaction: "Uber",
    amount: -12.45,
    Currency: "GBP",
    mcc: 4121,
  },
  {
    "transaction No.": "TRX20037",
    Date: "13/11/2024",
    transaction: "Sainsbury's",
    amount: -34.15,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20038",
    Date: "13/11/2024",
    transaction: "JavaJuice",
    amount: -3.45,
    Currency: "GBP",
    mcc: 5812,
  },
  {
    "transaction No.": "TRX20039",
    Date: "14/11/2024",
    transaction: "Lothian Buses",
    amount: -4.0,
    Currency: "GBP",
    mcc: 4131,
  },
  {
    "transaction No.": "TRX20040",
    Date: "14/11/2024",
    transaction: "Gather&Gather",
    amount: -5.01,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20041",
    Date: "15/11/2024",
    transaction: "ASOS",
    amount: -120.89,
    Currency: "GBP",
    mcc: 5691,
  },
  {
    "transaction No.": "TRX20042",
    Date: "15/11/2024",
    transaction: "JavaJuice",
    amount: -4.45,
    Currency: "GBP",
    mcc: 5812,
  },
  {
    "transaction No.": "TRX20043",
    Date: "16/11/2024",
    transaction: "Lidl",
    amount: -18.6,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20044",
    Date: "16/11/2024",
    transaction: "JavaJuice",
    amount: -3.45,
    Currency: "GBP",
    mcc: 5812,
  },
  {
    "transaction No.": "TRX20045",
    Date: "17/11/2024",
    transaction: "JavaJuice",
    amount: -4.45,
    Currency: "GBP",
    mcc: 5812,
  },
  {
    "transaction No.": "TRX20046",
    Date: "17/11/2024",
    transaction: "Boots",
    amount: -12.3,
    Currency: "GBP",
    mcc: 5912,
  },
  {
    "transaction No.": "TRX20047",
    Date: "18/11/2024",
    transaction: "Amazon",
    amount: -56.4,
    Currency: "GBP",
    mcc: 5942,
  },
  {
    "transaction No.": "TRX20048",
    Date: "18/11/2024",
    transaction: "Costa Coffee",
    amount: -5.75,
    Currency: "GBP",
    mcc: 5812,
  },
  {
    "transaction No.": "TRX20049",
    Date: "19/11/2024",
    transaction: "Tesco",
    amount: -45.5,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20050",
    Date: "19/11/2024",
    transaction: "Spotify",
    amount: -9.99,
    Currency: "GBP",
    mcc: 5815,
  },
  {
    "transaction No.": "TRX20051",
    Date: "20/11/2024",
    transaction: "Sainsbury's",
    amount: -29.1,
    Currency: "GBP",
    mcc: 5411,
  },
  {
    "transaction No.": "TRX20052",
    Date: "20/11/2024",
    transaction: "Netflix",
    amount: -8.99,
    Currency: "GBP",
    mcc: 5815,
  },
  {
    "transaction No.": "TRX20053",
    Date: "21/11/2024",
    transaction: "McDonald's",
    amount: -6.75,
    Currency: "GBP",
    mcc: 5814,
  },
  {
    "transaction No.": "TRX20054",
    Date: "21/11/2024",
    transaction: "Boots",
    amount: -14.5,
    Currency: "GBP",
    mcc: 5912,
  },
  {
    "transaction No.": "TRX20055",
    Date: "22/11/2024",
    transaction: "JavaJuice",
    amount: -3.45,
    Currency: "GBP",
    mcc: 5812,
  },
];

const mccCodeMap = {
  5411: "Grocery Stores, Supermarkets",
  5541: "Service Stations (with or without ancillary services)",
  5812: "Eating Places, Restaurants",
  5815: "Digital Goods: Books, Movies, Music",
  5691: "Men’s and Women’s Clothing Stores",
  6011: "Financial Institutions, Manual Cash Disbursements",
  4900: "Utilities - Electric, Gas, Water, Sanitary",
  5912: "Drug Stores and Pharmacies",
  5814: "Fast Food Restaurants",
  7997: "Clubs–Country Clubs, Membership (Athletic, Recreation, Sports), Private Golf Courses",
  4112: "Passenger Railways",
  4131: "Bus Lines",
};

const valueTomccCode = (value) => {
  return mccCodeMap[value] || "Unknown mcc";
};

const getTopmccCodes = (transactions, topN = 3) => {
  const mccCount = {};

  transactions
    .filter((transaction) => transaction.mcc !== 0)
    .forEach((transaction) => {
      const mcc = transaction.mcc;
      if (mccCount[mcc]) {
        mccCount[mcc]++;
      } else {
        mccCount[mcc] = 1;
      }
    });

  const sortedmccCodes = Object.entries(mccCount)
    .sort((a, b) => b[1] - a[1])
    .slice(0, topN)
    .map(([mcc, count]) => ({ mcc, count, description: valueTomccCode(mcc) }));
  // TO DO add something here to exclude unknown mcc
  console.log(sortedmccCodes);

  return sortedmccCodes;
};

const valueToCommontransactions = (overpaymentValue) => {
  const topmccCodes = getTopmccCodes(transactions);

  // Choose random mcc
  const randommcc = topmccCodes[Math.floor(Math.random() * topmccCodes.length)];

  // Sum total value of all transactions with this mcc
  const filteredtransactions = transactions.filter(
    (transaction) => transaction.mcc == randommcc.mcc
  );

  const valueOftransactions =
    filteredtransactions.reduce(
      (acc, transaction) => acc + transaction.amount,
      0
    ) * -1;

  console.log(
    `Last month you spent ${valueOftransactions} across ${filteredtransactions.length} transaction(s) at "${randommcc.description}"`
  );
  console.log(
    `With your overpayment of £${overpaymentValue}, this is equivelant to ${(
      (overpaymentValue / valueOftransactions) *
      100
    ).toFixed(2)}% of your total spend at "${randommcc.description}"`
  );
};

console.log(valueToCommontransactions(100));
