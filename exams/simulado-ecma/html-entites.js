const entities = {
  "&Aacute;": { "codepoints": [193], "characters": "\u00C1" },
  "&Aacute": { "codepoints": [193], "characters": "\u00C1" },
  "&aacute;": { "codepoints": [225], "characters": "\u00E1" },
  "&aacute": { "codepoints": [225], "characters": "\u00E1" },
  "&Abreve;": { "codepoints": [258], "characters": "\u0102" },
  "&abreve;": { "codepoints": [259], "characters": "\u0103" },
  "&ac;": { "codepoints": [8766], "characters": "\u223E" },
  "&acd;": { "codepoints": [8767], "characters": "\u223F" },
  "&Acirc;": { "codepoints": [194], "characters": "\u00C2" },
  "&Acirc": { "codepoints": [194], "characters": "\u00C2" },
  "&acirc;": { "codepoints": [226], "characters": "\u00E2" },
  "&acirc": { "codepoints": [226], "characters": "\u00E2" },
  "&acute;": { "codepoints": [180], "characters": "\u00B4" },
  "&acute": { "codepoints": [180], "characters": "\u00B4" },
  "&Acy;": { "codepoints": [1040], "characters": "\u0410" },
  "&acy;": { "codepoints": [1072], "characters": "\u0430" },
  "&AElig;": { "codepoints": [198], "characters": "\u00C6" },
  "&AElig": { "codepoints": [198], "characters": "\u00C6" },
  "&aelig;": { "codepoints": [230], "characters": "\u00E6" },
  "&aelig": { "codepoints": [230], "characters": "\u00E6" },
  "&Agrave;": { "codepoints": [192], "characters": "\u00C0" },
  "&Agrave": { "codepoints": [192], "characters": "\u00C0" },
  "&agrave;": { "codepoints": [224], "characters": "\u00E0" },
  "&agrave": { "codepoints": [224], "characters": "\u00E0" },
  "&alefsym;": { "codepoints": [8501], "characters": "\u2135" },
  "&aleph;": { "codepoints": [8501], "characters": "\u2135" },
  "&Alpha;": { "codepoints": [913], "characters": "\u0391" },
  "&alpha;": { "codepoints": [945], "characters": "\u03B1" },
  "&Amacr;": { "codepoints": [256], "characters": "\u0100" },
  "&amacr;": { "codepoints": [257], "characters": "\u0101" },
  "&amalg;": { "codepoints": [10815], "characters": "\u2A3F" },
  "&AMP;": { "codepoints": [38], "characters": "\u0026" }
}

let table = []
let count = 0
for([key, value] of Object.entries(entities)){
  count++
  let char = value.characters
  let name = key
  let decimal = `&${value.codepoints};`
  let hexa = `&${Number(value.codepoints).toString(16)};`
  table.push({count, char, name, decimal, hexa})
}

let maxLength = table.reduce(
  (max, character) => {
    countLength = character.count.toString().length
    max.count   = countLength > max.count ? countLength : max.count
    charLength  = character.char.length
    max.char    = charLength > max.char   ? charLength  : max.char
    nameLength  = character.name.length
    max.name    = nameLength > max.name   ? nameLength  : max.name
    decLength   = character.decimal.length
    max.decimal = decLength > max.decimal ? decLength   : max.decimal
    hexaLength  = character.hexa.length
    max.hexa    = hexaLength > max.hexa   ? hexaLength  : max.hexa
    return max
  },
  {count: 0, char: 0, name: 0, decimal: 0, hexa: 0}
)

let result = table
  .map(row => {
    return [
      Number(row.count).toString().padStart(maxLength.count, 0),
      row.char.padStart(maxLength.char),
      row.name.padStart(maxLength.name),
      row.decimal.padStart(maxLength.decimal),
      row.hexa.padStart(maxLength.hexa)
    ].join(' ')
  })
  .join('\n')

console.log(result)
