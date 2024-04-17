app.controller('ProductController', function ($scope, $http, $routeParams, $location){
    let endpoint = 'http://localhost:3000/product/';
    if (!$routeParams.id) {
        // Xử lý hiển thị list
    } else {
        // Xem chi tiết, view data lên form list

    }
    //Add
    $scope.create = () => {

    }
    //Delete
    $scope.delete = (id) => {
    }
    //Update
    $scope.update = (id) =>{
        
    }
});
