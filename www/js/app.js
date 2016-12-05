var app=angular.module("myApp",["ionic","myApp.controllers","myApp.services","myApp.filter"]);
app.run(function ($ionicPlatform) {
    $ionicPlatform.ready(function () {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
            cordova.plugins.Keyboard.disableScroll(true);

        }
        if (window.StatusBar) {
            // org.apache.cordova.statusbar required
            StatusBar.styleDefault();
        }
    });
});
app.config(function($stateProvider,$urlRouterProvider,$ionicConfigProvider){
    $ionicConfigProvider.tabs.style("standard"); // standard | striped

    $ionicConfigProvider.navBar.alignTitle('center');
    $ionicConfigProvider.backButton.text('返回');
    $ionicConfigProvider.tabs.position('bottom');
    $stateProvider
        .state("tab",{
            url:"/tab",
            abstract:true,
            templateUrl:"templates/tabs.html"
        })
        .state("tab.tab1",{
            url:"/tab1",
            views:{
                   "tab1": {
                    templateUrl:"templates/tab1.html",
                    controller:"Tab1Ctrl"
                }
            }
        })
        .state("tab.tab1-details",{
            url:"/tab1/tab1-details/:id/:title",
            views:{
                "tab1": {
                    templateUrl:"templates/tab1-details.html",
                    controller:"Tab1DetailsCtrl"
                }
            }
        })
        .state("tab.tab2",{
            url:"/tab2",
            views:{
                "tab2":{
                    templateUrl:"templates/tab2.html",
                    controller:"Tab2Ctrl"
                }

            }
        })
        .state("tab.tab2-details",{
            url:"/tab2/tab2-details/:id/:title/:type",
            views:{
                "tab2": {
                    templateUrl:"templates/tab2-details.html",
                    controller:"Tab1DetailsCtrl"
                }
            }
        })
        .state("tab.tab3",{
            url:"/tab3",
            views:{
                "tab3":{
                    templateUrl:"templates/tab3.html",
                    controller:"Tab3Ctrl"
                }
            }
        })
        .state("tab.tab4",{
            url:"/tab4",
            views:{
                "tab4":{
                    templateUrl:"templates/tab4.html",
                    controller:"Tab4Ctrl"
                }
            }
        })
        .state("tab.account",{
            url:"/account",
            views:{
                "tab-account":{
                    templateUrl:"templates/account.html",
                    controller:"AccountCtrl"
                }
            }
        });
    $urlRouterProvider.otherwise("/tab/tab1");
});