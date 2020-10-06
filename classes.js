// Don't change or delete this line! It waits until the DOM has loaded, then calls 
// the start function. More info: 
// https://developer.mozilla.org/en-US/docs/Web/Events/DOMContentLoaded
document.addEventListener('DOMContentLoaded', start)

function start () {
 one()
 two()
 three()
 makeVisible()

}

function one () {
  // First, we have to find the element:
  var one = document.getElementById('one')

  // Next, we apply a new CSS class to it:
  one.classList.add('blue')
}

function two () {
var two = document.getElementById('two')
two.classList.add('green')
}

function three () {
  var three = document.getElementById('three')
  three.classList.add('pocket')
}

function makeVisible () {
  var fourthDot = document.getElementsByClassName('invisible')[0]
  fourthDot.classList.add('visible')

}