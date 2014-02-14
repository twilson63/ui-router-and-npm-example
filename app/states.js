var fs = require('fs');

module.exports = function($stateProvider) {
  $stateProvider
    .state('state1', {
      url: '/',
      controller: require('./controllers/main'),
      template:  fs.readFileSync(__dirname + '/templates/main.html')
    })
    .state('state2', {
      url: '/page2',
      controller: require('./controllers/page2'),
      template: fs.readFileSync(__dirname + '/templates/page2.html')
    });
};
