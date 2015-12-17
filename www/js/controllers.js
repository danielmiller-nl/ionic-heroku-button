angular.module('starter.controllers', [])

.controller('DashCtrl', function($scope) {
	$scope.shownMap = 0;
	
	$scope.showMap = function (mapId) {
		$scope.shownMap = mapId;
	};
	
	$scope.golfCourses = [
		{id: 1, name: "Admiral's Green and Captain's Hill Golf Courses", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21526.132186719875!2d-52.74611619776256!3d47.59178316730164!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450356950830"},
		// {id: 2, name: "Amaruk Golf and Sports Club", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		{id: 3, name: "Bally Haly Golf and Curling Club", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21528.924562484677!2d-52.71941819790435!3d47.58499410908574!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450356861633"},
		// {id: 4, name: "Blomidon Golf and Country Club", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 5, name: "Brookside Golf Resort and RV Park", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 6, name: "C.A. Pippy Park", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		{id: 7, name: "Clovelly", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21518.755984398344!2d-52.735287035968625!3d47.60971327644063!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450357054723"},
		// {id: 8, name: "Dhoon Lodge Golfing", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 9, name: "Gander Golf Club", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		{id: 10, name: "Glendenning Golf", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21564.850592052004!2d-52.8415666202991!3d47.49758205214148!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450357121880"}
		// {id: 11, name: "Grande Meadows Golf Course", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 12, name: "Gros Morne Golf Course", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 13, name: "Harmon Seaside Links", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 14, name: "Humber River Golf Club", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 15, name: "Humber Valley Resort", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 16, name: "Pitcher's Pond Golf Course", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 17, name: "Tamarack Golf Club", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 18, name: "Terra Nova Resort &amp; Golf Community", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 19, name: "Terra Nova Yacht Club", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 20, name: "The View Golf Course", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 21, name: "The Wilds at Salmonier River", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"},
		// {id: 22, name: "The Willows at Holyrood", mapUrl: "https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d21525.443196308723!2d-52.76233819754935!3d47.59345818557379!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1sRestaurants!5e0!3m2!1sen!2sca!4v1450355130769"}
	];
})

.controller('FriendsCtrl', function($scope, Friends) {
  $scope.friends = Friends.all();
})

.controller('FriendDetailCtrl', function($scope, $stateParams, Friends) {
  $scope.friend = Friends.get($stateParams.friendId);
})

.controller('AccountCtrl', function($scope) {
});
