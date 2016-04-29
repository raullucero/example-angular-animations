var myApp = angular.module('myApp', ['ngAnimate', 'ui.router']);


myApp
.config(function($urlRouterProvider, $stateProvider) {

  $stateProvider
    .state('page1', {
      url: '/page1',
      template: '<div>hello Page 1</div>'
    })
    .state('page2', {
      url: '/page2',
      template: '<div>hello Page 2</div>'
    })
    .state('page3', {
      url: '/page3',
      template: '<div>hello Page 3</div>'
    });

  $urlRouterProvider.otherwise('/page1');

});
