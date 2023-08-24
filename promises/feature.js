function fetchData(url) {
  return new Promise(function (resolve, reject) {
    console.log('starting downloading data from', url)
    setTimeout(function process() {
      let data = 'dummy data'
      console.log('download complete')
      resolve(data)
      // resolve("sanket")  --> this will not execute ever bcoz it will return from above
      console.log('hi') // but it will execute bcoz after resolving the promise it will execute remanining code
    }, 5000)
  })
}

function writeFile(data) {
  return new Promise(function (resolve, reject) {
    console.log('writing data', data, 'into file')
    setTimeout(function process() {
      let fileName = 'result.txt'
      console.log('filewritten done successfully')
      resolve(fileName)
    }, 3000)
  })
}

function uploadData(file, url) {
  return new Promise(function (resolve, reject) {
    console.log('upload started on url', url, 'filename is', file)
    setTimeout(function process() {
      let result = 'SUCCESS'
      console.log('uploading done')
      resolve(result)
    }, 5000)
  })
}

// let data = fetchData("www.datadrive.com")
// let fileName = writeFile(data)
// let response = uploadData(fileName,"www.google.com")

// the above function call will not work as per required fashion

// let downloadPromise = fetchData('www.datadrive.com')
// downloadPromise.then(function processDownload(value) {
//   console.log('download promise fullfilled')
//   // console.log(value)
//   let writePromise = writeFile(value)
//   writePromise.then(function writePromise(value) {
//     console.log('write promise fulfilled')
//     console.log(value)
//   })
// })

// in the above code it is behaving like promise hell.

async function processing() {
  let downloadData = await fetchData('www.onedrive.com')
  let file = await writeFile(downloadData)
  let response = await uploadData(file, 'www.google.com')
  console.log(response)
}

processing()
