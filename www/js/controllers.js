'use strict';
var app=angular.module("starter.controllers",[]);
app.controller('Tab1Ctrl', function ($scope,$rootScope,$timeout,$ionicLoading, Tab1Service,  $ionicSlideBoxDelegate, $ionicTabsDelegate) {
    $ionicLoading.show({
        content:"Loading",
        animation:"fade-in",
        showBackdrop:true,
        maxWidth:200,
        showDelay:0
    });
    $timeout(function(){
        $ionicLoading.hide();

    },2000);



    $rootScope.imgUrl=imgUrl;
    var classify = Tab1Service.getClassify();

    $scope.slides = classify;
    $scope.tabs = classify;

    var slideIndex = 0;

    Tab1Service.getList(classify[0].url, 1, 50).then(function (response) {

        if (response.data.status) {
            $scope.items = response.data.tngou;
            console.log(response.data);
        }
    }, function (error) {
        console.log(error);
    });
    $scope.slideChanged = function (index) {
        //这里使用instances[1]的原因是视图中有两个tabs
        $ionicTabsDelegate._instances[1].select(index);
    };
    $scope.$on('$ionicView.afterEnter', function () {
        //等待视图加载完成的时候默认选中第一个菜单
        $ionicTabsDelegate._instances[1].select($ionicSlideBoxDelegate.currentIndex());
    });

    $scope.selectedTab = function (index) {
        //滑动的索引和速度
        $ionicSlideBoxDelegate.slide(index)
    }


});
app.controller("Tab2Ctrl",function($scope){
    $scope.title="22";
});
app.controller("Tab3Ctrl",function($scope){
    $scope.title="33";
});
app.controller("Tab4Ctrl",function($scope){
    $scope.title="33";
});
app.controller("AccountCtrl",function($scope){
    $scope.title="33";
});