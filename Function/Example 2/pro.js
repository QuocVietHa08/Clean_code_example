let a = {
  foo: '',
  bar: '',
}

let c = 10
let d = 20

a = { [c > d ? 'foo' : 'bar']: 'apple' }

console.log(a)
