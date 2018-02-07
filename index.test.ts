import togetprop = require('.');

const something = togetprop('something')
togetprop('aaa', {
  foo: 'foo'
});

const getThat = something`that`;

getThat({aaa: {that: 'that'}});
