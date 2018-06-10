# SO_Angular

This repo contains following projects/files : 
1. User story : Parse invoice numbers
2. The Marco Polo Game
3. Unit test for Marco polo using Jasmine 
4. How can you limit the scope on a directive and why would you do this? (Answer written at the bottom of this file.)
    
## **Parse invoice number application** 

### Setup

* git clone `https://github.com/nehachauhan14/ng4-coding-challenges.git`
* Run `npm install` from project directory (parse-invoice)
* Run `ng serve --port 4000` to start project and run the application at `localhost:4000`
* to run Unit test run command ng test in another terminal from project directory(parse-invoice) 

### Architecture
* It uses `Angular cli` to serve the application 
* Input txt file having Ascii codes is uploaded 
* Input content get parsed to output text box and Output txt file is downloaded with the parsed value .

## **The Marco Polo Game** 

### Setup

* Open terminal and run `node marcopolo.js` from project directory (marco-polo-game)
* When executed, your function should print a single string of all answers from 1 to 100.

### Architecture
* It uses node to run the application  

## **Unit test for Marco polo using Jasmine** 

### Setup
*  go to `jasmine-standalone-3.1.0` under project directory
* Click and open `SpecRunner.html` file
* html file will show result for unit test run

### Architecture
* Jasmine framework used to create and run test case 


## How can you limit the scope on a directive and why would you do this?

> **Answer**

** What is Scope? ** 

* Scope is the raw javascript object having custom functions and properties . Scope is used to provide data /communicate between    controller and view template .
* Whenever the AngularJS application is bootstrapped, a rootScope object is created. 
* Each scope created by controllers, directives and services are prototypically inherited from rootScope.  

We can limit the scope on a directive by creating by using directive ` scope: { ... } ` .
There are 3 types of directive scopes:
1. Scope : False ( Directive uses its parent scope )
2. Scope : True ( Directive gets a new scope )
3. Scope : { } ( Directive gets a new isolated scope )


Directives with the new isolated scope:  When we create a new isolated scope then it will not be inherited from the parent scope. 
This new scope is called Isolated scope because it is completely detached from its parent scope.

>>Why should we use isolated scope ? 
 * We should use isolated scope when we want to create a custom directive because it will make sure that our directive is generic, and placed anywhere inside the application. Parent scope is not going to interfere with the directive scope.


**Example**
 ```
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
```
