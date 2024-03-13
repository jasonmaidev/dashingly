const currentDateString = (() => {
  let date = new Date();
  return () => {
    date = new Date(date.getTime() - 24 * 60 * 60 * 1000); // add 1 day
    return date.toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' });
  };
})();


const randomNumber = () => {
  return Math.round(Math.random() * 9999 * 100) / 100;
};

export const data = [
  {
    id: 1,
    name: {
      first: 'John',
      last: 'Smith',
    },
    total: randomNumber(),
    status: 'On Hold',
    method: 'PayPal',
    date: currentDateString(),
    id: 2,
    name: {
      first: 'Chris',
      last: 'Adams',
    },
    total: randomNumber(),
    status: 'Processing',
    method: 'PayPal',
    date: currentDateString(),
  },
  {
    id: 3,
    name: {
      first: 'Sarah',
      last: 'Smith',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'Visa',
    date: currentDateString(),
  },
  {
    id: 4,
    name: {
      first: 'Joseph',
      last: 'Choo',
    },
    total: randomNumber(),
    status: 'Processing',
    method: 'MasterCard',
    date: currentDateString(),
  },
  {
    id: 5,
    name: {
      first: 'Steve',
      last: 'Harding',
    },
    total: randomNumber(),
    status: 'On Hold',
    method: 'PayPal',
    date: currentDateString(),
  },
  {
    id: 6,
    name: {
      first: 'Laura',
      last: 'Croft',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'Check',
    date: currentDateString(),
  },
  {
    id: 7,
    name: {
      first: 'Michael',
      last: 'Jones',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'MasterCard',
    date: currentDateString(),
  },
  {
    id: 8,
    name: {
      first: 'James',
      last: 'Bond',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'Visa',
    date: currentDateString(),
  },
  {
    id: 9,
    name: {
      first: 'Haley',
      last: 'Whiting',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'PayPal',
    date: currentDateString(),
  },
  {
    id: 10,
    name: {
      first: 'Tim',
      last: 'Thomas',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'MasterCard',
    date: currentDateString(),
  },
  {
    id: 11,
    name: {
      first: 'John',
      last: 'Smith',
    },
    total: randomNumber(),
    status: 'On Hold',
    method: 'PayPal',
    date: currentDateString(),
  },
  {
    id: 12,
    name: {
      first: 'Chris',
      last: 'Adams',
    },
    total: randomNumber(),
    status: 'Processing',
    method: 'PayPal',
    date: currentDateString(),
  },
  {
    id: 13,
    name: {
      first: 'Sarah',
      last: 'Smith',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'Visa',
    date: currentDateString(),
  },
  {
    id: 14,
    name: {
      first: 'Joseph',
      last: 'Choo',
    },
    total: randomNumber(),
    status: 'Processing',
    method: 'MasterCard',
    date: currentDateString(),
  },
  {
    id: 15,
    name: {
      first: 'Steve',
      last: 'Harding',
    },
    total: randomNumber(),
    status: 'On Hold',
    method: 'PayPal',
    date: currentDateString(),
  },
  {
    id: 16,
    name: {
      first: 'Laura',
      last: 'Croft',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'Check',
    date: currentDateString(),
  },
  {
    id: 17,
    name: {
      first: 'Michael',
      last: 'Jones',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'MasterCard',
    date: currentDateString(),
  },
  {
    id: 18,
    name: {
      first: 'James',
      last: 'Bond',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'Visa',
    date: currentDateString(),
  },
  {
    id: 19,
    name: {
      first: 'Haley',
      last: 'Whiting',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'PayPal',
    date: currentDateString(),
  },
  {
    id: 20,
    name: {
      first: 'Tim',
      last: 'Thomas',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'MasterCard',
    date: currentDateString(),
  },
];
