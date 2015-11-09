'use strict';

/* App Module */

angular.module('stickerApp', [
  'ui.router',
  'ui.bootstrap',
  'sticker.animations',

  'sticker.controllers',
  'sticker.filters',
  'sticker.services'
])

.config(function($stateProvider, $urlRouterProvider) {
  //
  // For any unmatched url, redirect to /state1
  $urlRouterProvider.otherwise("/stickers");
  //
  // Now set up the states
  $stateProvider
    .state('stickers', {
      url: "/stickers",
      templateUrl: "partials/home-view.html",
      controller: 'StickerCtrl'
    })
    
    ;
});
