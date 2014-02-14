require('angular/angular');

angular.module('myapp', [
  require('ui-router/release/angular-ui-router')
]).config(require('./states'));

