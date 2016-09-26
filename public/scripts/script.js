var myApp=angular.module( 'myApp', [] );

myApp.controller( 'whereMyPeeps', [ '$scope', '$http', function( $scope, $http ){
	$scope.addRecord = function(){
		event.preventDefault();
			var objectToSend ={
				name: $scope.nameIn,
				//no comma needed below.
				location: $scope.locationIn
				};
			$http({
				method: 'POST',
				url: '/testPost',
				data: objectToSend
				});
	$scope.nameIn ='';
	$scope.locationIn='';
};

$scope.getRecords = function(){
	//period not needed between $ and http
	$http({
		method: 'GET',
		url: '/getRecords',
		}).then( function( response ){
			$scope.allTheRecords = response;
			console.log( $scope.allTheRecords );
				}), function myError( response ){
					console.log( response.statusText );
				};
			};
}]);
