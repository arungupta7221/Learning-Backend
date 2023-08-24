function mapper(arr, fn) {
  let result = []
  for (let i = 0; i < arr.length; i++) {
    // i->index , arr[i]->v element
    let res = fn(arr[i], i)
    result.push(res)
  }
  return result
}

let arr = [2, 3, 4, 5, 6]
let x = mapper(arr, function cuber(v, i) {
  console.log(v, i)
  return v * v * v
})
console.log(x)
