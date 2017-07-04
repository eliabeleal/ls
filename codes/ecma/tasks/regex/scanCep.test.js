const scanCep = require('./scanCep')

describe('scanCep', () => {

  test('with message without cep', () => {
    let message = 'Lorem ipsum dolor sit amet.'
    let expected = {
      count: 0,
      values: []
    }
    expect(scanCep(message)).toEqual(expected)
  })

  test.skip('with message with one cep', () => {
    let message = 'Lorem ipsum dolor sit amet 12345123 aliqua.'
    let expected = {
      count: 1,
      values: ['12345123']
    }
    let received = scanCep(message)
    expect(received.count).toBe(expected.count)
    expect(received.values).toEqual(expected.values)
  })

  test.skip('with message with different cep patterns', () => {
    let message = 'Lorem ipsum dolor sit amet 12345123, consectetur 12345-123 adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    let expected = {
      count: 2,
      values: ['12345123', '12345-123']
    }
    let result = scanCep(message)
    expect(result.count).toBe(expected.count)
    expect(result.values).toEqual(expected.values)
  })


})
