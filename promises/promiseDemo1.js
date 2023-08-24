// execute this code on broweser console

function demo(val) {
  return new Promise(function (resolve, reject) {
    console.log('start')
    setTimeout(function process() {
      console.log('start timer')
      if (val % 2 == 0) {
        resolve('even')
      } else {
        reject('odd')
      }
    }, 10000)
    console.log('end')
  })
}

let a = demo(2)
console.log(a)
