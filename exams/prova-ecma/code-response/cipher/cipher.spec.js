let Cipher = require('./cipher')

describe('Cipher', function() {
  let cipher

  beforeEach(function() {
    cipher = new Cipher()
  })

  it('cipher lower case text with rot2', function() {
    expect(cipher.rot('abc', 2)).toEqual('cde')
    expect(cipher.rot('xyz', 2)).toEqual('zab')
  })

  it('cipher upper case text with rot2', function() {
    expect(cipher.rot('ABC', 2)).toEqual('CDE')
    expect(cipher.rot('XYZ', 2)).toEqual('ZAB')
  })

  it('cipher different case text with rot2', function() {
    expect(cipher.rot('AbC', 2)).toEqual('CdE')
    expect(cipher.rot('XyZ', 2)).toEqual('ZaB')
  })

  it('cipher lower case text with rot13', function() {
    expect(cipher.rot('abc', 13)).toEqual('nop')
    expect(cipher.rot('xyz', 13)).toEqual('klm')
  })

  it('cipher upper case text with rot13', function() {
    expect(cipher.rot('ABC', 13)).toEqual('NOP')
    expect(cipher.rot('XYZ', 13)).toEqual('KLM')
  })

  it('cipher different case text with rot13', function() {
    expect(cipher.rot('AbC', 13)).toEqual('NoP')
    expect(cipher.rot('XyZ', 13)).toEqual('KlM')
  })

  it('cipher different case text and numbers with rot13', function() {
    expect(cipher.rot('AbC12', 13)).toEqual('NoP12')
    expect(cipher.rot('XyZ97', 13)).toEqual('KlM97')
  })

})
