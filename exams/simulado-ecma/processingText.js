

function processText(option, str){
  switch(option){
    case 'upperCase':
      return str.toUpperCase()
    case 'lowerCase':
      return str.toLowerCase()
    case 'camelCase':
      return camelCaseWords(str, '\n', ' ')
    case 'snakeCase':
      return snakeCase(str, '\n', ' ')
    case 'reverse':
      return str.split('').reverse().join('')
    case 'countWords':
      return countWords(str)
    case 'countLines':
      return countLines(str)
  }
}

function countLines(str){
  return occurrences(str, '\n') + 1
}

function countWords(str){
  return occurrences(str, '\n') +
          occurrences(str, ' ') + 1
}

function snakeCase(str, ...params){
  for(let splitChar of params){
    for(let times = 0; times < occurrences(str, splitChar); times++){
      str = str.replace(splitChar, '_')
    }
  }
  return str
}

function occurrences(string, letterSelected) {
  let count = 0
  for(let letter of string){
    if(letter == letterSelected)
      count++
  }
  return count
}

function camelCaseWord(str){
  return str[0].toUpperCase()+
          str.slice(1,str.length).toLowerCase()
}

function camelCaseWords(str, ...params){
  let splitIndexes = []
  let result = []

  str = str.split('')

  for(let index in str){
    let letter = str[index]
    for(let splitChar of params){
      if(letter == splitChar)
        splitIndexes.push(index)
    }
  }

  let start = 0
  let word = ''

  for(let splitIndex of splitIndexes){
    let end = parseInt(splitIndex)
    word = str.slice(start, end)
    result.push(camelCaseWord(word.join('')))
    start = end+1
    result.push(str[splitIndex])
  }
  word = str.slice(start, str.length)
  result.push(camelCaseWord(word.join('')))

  return result.join('')
}

console.log(processText('upperCase', 'fulano\nifpb jp'))
//=> FULANO
//=> IFPB JP

console.log(processText('lowerCase', 'FULANO\nIFPB JP'))
//=> fulano
//=> ifpb jp

console.log(processText('camelCase', 'FULANO\nIFPB JP'))
//=> Fulano
//=> Ifpb Jp

console.log(processText('snakeCase', 'FULANO\nIFPB JP'))
//=> FULANO_IFPB_JP

console.log(processText('reverse', 'FULANO\nIFPB'))
//=> BPFI
//=> ONALUF

console.log(processText('countWords', 'fulano\nifpb'))
//=> 2

console.log(processText('countLines', 'fulano\nifpb'))
//=> 2
