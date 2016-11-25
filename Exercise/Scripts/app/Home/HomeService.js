angular.module('app.Home')
    .service('homeService', ['$http',
        function ($http) {

            var getPets = function () {
                return $http.get('/Home/GetPets');
            };
            return {
                getPets: getPets
            };
        }
    ]);