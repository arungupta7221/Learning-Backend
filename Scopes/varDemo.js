// if var is in function it will function scope , but if it is outside the function(it can be in block) it will global scope.
{
  var x = 10
  console.log(x) // -> global scope
}

function fun() {
  var y = 20
  console.log(20) // -> function scope
}
fun()
// console.log(y)  // -> will get error bcoz y is function scope

if (true) {
  var z = 30
  console.log(z) // -> global scope
}
