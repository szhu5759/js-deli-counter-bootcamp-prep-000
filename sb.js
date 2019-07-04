
var katzDeliLine = []
var num = 0

function takeANumber(array, name) {
  var array = []
  do {
    num++
    array.push(num)
  }while(num != num + 1)
  console.log(array)
  return `Welcome, ${name}. You are number ${num} in line.`
}

console.log(takeANumber(katzDeliLine,"Ada"))
console.log(takeANumber(katzDeliLine,"Po"))
console.log(takeANumber(katzDeliLine,"Ok"))
