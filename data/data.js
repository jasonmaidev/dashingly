const currentDateString = (() => {
  let date = new Date();
  return () => {
    date = new Date(date.getTime() - 24 * 60 * 60 * 1000); // add 1 day
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric' });
  };
})();

const randomNumber = () => {
  return 10000 + Math.floor(Math.random() * (100000 - 10000 + 1));
};

export const data = [
  {
    id: 1,
    name: {
      first: 'John',
      last: 'Ashen',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'Visa',
    date: currentDateString(),
  },
  {
    id: 2,
    name: {
      first: 'Greg',
      last: 'Omara',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'Visa',
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
      last: 'Lam',
    },
    total: randomNumber(),
    status: 'Completed',
    method: 'MasterCard',
    date: currentDateString(),
  },
  // {
  //   id: 8,
  //   name: {
  //     first: 'James',
  //     last: 'Thomas',
  //   },
  //   total: randomNumber(),
  //   status: 'Completed',
  //   method: 'MasterCard',
  //   date: currentDateString(),
  // },
  // {
  //   id: 9,
  //   name: {
  //     first: 'Tracy',
  //     last: 'Goldman',
  //   },
  //   total: randomNumber(),
  //   status: 'Completed',
  //   method: 'MasterCard',
  //   date: currentDateString(),
  // },
  // {
  //   id: 10,
  //   name: {
  //     first: 'Sam',
  //     last: 'Carter',
  //   },
  //   total: randomNumber(),
  //   status: 'Completed',
  //   method: 'MasterCard',
  //   date: currentDateString(),
  // },
];
