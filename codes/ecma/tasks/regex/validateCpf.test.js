const validateCpf = require('./validateCpf')

describe('CPF Checker', () => {

  test('validating correct numerical pattern', () => {
    expect(validateCpf('12345678909')).toBe(true)
    expect(validateCpf('98765432100')).toBe(true)
  })

  test.skip('validating correct mask pattern', () => {
    expect(validateCpf('111.444.777-35')).toBe(true)
    expect(validateCpf('111.222.333-96')).toBe(true)
  })

  test.skip('invalidating wrong numerial pattern by size', () => {
    expect(validateCpf('123456789091')).toBe(false)
    expect(validateCpf('9876543210')).toBe(false)
  })

  test.skip('invalidating wrong numecial pattern by including letters', () => {
    expect(validateCpf('1234567890a')).toBe(false)
    expect(validateCpf('9876543210X')).toBe(false)
  })

  test.skip('invalidating wrong mask pattern', () => {
    expect(validateCpf('111444.777-35')).toBe(false)
    expect(validateCpf('111-222.333-96')).toBe(false)
    expect(validateCpf('111.222.33396')).toBe(false)
  })

  test.skip('invalidating wrong mask pattern by size', () => {
    expect(validateCpf('111.444.777-353')).toBe(false)
    expect(validateCpf('111.222.333-9')).toBe(false)
  })

  test.skip('invalidating wrong mask pattern by including letters', () => {
    expect(validateCpf('111.444.777-3a')).toBe(false)
    expect(validateCpf('111.a22.333-96')).toBe(false)
  })

  test.skip('invalidating numerical pattern by check digit', () => {
    expect(validateCpf('12345678999')).toBe(false)
    expect(validateCpf('98765432199')).toBe(false)
  })

  test.skip('invalidating numerical pattern by check digit', () => {
    expect(validateCpf('111.444.777-99')).toBe(false)
    expect(validateCpf('111.222.333-99')).toBe(false)
  })

})
