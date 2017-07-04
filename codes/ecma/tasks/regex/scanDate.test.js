const scanDate = require('./scanDate')

describe('scanDate', () => {

  test('with message without date', () => {
    let message = 'Lorem ipsum dolor sit amet.'
    let expected = {
      count: 0,
      values: []
    }
    expect(scanDate(message)).toEqual(expected)
  })

  test.skip('with message having one date', () => {
    let message = 'Lorem ipsum dolor sit amet 12/01/2017 aliqua.'
    let expected = {
      count: 1,
      values: ['2017-01-12']
    }
    expect(scanDate(message)).toEqual(expected)
  })

  test.skip('with message having different date patterns', () => {
    let message = 'Lorem ipsum dolor sit amet 12/01/2017, consectetur 2015-12-31 adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'
    let expected = {
      count: 2,
      values: ['2017-01-12', '2015-12-31']
    }
    expect(scanDate(message)).toEqual(expected)
  })

})
