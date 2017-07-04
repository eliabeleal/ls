const isValidCep = require('./isValidCep')

describe('CEP Checker', () => {

  test('validating with only numbers', () => {
    expect(isValidCep('01000100')).toBe(true)
  })

  test.skip('validating with numbers and hyphen', () => {
    expect(isValidCep('01000-100')).toBe(true)
  })

  test.skip('validating with numbers, dot and hyphen', () => {
    expect(isValidCep('01.000-100')).toBe(true)
  })

  test.skip('detecting invalid code', () => {
    expect(isValidCep('a01001000')).toBe(false)
    expect(isValidCep('01-001.000')).toBe(false)
    expect(isValidCep('01.001000')).toBe(false)
  })

})
