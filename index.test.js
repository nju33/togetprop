const togetprop = require('.');

describe('togetprop', () => {
  const data = {
    hoge: {
      fuga: {
        foo: 'foo',
      },
    },
    baz: 'baz'
  };

  const defaultValue = {
    foo: 'fooooo',
    baz: 'baz',
  };

  const fuga = togetprop('hoge.fuga', defaultValue);

  test('exists value', () => {
    expect(fuga`foo`(data)).toEqual('foo');
  });

  test('not exists value', () => {
    expect(fuga`baz`(data)).toEqual('baz');
  });

  test('get value from rootObject', () => {
    const rootObject = togetprop(null);
    expect(rootObject`baz`(data)).toEqual('baz');
  });

  test('will throw when object isnot object', () => {
    expect(() => togetprop('a')`b`('string')).toThrow();
  });
});
