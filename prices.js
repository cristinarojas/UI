const prices = [
  {
    min: 0,
    max: 5,
    amount: 0
  },
  {
    min: 6,
    max: 10,
    amount: 10
  },
  {
    min: 11,
    max: 50,
    amount: 8
  },
  {
    min: 51,
    max: 100,
    amount: 5
  },
  {
    min: 101,
    max: 1000,
    amount: 2
  },
  {
    min: 1001,
    amount: 1
  }
];


function calculatePrice(usage) {
  let gb = 0;
  let cost = 0;
  let usageAmount = 0;

  prices.forEach((price, index) => {
    if (usage >= price.min) {
      if (usageAmount === 0) {
        gb = usage > price.max ? price.max : usage;
      } else if (usageAmount > 0) {
        gb = usage > price.max ? price.max - usageAmount : usage - usageAmount;
      }

      usageAmount += gb;
      cost += gb * price.amount;
    }
  });

  return cost;
}

console.log(calculatePrice(16));
