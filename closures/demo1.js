function todo(task) {
  console.log('starting function')
  setTimeout(function fun() {
    console.log('completed', task)
  }, 2000)
  console.log('ending function')
}

console.log('starting')
todo('assignment')
console.log('ending')
