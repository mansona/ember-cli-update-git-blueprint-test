'use strict';

module.exports = {
  description: 'ember-cli-update-git-blueprint-test',

  locals() {
    let blueprintVersion = require('./package').version;

    return {
      blueprintVersion
    };
  }
};
