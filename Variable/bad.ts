interface account1 {
  expired: boolean
}

interface account2 {
  expired: string
}
const account1: account1 = {
  expired: true,
}

const account2: account2 = {
  expired: '2021-07-11 sunday ',
}
