const number = 1

const numberCase = {
  one: 1,
  two: 2,
  three: 3,
}

const numberSwitchCase = (value) => {
  switch (value) {
    case numberCase.one:
      console.log('one')
      break
    case numberCase.two:
      console.log('two')
      break
    case numberCase.three:
      console.log('three')
      break
    default:
      console.log('hihi this is default')
  }
}

console.log(numberSwitchCase(number))
