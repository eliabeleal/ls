const isValidOctal = require('./isValidOctal')

describe('Octal Number', () => {

  test('with correct digits', () => {
    expect(isValidOctal('0125')).toBe(true)
    expect(isValidOctal('0257')).toBe(true)
    expect(isValidOctal('0o257')).toBe(true)
    expect(isValidOctal('0O257')).toBe(true)
  })

  test.skip('with wrong pattern', () => {
    expect(isValidOctal('125')).toBe(false)
    expect(isValidOctal('0x257')).toBe(false)
    expect(isValidOctal('0X25F')).toBe(false)
    expect(isValidOctal('0b010')).toBe(false)
    expect(isValidOctal('0B011')).toBe(false)
  })

  test.skip('with wrong digits', () => {
    expect(isValidOctal('025F')).toBe(false)
    expect(isValidOctal('0o259')).toBe(false)
    expect(isValidOctal('0O258')).toBe(false)
  })

})
