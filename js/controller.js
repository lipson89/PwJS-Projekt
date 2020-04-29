var portfolioApp = angular.module('portfolioApp',[]); 




portfolioApp.controller('GalleryListCtrl', function($scope) { 

	$scope.galleries = [ { 
		'title':'Elbląg',  
		'when':'2020-04-04', 
		'thumbnailUrl':'img/place/1.jpg' 
	}, { 
		'title':'Gdańsk',  
		'when':'2020-04-02', 
		'thumbnailUrl':'img/place/2.jpg' 
	}, { 
		'title':'Warszawa',  
		'when':'2020-04-03', 
		'thumbnailUrl':'img/place/3.jpg' 
	}, { 
		'title':'Kraków',  
		'when':'2020-04-01', 
		'thumbnailUrl':'img/place/4.jpg' 
	}, { 
		'title':'Poznań',  
		'when':'2020-03-25', 
		'thumbnailUrl':'img/place/5.jpg' 
	}, { 
		'title':'Zawierz',  
		'when':'2020-03-30', 
		'thumbnailUrl':'img/place/6.jpg' 
	} ]; 

	$scope.sortList = [ { 'label':'Alfabetycznie', 'value':'title' }, { 'label':'Chronologicznie', 'value':'when' } , { 'label':'Od najnowszych', 'value':'-when' } ];
	$scope.orderProp = 'when'; 

});