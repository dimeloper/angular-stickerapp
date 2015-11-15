'use strict';

/* Controllers */

angular.module('sticker.controllers', [])

.controller('HomeCtrl', function($scope, $state, $uibModal) {
    $scope.image = null;
    $scope.stickers = [];
  
    
    
    $scope.resetApp = function (){
      console.log($scope.image);
      $scope.image = null;
      $scope.stickers = [];
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
      }, function () {
       //console.log('Modal dismissed at: ' + new Date());
      });

    }

    
})

.controller('StickerCtrl', function($scope, $state, $uibModalInstance) {
  
  $scope.sticker = {
    img : null,
    title : ''
  };
  $scope.hasErrors = false;

  $scope.uploadSticker = function () {
    if($scope.sticker.img!=null && $scope.sticker.title!=''){
      $scope.hasErrors = false;
      $uibModalInstance.close($scope.sticker);
    }else{
      $scope.hasErrors = true;
    }
    
  };
  
  $scope.closeModal = function () {
    $uibModalInstance.close();
  }
});


