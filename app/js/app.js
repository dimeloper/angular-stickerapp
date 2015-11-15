'use strict';

/* App Module */

angular.module('stickerApp', [
  'ui.router',
  'ui.bootstrap',
  'sticker.animations',
  'sticker.directives',
  'sticker.controllers',
  'sticker.filters',
  'sticker.services',
  'ngDragDrop'
])

.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /home
  $urlRouterProvider.otherwise("/home");
  

  $stateProvider
    .state('home', {
      url: "/home",
      templateUrl: "partials/home-view.html",
      controller: 'HomeCtrl'
    })
    
    ;
});
