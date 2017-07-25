const digits = document.querySelectorAll('.digits button, .operations button')
const result = document.querySelector('h1')

for(let digit of digits) {
  digit.addEventListener('click', function(event) {
    let target = event.target.innerHTML
    if(target == '=')
      result.innerHTML = eval(result.innerHTML)
    else if(result.innerHTML === '0' && target != '.')
      result.innerHTML = target
    else
      result.innerHTML += target
  })
}
