let name = 'Luiz Carlos Rodrigues Chaves'

const citationName = function(name){
  let rersult = ''
  words = name.split(' ')
  lastWord = words.pop().toUpperCase()
  result = `${lastWord}; ${words.join(' ')}`
  return result
}

const citationCompactName = function(name){
  let rersult = ''
  words = name
            .split(' ')
            .map(word => `${word.toUpperCase()}.`)
  lastWord = words.pop().toUpperCase()
  result = `${lastWord}; ${words.join(' ')}`
  return result
}

console.log(citationName(name))
//=> 'CHAVES; Luiz Carlos Rodribues'

console.log(citationCompactName(name))
//=> 'CHAVES; L. C. R.'
