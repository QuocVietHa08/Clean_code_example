const number = 1

const numberSwitchCase = (value) => {
  switch (value) {
    case 1:
      console.log('one')
      break
    case 2:
      console.log('two')
      break
    case 3:
      console.log('three')
      break
    default:
      console.log('hihi this is default')
      break
  }
}

console.log(numberSwitchCase(number))
