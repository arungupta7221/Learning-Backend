function fun(x, gun) {
  // passing callback function gun as an argument
  for (let i = 0; i < x; i++) {
    console.log(i)
  }
  gun() // calling callback function
}

fun(5, function gun() {
  console.log('gun')
})
