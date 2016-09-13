var app = angular.module("paradiseByADashboardApp", []);
app.controller("dashboardController", function($scope) {
  $scope.boxes = [
    {"Number" : "1092","Title" : "Blog Posts","Icon" : "fa-rss","Panel" : "panel-blue"},
    {"Number" : "5.32","Title" : "Page Views","Icon" : "fa-newspaper-o","Panel" : "panel-brown"},
    {"Number" : "391","Title" : "Saved Listings","Icon" : "fa-heart","Panel" : "panel-orange"},
    {"Number" : "224,271","Title" : "Listing Hits","Icon" : "fa-home","Panel" : "panel-green"},
    {"Number" : "1,117","Title" : "Clients","Icon" : "fa-users","Panel" : "panel-yellow"},
    {"Number" : "56,187","Title" : "Sent Emails","Icon" : "fa-envelope","Panel" : "panel-red"}
  ]
  ,
  $scope.customers = [
  {
    "Activity" : "1 Hours Ago",
    "Rating" : "em-blush",
    "FullName" : "John Doe",
    "Email" : "john@example.com",
    "Saved" : "10",
    "Viewed" : "20"
  }
  ,
  {
    "Activity" : "2 Hours Ago",
    "Rating" : "em-smiley",
    "FullName" : "John Doe",
    "Email" : "john@example.com",
    "Saved" : "10",
    "Viewed" : "20"
  }
  ,
  {
    "Activity" : "3 Hours Ago",
    "Rating" : "em-weary",
    "FullName" : "John Doe",
    "Email" : "john@example.com",
    "Saved" : "10",
    "Viewed" : "20"
  }
  ,
  {
    "Activity" : "4 Hours Ago",
    "Rating" : "em-weary",
    "FullName" : "John Doe",
    "Email" : "john@example.com",
    "Saved" : "10",
    "Viewed" : "20"
  }
  ,
  {
    "Activity" : "5 Hours Ago",
    "Rating" : "em-weary",
    "FullName" : "John Doe",
    "Email" : "john@example.com",
    "Saved" : "10",
    "Viewed" : "20"
  }

  ]
});
