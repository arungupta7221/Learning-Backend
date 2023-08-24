// var teacher = 'Sanket' // global scope
// function fun() {
//   // global scope
//   teacher = 'pulkit' // autoglobal
//   console.log('Hi', teacher)
// }

// fun()
// console.log(teacher)

// function fun() {
//   var teacher = 'pulkit'
//   console.log(teacher)
// }
// fun()
// console.log(teacher)

function fun() {
  teachingAssistant = 'pulkit'
  console.log(teachingAssistant)
  var teachingAssistant = 'JD'
  console.log(teachingAssistant)
}
fun()
console.log(teachingAssistant)
