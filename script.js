
function sort(arr){
  var arrCopy = [...arr]
  return arrCopy.sort()
}


const testArr = [1,5,2,3,7,6,4]
const sortArr = sort(testArr)

console.log('RESULTADO PRUEBA \ntestArr:', testArr, '\nsortArr:', sortArr)

//////////////////////////////////////////////////////////////////////////////

var NUMBERS = [];

function checkNumber(n){
  return n !== '' && NUMBERS.indexOf(n) == -1
}

function addNumber(){
  var input = document.getElementById('number-input')
  var numberInput = input.value;

  if(checkNumber(numberInput)){
    NUMBERS.push(numberInput)
    // console.log(NUMBERS)
    var node = document.createElement('div')
    node.className = 'number'
    node.id = numberInput
    node.innerHTML = numberInput

    document.getElementById('numbers').appendChild(node)
  }
  input.value = '';
}

function clearNumbers(){
  var parent = document.getElementById('numbers')
  while(parent.firstChild){
    parent.removeChild(parent.firstChild)
  }
}

document.getElementById('submit').addEventListener('click',addNumber)
document.getElementById('clear').addEventListener('click', clearNumbers)

