const isValidCep = require('./isValidCep')

describe('CEP pattern', () => {

  test('validating with only numbers', () => {
    expect(isValidCep('01000100')).toBe(true)
  })

  test.skip('validating with numbers and hyphen', () => {
    expect(isValidBRCep('01000-100')).toBe(true)
  })

  test.skip('validating with numbers, dot and hyphen', () => {
    expect(isValidBRCep('01.000-100')).toBe(true)
  })

  test.skip('detecting invalid code', () => {
    expect(isValidBRCep('a01001000')).toBe(false)
    expect(isValidBRCep('01-001.000')).toBe(false)
    expect(isValidBRCep('01.001000')).toBe(false)
  })

})
