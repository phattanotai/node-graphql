loggingConfig = {
  format: [
    "{{timestamp}} <{{title}}> {{message}}", //default format
    {
      error: "{{timestamp}} <{{title}}> {{message}} (in {{file}}:{{line}})\nCall Stack:\n{{stack}}" // error format
    }
  ],
  dateformat: "yyyy-mm-dd HH:MM:ss.L",
  preprocess: function (data) {
    data.title = data.title.toUpperCase();
  },
  level: 'debug'
};

const log = require('tracer').colorConsole(loggingConfig);

module.exports = log;
