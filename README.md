# Micro Apps - part 2

If you have reviewed
[https://github.com/twilson63/angular-browserify-example](https://github.com/twilson63/angular-browserify-example),
welcome, if not you may want to right now.

The next piece of the puzzle is dealing with routing.  The angular-route
router is good for simple applications, but if you want more flexibility
you should use ui-router.  The ui-router is an open source community
library maintained by the angular-ui team.  It is focused on managing
state not routes and it maps nicely with the idea of micro-apps.  

[https://github.com/angular-ui/ui-router](https://github.com/angular-ui/ui-router)

Because each state does not have to know about another state to
co-exist.  For example, if you had a feature called `contacts` and a 
feature called `admin`, these features do not need to depend on each
other to exist or function.

In the article, we will dive through ui-router and modify the myapp to
use ui-router instead of angular-route.  Then we will show how you can
start to pull controllers into packaged modules that can be stored in
their own repositories.

So lets swap out ui-router for angular-route:

# package.json

``` json
  "napa": {
    "angular": "angular/bower-angular",
    "ui-router": "angular-ui/ui-router"
  }
```

# app/app.js

```
require('angular/angular');

angular.module('myapp', [ 
  require('ui-router/release/ui-router')
]);
```

So we are including the ui-router instead of `ngRoute`.  Now we need to
change the index html to use `<ui-view></ui-view>`

# public/index.html

``` html
<body>
  <ui-view></ui-view>
  <a ui-sref="state1">Home</a>
  <a ui-sref="state2">State2</a>
</body>
```
# finally we need to change the routes to states

# app/states.js

```
module.exports = function($stateProvider) {
  $stateProvider
    .state('state1', {
      url: '/',
      controller: require('./controllers/main'),
      template: fs.readFileSync(__dirname + '/templates/main.html')
    })
    .state('state2', {
      url: '/page2',
      controller: require('./controllers/page2'),
      template: fs.readFileSync(__dirname + '/templates/page2.html')
    });
};
```

# remove app/routes.js

# modify app/app.js

``` js
  .config(require('./states'));
```

