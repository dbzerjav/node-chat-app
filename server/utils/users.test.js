const expect = require('expect');

const {Users} = require('./users');

describe('Users', () => {
  var users;

  beforeEach(() => {
      users = new Users();
      users.users = [{
        id: '1',
        name: 'user1',
        room: 'room1'
      }, {
        id: '2',
        name: 'user2',
        room: 'room2'
      }, {
        id: '3',
        name: 'user3',
        room: 'room1'
      }]
  });

  it('should add new user', () => {
    var users = new Users();
    var user = {
      id: '1234',
      name: 'testNm',
      room: 'testRm'
    };
    var resUser = users.addUser(user.id, user.name, user.room);

    expect(users.users).toEqual([user]);
  });

  it('should remove a user', () => {
    var userId = '1';
    var user = users.removeUser(userId);

    expect(user.id).toBe(userId);
    expect(users.users.length).toBe(2);
  });

  it('should not remove user', () => {
    var userId = '1234';
    var user = users.removeUser(userId);

    expect(user).toNotExist();
    expect(users.users.length).toBe(3);
  });

  it('should find user', () => {
    var userId = '1';
    user = users.getUser(userId);

    expect(user.id).toEqual(userId);
  });

  it('should not find user', () => {
    var userId = '1234';
    user = users.getUser(userId);

    expect(user).toNotExist();
  });

  it('should return names for room1', () => {
    var userList = users.getUserList('room1');

    expect(userList).toEqual(['user1', 'user3']);
  });

  it('should return names for room2', () => {
    var userList = users.getUserList('room2');

    expect(userList).toEqual(['user2']);
  });
});
