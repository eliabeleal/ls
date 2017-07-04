function scanDate(message) {
  let pattern = /((\d{2}\/){2}\d{1,4}|(\d{2}\/){2}\d{1,4})|(\d{1,4}(-\d{2}){2}|\d{1,4}(-\d{2}){2})/g
  let matches = message.match(pattern)

}

module.exports = scanDate
