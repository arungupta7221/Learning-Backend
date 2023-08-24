function fun(val) {
  // global scope
  var student // scope of fun
}

function run() {
  //global scope
  console.log(student)
}

student = 10 // get autoglobals during execution phase

function gun() {
  // global scope
  console.log(student) // 10
  student = 100

  // console.log(student)   // op -> undefined
  // var student = 10;
}

gun()
run()
