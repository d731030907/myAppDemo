'use strict';
var app=angular.module("starter",["ionic","starter.controllers","starter.services","starter.filter"]);
var domain = "http://www.tngou.net/api";
var imgUrl = "http://tnfs.tngou.net/image";
var cache ={
    user :"TongeNews"
};
app.run(function($ionicPlatform) {
    $ionicPlatform.ready(function() {
        // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
        // for form inputs)
        if (window.cordova && window.cordova.plugins.Keyboard) {
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

    $ionicConfigProvider.platform.ios.tabs.style('standard');
    $ionicConfigProvider.platform.ios.tabs.position('bottom');
    $ionicConfigProvider.platform.android.tabs.style('standard');
    $ionicConfigProvider.platform.android.tabs.position('standard');

    $ionicConfigProvider.platform.ios.navBar.alignTitle('center');
    $ionicConfigProvider.platform.android.navBar.alignTitle('left');

    $ionicConfigProvider.platform.ios.backButton.previousTitleText('').icon('ion-ios-arrow-thin-left');
    $ionicConfigProvider.platform.android.backButton.previousTitleText('').icon('ion-android-arrow-back');

    $ionicConfigProvider.platform.ios.views.transition('ios');
    $ionicConfigProvider.platform.android.views.transition('android');
    $stateProvider
        .state("tab",{
            url:"/tab",
            templateUrl:"templates/tabs.html"
        })
        .state("tab.tab1",{
            url:"/tab1",
            views:{
                "tab-tab1":{
                    templateUrl:"templates/tab1.html",
                    controller:"Tab1Ctrl"
                }
            }
        })
        .state("tab.tab2",{
            url:"/tab2",
            views:{
                "tab-tab2":{
                    templateUrl:"templates/tab2.html",
                    controller:"Tab2Ctrl"
                }
            }
        })
        .state("tab.tab3",{
            url:"/tab3",
            views:{
                "tab-tab3":{
                    templateUrl:"templates/tab3.html",
                    controller:"Tab3Ctrl"
                }
            }
        })
        .state("tab.tab4",{
            url:"/tab4",
            views:{
                "tab-tab4":{
                    templateUrl:"templates/tab4.html",
                    controller:"Tab4Ctrl"
                }
            }
        })
        .state("tab.account",{
            url:"/account",
            views:{
                "tab-account":{
                    templateUrl:"templates/tab-account.html",
                    controller:"AccountCtrl"
                }
            }
        });
    $urlRouterProvider.otherwise("/tab/tab1");
});

/* var app=angular.module("myApp",["ionic","myApp.controllers"]);
 app.config(function($stateProvider,$urlRouterProvider){
     $stateProvider
         .state("tab",{
             url:"/tab",
             //abstract:true,
             templateUrl:"templates/tabs.html"
         })
         .state("tab.tab1",{
             url:"/tab1",
             views:{
                 "tab_tab1":{
                    templateUrl:"templates/tab-tab1.html",
                     controller:"tab1Ctrl"
                 }
             }
         })
         .state("tab.tab2",{
             url:"/tab2",
             views:{
                 "tab_tab2": {
                     templateUrl: "templates/tab-tab2.html",
                     controller:"tab2Ctrl"
                 }
             }
         })
         .state("tab.tab3",{
             url:"/tab3",
             views:{
                 "tab_tab3": {
                     templateUrl: "templates/tab-tab3.html",
                     controller:"tab3Ctrl"
                 }
             }
         })
         .state("tab.controller1",{
             url:"/controller1/:id",
             views:{
                 "tab_tab1": {
                     templateUrl: "templates/tab-controller1.html",
                     controller:"controller1Ctrl"
                 }
             }
         });
     $urlRouterProvider.otherwise('/tab/tab1');
 });*/

// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
// 'starter.controllers' is found in controllers.js
/*
angular.module('starter', ['ionic', 'starter.controllers'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
    // for form inputs)
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      cordova.plugins.Keyboard.disableScroll(true);

    }
    if (window.StatusBar) {
      // org.apache.cordova.statusbar required
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $stateProvider

    .state('app', {
    url: '/app',
    abstract: true,
    templateUrl: 'templates/menu.html',
    controller: 'AppCtrl'
  })

  .state('app.search', {
    url: '/search',
    views: {
      'menuContent': {
        templateUrl: 'templates/search.html'
      }
    }
  })

  .state('app.browse', {
      url: '/browse',
      views: {
        'menuContent': {
          templateUrl: 'templates/browse.html'
        }
      }
    })
    .state('app.playlists', {
      url: '/playlists',
      views: {
        'menuContent': {
          templateUrl: 'templates/playlists.html',
          controller: 'PlaylistsCtrl'
        }
      }
    })

  .state('app.single', {
    url: '/playlists/:id',
    views: {
      'menuContent': {
        templateUrl: 'templates/playlist.html',
        controller: 'PlaylistCtrl'
      }
    }
  });
  // if none of the above states are matched, use this as the fallback
  $urlRouterProvider.otherwise('/app/playlists');
});
*/
