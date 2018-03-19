var NUMBERS = []

function checkNumber(n){
  return n !== '' && NUMBERS.indexOf(n) == -1
}

function addNumber(){
  var input = document.getElementById('number-input')
  var numberInput = input.value;

  if(checkNumber(numberInput)){
    var node = document.createElement('div')
    node.className = 'number'
    node.id = numberInput
    node.innerHTML = numberInput

    document.getElementById('numbers').appendChild(node)
    NUMBERS.push(numberInput)
  }
  input.value = '';
}

function clearAllNumbers(){
  var parent = document.getElementById('numbers')
  while(parent.firstChild){
    parent.removeChild(parent.firstChild)
  }
  NUMBERS = []
}

function sortNumbers(arr){
  //will change sort function later
  return arr.sort()
}

function reorderNumbers(){
  var divArray = [...document.getElementById('numbers').children]
  var numArray = divArray.map( elem => Number(elem.id))

  numArray = sortNumbers(numArray)
  for(var i = 0; i < numArray.length; i++){
    var id = numArray[i]
    document.getElementById(id).style.order = i
  }
}

document.getElementById('submit').addEventListener('click',addNumber)
document.getElementById('clear').addEventListener('click', clearAllNumbers)
document.getElementById('sort').addEventListener('click', reorderNumbers)

