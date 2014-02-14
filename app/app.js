require('angular/angular');
require('page2/bundle');

angular.module('myapp', [
  require('ui-router/release/angular-ui-router'),
  'myapp.page2'
]).config(require('./states'));

