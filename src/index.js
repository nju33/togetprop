const dotProp = require('dot-prop');

module.exports = (basePath, defaultValues = {}) => ([relativePath]) => {
  return obj => {
    let baseObj = obj;
    if (basePath) {
      baseObj = dotProp.get(obj, basePath);
    }

    if (typeof baseObj !== 'object') {
      throw new Error(`Please you have to set object to obj.basePath`);
    }

    const defaultValue = dotProp.get(defaultValues, relativePath);

    return dotProp.get(baseObj, relativePath, defaultValue);
  };
};
