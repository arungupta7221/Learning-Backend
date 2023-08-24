// Tasks
// 1. download the data from a url
//2. write that dowmload data into a file
//3. upload that file onto a new url

// Task -1.
function fetchCustomData(url, fn) {
  console.log('starting download from', url)
  let response = 'dummy data'
  setTimeout(function process() {
    console.log('complete download')
    // let response = 'dummy data'
    fn(response)
  }, 3000)
}

// Task -2

function writeFile(data, fn) {
  console.log('start writing', data)
  setTimeout(function process() {
    let file = 'output.txt'
    fn(file)
  }, 4000)
}

// Task -3

function uploadFile(filename, newurl, fn) {
  console.log('Upload started')
  setTimeout(function process() {
    console.log('File', filename, 'uploaded successfully on', newurl)
    let uploadResponse = 'SUCCESS'
    fn(uploadResponse)
  }, 2000)
}

// callback hell is happening here

fetchCustomData('www.google.com', function downloadCallback(result) {
  console.log('downloaded response is', result)
  writeFile(result, function writeCallBack(filenameResponse) {
    console.log('new file written is', filenameResponse)
    uploadFile(filenameResponse, 'www.yahoo.com', function uploadCallback(uploadResponse) {
      console.log('uploaded response is ', uploadResponse)
    })
  })
})
