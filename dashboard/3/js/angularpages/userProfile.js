var app = angular.module("inputApp", []);
app.controller("inputController", function($scope)
{
  $scope.agentInfo =
  [
    {"label" : "First Name","value" : "Brian"},
    {"label" : "Last Name","value" : "Sopok"},
    {"label" : "Title","value" : "Front End Web Dev"},
    {"label" : "Primary Number","value" : "555-555-555"},
    {"label" : "Office Number","value" : "555-555-555"},
    {"label" : "Email","value" : "bp11sopo@siena.edu"}
  ]
  ,
  $scope.agentCredentials =
  [
    {"label" : "New Password","value" : "password"},
    {"label" : "Confirm Password","value" : "password"},
  ]

});
