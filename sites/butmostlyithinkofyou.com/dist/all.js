(function() {
  angular
    .module('bonsaiGirl', [
      'ngRoute',
      'ngAnimate'
    ]);

}());
(function(){
  angular
    .module('bonsaiGirl')
    .config(function($routeProvider){

      $routeProvider
        .when('/', {
          templateUrl: 'app/components/home/homeView.html',
          controller: 'homeController',
          controllerAs: 'homeCtrl'
        })

        .when('/author', {
          templateUrl: 'app/components/author/authorView.html',
          controller: 'authorController',
          controllerAs: 'authorCtrl'
        })

        .when('/book', {
          templateUrl: 'app/components/book/bookView.html',
          controller: 'bookController',
          controllerAs: 'bookCtrl'
        })
        .otherwise({ redirect_to: '/' });

    });

}());
(function(){
  var authorController = function() {
    function init(){
      
    }
  };

  authorController.$inject = [];

  angular
    .module('bonsaiGirl')
    .controller('authorController', authorController);
}());




(function(){
  var bookController = function() {
    function init(){
      
    }
  };

  bookController.$inject = [];

  angular
    .module('bonsaiGirl')
    .controller('bookController', bookController);
}());


(function(){

  var homeController = function() {
    function init() {
      animateCover();
    }

    init();
  };

  homeController.$inject = [];

  angular
    .module('bonsaiGirl')
    .controller('homeController', homeController);
}());
