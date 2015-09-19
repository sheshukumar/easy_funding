app.controller('MainController',function($scope) {
    $scope.title = 'Rarise';
    $scope.cause_list_close = function() {
        $scope.cause_list = false;
    };
   $scope.hide = function() {
        $scope.social_icons_hide = true;
        $scope.comment_box = true;
    };


      $scope.tabs = [{
          title: 'Home',
      }, {
          title: 'Profile',
      }, {
          title: 'About',
      }];
});


app.directive('slideToggle', function() {  
  return {
    restrict: 'A',      
    scope:{
      isOpen: "=slideToggle" // 'data-slide-toggle' in our html
    },  
    link: function(scope, element, attr) {
      var slideDuration = parseInt(attr.slideToggleDuration, 10) || 200;      
      
      // Watch for when the value bound to isOpen changes
      // When it changes trigger a slideToggle
      scope.$watch('isOpen', function(newIsOpenVal, oldIsOpenVal){
        if(newIsOpenVal !== oldIsOpenVal){ 
          element.stop().slideToggle(slideDuration);
        }
      });
      
    }
  };  
});



app.directive('searchForm', function() {
    return {
        restrict: 'AE',
        template: '<form action="" autocomplete="on"><input id="search" name="search" type="text" class="search1" placeholder="What i am looking for ?"><input id="search_submit" value="Rechercher" type="submit"></form>'
    };
});
