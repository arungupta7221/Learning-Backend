const fs = require('fs')
const transformStream = require('stream')

let fileStream = fs.createReadStream(__dirname + '/input.txt') // reading input stream
let outputStream = process.stdout // where we want to print stream

let middleStream = new transformStream.Transform({
  transform(chunk, encoding, nextCB) {
    let modifiedChunk = chunk.toString().toUpperCase()
    this.push(modifiedChunk)
    setTimeout(nextCB, 1000) // because it will read chunks in 1 sec gap
  },
})

let newReadableStream = fileStream.pipe(middleStream) // first setting pipeline between input stream and middle stream

newReadableStream.pipe(outputStream) // from the middle stream it is printing on output terminal
