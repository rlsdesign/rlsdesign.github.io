var app = angular.module("webPreferencesColorsApp", []);
app.controller("webPreferencesColorsController", function ($scope) {
  $scope.baseColorSettings =
  [
    {"label" : "Base Price Color","value" : "green"},
    {"label" : "Base Text Color","value" : "#000"},
    {"label" : "Base Text Family","value" : "Web Stack"},
    {"label" : "Base Text Size","value" : "14px"}
  ]
  ,
  $scope.iconColorSettings =
  [
    {"label" : "Icon background Color","value" : "@theme-color"},
    {"label" : "Icon Border Color","value" : "@theme-color"},
    {"label" : "Icon Color","value" : "#efefef"},
    {"label" : "Icon Hover background Color","value" : "lighten(@theme-color,10%)"},
    {"label" : "Icon Hover Border Color","value" : "lighten(@theme-color,10%)"},
    {"label" : "Icon Hover Color","value" : "#efefef"}
  ]
  ,
  $scope.menuColorSettings =
  [
    {"label" : "Menu Divider Color","value" : "#d9d9d9"},
    {"label" : "Menu Hover Background Color","value" : "lighten(@theme-color,10%)"},
    {"label" : "Menu Hover text Color","value" : "#efefef"},
    {"label" : "Menu Text Color","value" : "#efefef"},
    {"label" : "Menu Text Family","value" : "Font Stack"},
    {"label" : "Menu Text Size","value" : "18px"}
  ]
  ,
  $scope.slidesColorSettings =
  [
    {"label" : "Slide Text Color","value" : "#efefef"},
    {"label" : "Slide Text Hover Color","value" : "#b9dcff"}
  ]
  ,
  $scope.themeColorSettings =
  [
    {"label" : "Theme Action Background Color","value" : "fade(@theme-color, 20%)"},
    {"label" : "Theme Alt Color","value" : "#dfdfdf"},
    {"label" : "Theme Border Color","value" : "lighten(@theme-color,10%)"},
    {"label" : "Theme Color","value" : "#003300"},
    {"label" : "Theme Hover Color","value" : "lighten(@theme-color,20%)"},
    {"label" : "Theme Images Location","value" : "'/images'"},
    {"label" : "Theme Photo Style","value" : "Web Stack"},
    {"label" : "Theme Tagline Color","value" : "#898989"},
    {"label" : "Theme Text Color","value" : "#333333"},
    {"label" : "Theme Title Style","value" : "Web Stack"},
    {"label" : "Theme Title Text Color","value" : "#ffffff"},
    {"label" : "Theme Title Text Size","value" : "14px"}
  ]

});
