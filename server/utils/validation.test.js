const expect = require('expect');

const {isRealString} = require('./validation');

describe('isRealString', () => {
  it('should reject nonstring values', () => {
    var num = 1234;
    var obj = {
      name: 'test',
      room: 'test'
    };
    expect(isRealString(num)).toBe(false);
    expect(isRealString(obj)).toBe(false);
  });

  it('should reject string with only spaces', () => {
    var blank = '   '

    expect(isRealString(blank)).toBe(false);
  });

  it('should allow strings with non-space characters', () => {
    var spaceStr = 'Test Room'

    expect(isRealString(spaceStr)).toBe(true);
  });
});
