// function arguments ( 2 or fewer ideally)
// function should do one thing and it should be small
// Avoid side effects
// function name should say what they do
// function should only be one level of abstraction
// Remove duplicate code
//

let vietCuteFullName = 'Ha quoc viet'

function splitIntoFirstAndLastName() {
  vietCuteFullName = vietCuteFullName.split(' ')
}

splitIntoFirstAndLastName()

console.log(vietCuteFullName)
