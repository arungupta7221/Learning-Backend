function linearSearch(arr, x) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === x) {
      return i
    } else return -1
  }
}

function binarySearch(arr, x) {
  // write some logic
}

// if we want to use any of the function in another file we have to export

module.exports = {
  linear: linearSearch,
  binary: binarySearch,
} // writing like this because it's an object
