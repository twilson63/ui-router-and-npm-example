var fs = require('fs');

module.exports = function($stateProvider) {
  $stateProvider
    .state('state1', {
      url: '/',
      controller: require('./controllers/main'),
      template:  fs.readFileSync(__dirname + '/templates/main.html')
    });
};
