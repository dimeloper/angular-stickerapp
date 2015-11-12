'use strict';

/* Controllers */

angular.module('sticker.controllers', [])

.controller('HomeCtrl', function($scope, $state, $uibModal) {
    $scope.image = null;
    $scope.stickers = [];
  
    
    
    $scope.resetApp = function (){
      $scope.image = null;
    }

    $scope.openModal = function () {

      var modalInstance = $uibModal.open({
        animation: true,
        templateUrl: 'partials/sticker-modal.html',
        controller: 'StickerCtrl',
        size: 'sm',
        resolve: {
          uploadedImage: function () {
            return $scope.sticker;
          }
        }
      });

      modalInstance.result.then(function (uploadedImage) {
        $scope.stickers.push(uploadedImage);
        console.log($scope.stickers);
      }, function () {
        console.log('Modal dismissed at: ' + new Date());
      });

    }

    
})

.controller('StickerCtrl', function($scope, $state, $uibModalInstance) {
  
  $scope.sticker = null;
  
  $scope.uploadSticker = function () {
    $uibModalInstance.close($scope.sticker);
  };
  
  $scope.closeModal = function () {
    $uibModalInstance.close();
  }
});


