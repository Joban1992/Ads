angular.module('app', ['ionic', 'app.controllers', 'ionic-material', 'ionMdInput', 'app.router'])

.run(function($ionicPlatform, $rootScope) {
    $ionicPlatform.ready(function() {
        if (window.cordova && window.cordova.plugins.Keyboard) {
            cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
        }
        if (window.StatusBar) {
            StatusBar.styleDefault();
        }
    });
})

