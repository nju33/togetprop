# togetprop

## Install

```bash
yarn add togetprop
```

## Example

```javascript
const togetprop = require('togetprop');

const defaultValues = {
  baz: 'baz',
};

const fuga = togetprop('hoge.fuga', defaultValues);

const data = {
  hoge: {
    fuga: {
      foo: 'foo'
    }
  }
}

console.log(fuga`foo`(data)) // 'foo'
console.log(fuga`baz`(data)) // 'baz'
```
