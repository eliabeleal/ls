const String = require('./toCamelCase')

describe('String', () => {

  test('toCameCase with one word', () => {
    expect("fulano".toCamelCase()).toBe("Fulano")
  })

  test.skip('toCameCase with many words', () => {
    expect("fulano sicrano".toCamelCase()).toBe("Fulano Sicrano")
    expect("fulano sicrano\nbeltrano".toCamelCase()).toBe("Fulano Sicrano\nBeltrano")
  })

})
