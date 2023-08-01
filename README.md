# AngularJS-NameCalculator

In this project we created a simple Name Calculator in order to practice the basics of the common MVVM design pattern.

The Name calculator only has 4 files including this readme.
1. angular.min.js
   - This has been imported from the web and allows us to use Angular practices within our code.
2. app.js
   - Here is where we define our angular module and controller.
   - The controller uses JavaScript and angular to control the functionality of this application.
   - We are able to control the functionality by using a part of Angular called $scope. This allows us to create and bind HTML variables to our JavaScript code
3. index.html
   - This is our view
   - We bind this html code to our Angular module. Everything contained within the tag that the Angular module is bound on is controlled by that module.
   - We bind a div to the controller. Everything contained within this div is controlled by our Angular controller in our JavaScript file
   - We attributes such as ng-app, ng-model, and ng-keyUp that are interpretted by angular which allows us to bind the view to our viewModel
