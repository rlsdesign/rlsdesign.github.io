var app = angular.module("webPreferencesFeaturedTownsApp", []);
app.controller("webPreferencesFeaturedTownsController", function($scope)
  {
    $scope.townInputs =
    [
      {"label" : "Town 1","value" : "Elmont, NY"},
      {"label" : "Town 2","value" : "Astoria, NY"},
      {"label" : "Town 3","value" : "Huntington, NY"},
      {"label" : "Town 4","value" : "Massapequa, NY"},
      {"label" : "Town 5","value" : "Hempstead, NY"},
      {"label" : "Town 6","value" : "Jamaica, NY"}
    ]
    ,
    $scope.drowdown =
    [
      {
       label : "Featured Towns",
       inputType: ["Show", "Hide"]
      }
    ]
  }
);
