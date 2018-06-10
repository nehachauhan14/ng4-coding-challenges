What is Scope ? 
- Scope is the raw javascript object having custom functions and properties . Scope is used to provide data /communicate between controller and view template .
  Whenever the AngularJS application is bootstrapped, a rootScope object is created. 
  Each scope created by controllers, directives and services are prototypically inherited from rootScope.  

We can limit the scope on a directive by creating by using directive scope: { ... }. 
There are 3 types of directive scopes:
1. Scope : False ( Directive uses its parent scope )
2. Scope : True ( Directive gets a new scope )
3. Scope : { } ( Directive gets a new isolated scope )


Directives with the new isolated scope:  When we create a new isolated scope then it will not be inherited from the parent scope. 
This new scope is called Isolated scope because it is completely detached from its parent scope.

Why should we use isolated scope ? 
 - We should use isolated scope when we want to create a custom directive because it will make sure that our directive is generic, and placed anywhere inside the application. Parent scope is not going to interfere with the directive scope.


Example
 
var myApp = angular.module("isolatedScopeTest",[]);

app.controller("myController",function($scope){
    $scope.name = "Neha";
});
myApp.directive("myDirective", function(){
    return {
        restrict: "EA",
        scope: {},
        template: "<div>Your name is : {{name}}</div>"+
        "Change your name : <input type='text' ng-model='name'/>"
    };
});
