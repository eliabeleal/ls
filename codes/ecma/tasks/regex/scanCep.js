function scanCep(message) {
  let pattern = /(\d{8}|\d{2}\.?\d{3}-\d{2})/g
  let matches = message.match(pattern)
  return matches ? {count: matches.length, values: matches} : {count: 0, values: []}
}

module.exports = scanCep
