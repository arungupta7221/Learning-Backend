function a(name) {
  return function b() {
    console.log(name)
  }
}
console.log(x, typeof x)
var x = a('sanket')
for (let i = 0; i < 1000000000; i++) {}
console.log(x)
x()
