//Avoid side effects
const splitIntoFirstAndLastName = (name) => name.split(' ')

let vietCuteFullName = 'Ha Quoc Viet'
let newVietCuteFullName = splitIntoFirstAndLastName(vietCuteFullName)

console.log(newVietCuteFullName)
