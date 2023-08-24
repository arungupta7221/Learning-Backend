function fetchData(url) {
  return new Promise(function f(resolve, reject) {
    console.log('going to start the download')
    setTimeout(function process() {
      let data = 'dummy data'
      console.log('download completed')
      resolve(data)
    }, 5000)
    console.log('timer to mimic download started')
  })
}

console.log('starting the program')
console.log('we are expecting to mimic a dowmloader')
x = fetchData('www.graphy.com')
console.log('promise object created successfully , but downloading process is going on')
