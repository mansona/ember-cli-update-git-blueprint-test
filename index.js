'use strict';

module.exports = {
  name: require('./package').name,

  locals(options) {
    return {
      name: options.entity.name,
      blueprintLocation: require('./package').repository.url,
      blueprintVersion: require('./package').version
    };
  }
};
