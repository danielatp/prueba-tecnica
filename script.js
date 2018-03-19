var NUMBERS = []

function checkNumber(n){
  var p = document.getElementById('message')
  if(!Number(n)){
    p.innerHTML = 'Solo números!!'
  }
  if(NUMBERS.indexOf(n) > -1){
    p.innerHTML = 'yala'
  }
  if(n === '-0'){
    p.innerHTML = '-0???'
  }
  return Number(n) && NUMBERS.indexOf(n) == -1 && n !== '-0'
}

function addNumber(){
  document.getElementById('message').innerHTML = ''
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
  document.getElementById('message').innerHTML = ''
  NUMBERS = []
}

function split(wholeArray) {
  var firstHalf = wholeArray.slice(0, Math.abs(wholeArray.length/2))
  var secondHalf = wholeArray.slice(Math.abs(wholeArray.length/2))
  return [firstHalf, secondHalf]
}

function merge(arr1, arr2){
  var output = []
  while(arr1.length || arr2.length){
    if(!arr1.length){
      return output.concat(arr2)
    }
    if(!arr2.length){
      return output.concat(arr1)
    }
    if(arr1[0] > arr2[0]){
      output.push(arr2.shift());
    }else{
      output.push(arr1.shift())
    }
  }
  return output;
}

function mergeSort(arr){
  if(arr.length < 2) return arr
  else {
    var temp = split(arr)
    return merge(mergeSort(temp[0]), mergeSort(temp[1]))
  }
}

function reorderNumbers(){
  var divArray = [...document.getElementById('numbers').children]
  var numArray = divArray.map( elem => Number(elem.id))
  numArray = mergeSort(numArray)
  for(var i = 0; i < numArray.length; i++){
    var id = numArray[i]
    document.getElementById(id).style.order = i
  }
  document.getElementById('message').innerHTML = ''
}

document.getElementById('submit').addEventListener('click',addNumber)
document.getElementById('clear').addEventListener('click', clearAllNumbers)
document.getElementById('sort').addEventListener('click', reorderNumbers)

