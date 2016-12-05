var app = angular.module("myApp.controllers", []);
app.controller("BaseCtrl",function($scope,$rootScope,$ionicSlideBoxDelegate, $ionicTabsDelegate){
    $rootScope.imgUrl = server.imgUrl;
    var a = $scope.classify;
    $scope.slides = a;
    $scope.tabs = a;
    $scope.getData=function(c){
        if(ionic.Platform.isAndroid()){
            c.doRefresh();
        }
        c.isload=false;
        c.callback=function(){
            $scope.$broadcast('scroll.refreshComplete');
            $scope.$broadcast('scroll.infiniteScrollComplete');
        }
    };
    $scope.getData($scope.classify[0]);
    var selectTab = function (index) {
        angular.forEach($ionicTabsDelegate._instances, function (tabs) {
            if ($scope.currentTabId == tabs.$element[0].id) {
                tabs.select(index);
            }
        })
    };
    $scope.slideChanged=function(index){
        var c = $scope.classify[index];
        $scope.getData(c);
        //选中tabs
        selectTab(index);
    };
    $scope.$on('$ionicView.afterEnter', function () {
        //选中tabs
        selectTab($ionicSlideBoxDelegate.currentIndex());
    });

    $scope.selectedTab = function (index) {
        //滑动的索引和速度
        $ionicSlideBoxDelegate.slide(index)
    };
    $scope.$on('$ionicView.beforeEnter', function () {
        console.log('已经成为活动视图');
        $ionicTabsDelegate.showBar(true);
    });
});
app.controller('Tab1Ctrl', function ($scope,$controller,$state, Tab1Service, $ionicTabsDelegate) {
    $scope.classify=Tab1Service.getClassify();
    $scope.currentTabId="tab1";
    $scope.currentSlide = "slide1";
    $controller("BaseCtrl",{$scope:$scope});
    $scope.goDetails=function(item,type){
        $state.go("tab.tab1-details",{id:item.id,title:item.title,type:type});
        $ionicTabsDelegate.showBar(false);
    }

});
app.controller("Tab1DetailsCtrl",function($scope,$stateParams,Tab1Service){
    var id=$stateParams.id;
    $scope.title=$stateParams.title;
    Tab1Service.getDetails(id).success(function(response){
        $scope.item=response;
    })
});
app.controller("Tab2Ctrl", function ($scope,$state,Tab2Service,$controller,$ionicTabsDelegate) {
    $scope.classify = Tab2Service.getTab2Menu();
    $scope.currentTabId = "tab2";
    $scope.currentSlide = "slide2";
    $controller('BaseCtrl', { $scope: $scope });
    $scope.goDetails = function (item, type) {
        var title = "", name = "";
        if (item.title) {
            title += item.title;
        }
        if (item.name) {
            title += item.name;
        }
        $state.go('tab.tab2-details', { id: item.id, title: title, type: type });
        $ionicTabsDelegate.showBar(false);
    }
});
app.controller("Tab3Ctrl", function ($scope) {

});
app.controller("Tab4Ctrl", function ($scope) {

});
app.controller("AccountCtrl", function ($scope) {

});