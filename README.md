# Micro Apps - part 2

If you have reviewed
[https://github.com/twilson63/angular-browserify-example](https://github.com/twilson63/angular-browserify-example),
welcome, if not you may want to right now.

The next piece of the puzzle is dealing with routing.  The angular-route
router is good for simple applications, but if you want more flexibility
you should use ui-router.  The ui-router is an open source community
library maintained by the angular-ui team.  It is focused on managing
state not routes and it maps nicely with the idea of micro-apps.  

Because each state does not have to know about another state to
co-exist.  For example, if you had a feature called `contacts` and a 
feature called `admin`, these features do not need to depend on each
other to exist or function.

In the article we will dive through ui-router and modify the myapp to
use ui-router instead of angular-route.  Then we will show how you can
start to pull controllers into packaged modules that can be stored in
their own repositories.


