angular.module('app.Home')
    .controller('homeController', [
        '$scope', 'homeService', '$q', function ($scope, homeService, $q) {

            $scope.petList = [];
            $scope.Files = [];
            $scope.hideDiv = true;
            //service to get the pets name
            homeService.getPets().then(function (resp) {

                $scope.petList = resp.data;
            });

            // select pet on drop down list
            $scope.seletedPets = function (selected) {

                if (selected != null) {

                    $scope.pet = selected.PetName;
                    $scope.hideDiv = false;
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


            //fileuploader
            var fileDragHover = function (e) {
                e.stopPropagation();
                e.preventDefault();
                e.target.className = (e.type == "dragover" ? "hover" : "");
            };

            // file selection
            var fileSelectHandler = function (e) {


                var newFiles = [];
                // cancel event and hover styling
                fileDragHover(e);

                // fetch FileList object
                var files = e.target.files || e.dataTransfer.files;

                // process all File objects
                for (var i = 0, f; f = files[i]; i++) {

                    newFiles.push(f);


                }
                $scope.Files = newFiles;
            };

            var fileDrag = document.getElementById('filedrag');
            var fileSelect = document.getElementById('fileselect');

            fileSelect.addEventListener("change", fileSelectHandler, false);
            fileDrag.addEventListener("dragover", fileDragHover, false);
            fileDrag.addEventListener("dragleave", fileDragHover, false);
            fileDrag.addEventListener("drop", fileSelectHandler, false);
            fileDrag.style.display = "block";


            $scope.submitClaim = function () {

                $("#myModal").modal('show');

            };

            $scope.cancelUpload = function () {
                $scope.pet = '';
                $scope.petName = '';
                $scope.Files = [];
                $scope.hideDiv = true;
            };

        }]);

