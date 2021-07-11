interface Account1 {
  isExpired: boolean;
}

const accountOne: Account1 = {
  isExpired: true,
};

interface Account2 {
  dateExpiredString: string;
}

const accountTwo: Account2 = {
  dateExpiredString: '2021-07-11 sunday',
};
