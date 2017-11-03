var expect = require('expect');

var{generateMessage, generateLocationMessage} = require('./message');


describe('generateMessage', () => {
  it('should generate the correct message object', () => {
    var from = 'Bill@example.com'
    var text = 'Some text'
    var message = generateMessage(from, text)

    expect(message.createdAt).toBeA('number');
    expect(message).toInclude({from, text});
  });
});

describe('generateLocationMessage', () => {
  it('should generate correct location object', () => {
    var from = 'Test';
    var lat = 1;
    var lon = 1;
    var url = 'https://www.google.com/maps?q=1,1'
    var locationMsg = generateLocationMessage(from, lat, lon);

    expect(locationMsg.createdAt).toBeA('number');
    expect(locationMsg).toInclude({from, url});
  });
});
