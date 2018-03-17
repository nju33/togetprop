const {get} = require('lodash');

module.exports = (basePath, defaultValues = {}) => ([relativePath]) => {
  return obj => {
    let baseObj = obj;
    if (basePath) {
      baseObj = get(obj, basePath);
    }

    if (typeof baseObj !== 'object') {
      throw new Error(`Please you have to set object to obj.basePath`);
    }

    const defaultValue = get(defaultValues, relativePath);

    return get(baseObj, relativePath, defaultValue);
  }
}
