const digits = document.querySelectorAll('.digits button, .operations button, .modifiers button')
const result = document.querySelector('h1')

for(let digit of digits) {
  digit.addEventListener('click', function(event) {
    let target = event.target.innerHTML
    if(target == 'AC')
      result.innerHTML = '0'
    else if(target == '+/-')
      result.innerHTML = eval((`-1*(${result.innerHTML.replace(/X/g, '*')})`))
    else if(target == '%')
      result.innerHTML = eval((`(${result.innerHTML.replace(/X/g, '*')})/100`))
    else if(target == '=')
      result.innerHTML = eval(result.innerHTML.replace(/X/g, '*'))
    else if(result.innerHTML === '0' && target != '.')
      result.innerHTML = target
    else if(/[\d\.+-\/]/.test(target))
      result.innerHTML += target
  })
}

document.body.addEventListener('keydown', function(event){
  if (13 == event.keyCode){
    let resultEval = eval(result.innerHTML.replace(/X/g, '*'))
    result.innerHTML = resultEval
    console.log(resultEval)
    console.log(result.innerHTML)
  } else if(27 == event.keyCode){
    result.innerHTML = '0'
  }
})
