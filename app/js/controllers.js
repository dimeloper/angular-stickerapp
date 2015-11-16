'use strict';

/* Controllers */

angular.module('sticker.controllers', [])

.controller('HomeCtrl', function($scope, $state, $uibModal) {
    $scope.image = null;
    $scope.stickers = [];
    $scope.stickersused = [];
    $scope.canvas = [];
    
    
    $scope.resetApp = function (){
      $scope.image = null;
      $scope.stickers = [];
      $scope.stickersused = [];
      $scope.canvas = [];
    }

    $scope.deleteSticker = function(index){
      $scope.stickers.splice(index,1);
    }

    $scope.stopCallback = function (evt, ui, index) {
       // This function is being called only when the sticker is being placed onto the image.
        var myStyle = {
          "top" : (ui.offset.top+19)+"px",
          "left" : (ui.offset.left+5)+"px"
        };

        var sticker = {
          img : $scope.stickers[index].img,
          title : $scope.stickers[index].title,
          drag : true,
          style : myStyle
        };

        $scope.stickersused.push(sticker);
    };

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
    title : '',
    drag : true
  };

  $scope.hasImgError = false;
  $scope.hasTitleError = false;

  $scope.uploadSticker = function () {
    if($scope.sticker.img==null){
      $scope.hasImgError = true;
      $scope.hasTitleError = false;
    }else if($scope.sticker.title==''){
      $scope.hasTitleError = true;
      $scope.hasImgError = false;
    }else{
      $scope.hasImgError = false;
      $scope.hasTitleError = false;
      $uibModalInstance.close($scope.sticker);
    }
    
  };
  
  $scope.closeModal = function () {
    $uibModalInstance.close();
  }
});


