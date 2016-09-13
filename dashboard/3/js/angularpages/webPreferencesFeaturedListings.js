var app = angular.module("webPreferencesFeaturedListingsApp", []);
app.controller("webPreferencesFeaturedListingsController", function($scope)
  {
    $scope.drowdown =
    [
      {
       label : "Display Featured Homes",
       inputType: ["show", "hide"]
      }
      ,
      {
      label : "Show listing's agent",
      inputType: ["Yes", "No"]
     }
     ,
      {
        label : "Display Type of Listing",
        inputType: ["My Listings", "Office Listings", "Corporate Listings"]
      }
      ,
      {
        label : "Display Number of Listings",
        inputType: ["1", "2", "3", "4", "5", "6", "7", "8", "9", "10"]
      }
      ,
      {
        label : "Order of listings",
        inputType: ["Random", "Price: Low to High", "Price: High to Low", "Property Type: SF, CC, MF, LD, RN, CI, BU, MH", "Property Type: MH, BU, CI, RN, LD, MF, CC, SF", "Status: New, Price Change, Back On Market only", "Status: Active + Solds Listings", "Status: Solds Listings only", "Property Type: SF Listings only", "Property Type: CC Listings only", "Property Type: MF Listings only"]
      }
      ,
      {
        label : "Listing Image Width",
        inputType: ["100px", "150px", "200px"]
      }
    ]
  }
);
