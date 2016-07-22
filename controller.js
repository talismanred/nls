var app = angular.module('myApp', []);
app.controller('customersCtrl', function($scope, $http) {
    $http.get("nls_files/stock.php").then(function(response) {
        $scope.myData = response.data.furniture;
        $scope.showSelections = true;
        $scope.showSelection = false; 
    });

    $scope.displayFull = function (x,u,a) {
      $scope.showSelections = false;
      $scope.showSelection = true;
      $scope.currentone = x;
      $scope.imageVar = u
      $scope.altVar = a; 
    } 

    $scope.main = function () {
      $scope.showSelections = true;
      $scope.showSelection = false;
      //$scope.$apply();
      //$route.reload();remember to inject into controller
      window.location.reload();
    } 

    $scope.changeImage = function (img, alt){
      $scope.imageVar = img;
      $scope.altVar = alt;
    }

    $scope.enquire = function (subject) { 
      $scope.showContactFormFields = true;
      $scope.showContactFormThanks = false;
      $scope.subject = subject;
    }   
              
    
});

app.controller('mainController', function($scope, $http) {          

    $scope.master = {fullName: "", email: "", message: ""};

    $scope.reset = function() {
        $scope.user = angular.copy($scope.master);
        $scope.subject = "";
        $scope.userForm.$setPristine();
        $scope.model = "";
        $scope.showContactFormFields = false;
    };
    
    // function to submit the form after all validation has occurred        
    $scope.submitForm = function() {
      // check to make sure the form is completely valid
      if ($scope.userForm.$valid) {

        var data = {
           "name" : $scope.userForm.fullName,
           "email" : $scope.userForm.email,
           "message" : $scope.userForm.message,
           "email_subject" : $scope.subject
           }

      $http.post("nls_files/nlsenq.php", data).success(function(data){

     $scope.reset();

     $scope.showContactFormThanks = true;   


     }).error(function(data, status, headers, config) {

     //alert('not sent');

     });


  }

                                  

    };

  });




