angular.module('app.Home')
    .controller('homeController', [
        '$scope', 'homeService', '$q', function ($scope, homeService, $q) {

            $scope.petList = [];

            $scope.hideDiv = true;

            homeService.getPets().then(function (resp) {

                $scope.petList = resp.data;
            });

            $scope.seletedPets = function (selected) {

                if (selected != null) {

                    $scope.pet = selected.PetName;
                    $scope.hideDiv = false;
                    console.log($scope.pet);
                } else {
                    $scope.hideDiv = true;
                }
            };


            //uploadlink
            $(function () {
                $("#uploadLink").on('click', function (e) {
                    e.preventDefault();
                    $("#fileselect").trigger('click');
                });
            });

        }]);

