/* global angular, document, window */
'use strict';

angular.module('app.controllers', [])



        .controller('AppCtrl', function($scope, $ionicModal, $ionicPopover, $timeout, $window) {
            // Form data for the login modal
            //$scope.$parent.searchScreen.searchBoxVisible = false;
            $scope.loginData = {};
            $scope.isExpanded = false;
            $scope.hasHeaderFabLeft = false;
            $scope.hasHeaderFabRight = false;
            $scope.searchScreen = {
                searchBoxVisible: false,
                searchBtnIcon: 'ion-android-search'
            };
            $scope.APP_NAME = "App_Name";
            $scope.PROFILE_TAB_NAME = "Profile";
            $scope.NOTIFICATION_TAB_NAME = "Notification";
            $scope.SEARCH_TAB_NAME = "Search";
            $scope.MY_ADS_TAB_NAME = "My Ads";

            var navIcons = document.getElementsByClassName('ion-navicon');
            for (var i = 0; i < navIcons.length; i++) {
                navIcons.addEventListener('click', function() {
                    this.classList.toggle('active');
                });
            }

            //search btn click event
            $scope.serachFabBtnClicked = function() {
                $timeout(function() {
                    var element = $window.document.getElementById("searchBox");
                    if (element)
                        element.focus();
                });
                if ($scope.searchScreen.searchBoxVisible) {
                    $scope.searchScreen.searchBoxVisible = false;
                    $scope.searchScreen.searchBtnIcon = 'ion-android-search';
                } else {
                    $scope.searchScreen.searchBoxVisible = true;
                    $scope.searchScreen.searchBtnIcon = 'ion-close-round';
                }
            }

            ////////////////////////////////////////
            // Layout Methods
            ////////////////////////////////////////

            $scope.hideNavBar = function() {
                document.getElementsByTagName('ion-nav-bar')[0].style.display = 'none';
            };

            $scope.showNavBar = function() {
                document.getElementsByTagName('ion-nav-bar')[0].style.display = 'block';
            };

            $scope.noHeader = function() {
                var content = document.getElementsByTagName('ion-content');
                for (var i = 0; i < content.length; i++) {
                    if (content[i].classList.contains('has-header')) {
                        content[i].classList.toggle('has-header');
                    }
                }
            };

            $scope.setExpanded = function(bool) {
                $scope.isExpanded = bool;
            };

            $scope.setHeaderFab = function(location) {
                var hasHeaderFabLeft = false;
                var hasHeaderFabRight = false;

                switch (location) {
                    case 'left':
                        hasHeaderFabLeft = true;
                        break;
                    case 'right':
                        hasHeaderFabRight = true;
                        break;
                }

                $scope.hasHeaderFabLeft = hasHeaderFabLeft;
                $scope.hasHeaderFabRight = hasHeaderFabRight;
            };

            $scope.hasHeader = function() {
                var content = document.getElementsByTagName('ion-content');
                for (var i = 0; i < content.length; i++) {
                    if (!content[i].classList.contains('has-header')) {
                        content[i].classList.toggle('has-header');
                    }
                }

            };

            $scope.hideHeader = function() {
                $scope.hideNavBar();
                $scope.noHeader();
            };

            $scope.showHeader = function() {
                $scope.showNavBar();
                $scope.hasHeader();
            };

            $scope.clearFabs = function() {
                var fabs = document.getElementsByClassName('button-fab');
                if (fabs.length && fabs.length > 1) {
                    fabs[0].remove();
                }
            };
        })

        .controller('LoginCtrl', function($scope, $timeout, $stateParams, ionicMaterialInk, $log, $state) {
            $scope.$parent.searchScreen.searchBoxVisible = false;
            $scope.doLogin = function() {
                $scope.$parent.clearFabs();
                $timeout(function() {
                    $scope.$parent.hideHeader();
                }, 0);
                ionicMaterialInk.displayEffect();
                $state.go("app.profile");
            }
        })

        .controller('NotificationsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
            $scope.$parent.searchScreen.searchBoxVisible = false;
            // Set Header
            $scope.notificationList = [
                {title: 'First Noti', message: 'Some Message'}
            ];
            $scope.$parent.showHeader();
            $scope.$parent.clearFabs();
            $scope.$parent.setHeaderFab('left');

            // Delay expansion
            $timeout(function() {
                $scope.isExpanded = true;
                $scope.$parent.setExpanded(true);
            }, 300);

            // Set Motion
            ionicMaterialMotion.fadeSlideInRight();

            // Set Ink
            ionicMaterialInk.displayEffect();
        })

        .controller('ProfileCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
            $scope.$parent.searchScreen.searchBoxVisible = false;
            // Set Header
            $scope.$parent.showHeader();
            $scope.$parent.clearFabs();
            $scope.isExpanded = false;
            $scope.$parent.setExpanded(false);
            $scope.$parent.setHeaderFab(false);

            // Set Motion
            $timeout(function() {
                ionicMaterialMotion.slideUp({
                    selector: '.slide-up'
                });
            }, 300);

            $timeout(function() {
                ionicMaterialMotion.fadeSlideInRight({
                    startVelocity: 3000
                });
            }, 700);

            // Set Ink
            ionicMaterialInk.displayEffect();
        })

        .controller('ActivityCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
            //alert('dd')
            $scope.$parent.searchScreen.searchBoxVisible = false;
            $scope.$parent.showHeader();
            $scope.$parent.clearFabs();
            $scope.isExpanded = true;
            $scope.$parent.setExpanded(true);
            $scope.$parent.setHeaderFab('right');

            $timeout(function() {
                ionicMaterialMotion.fadeSlideIn({
                    selector: '.animate-fade-slide-in .item'
                });
            }, 200);

            //serach btn clicked
            $scope.serachFabBtnClicked = function() {
                alert('dd')
            }

            // Activate ink for controller
            ionicMaterialInk.displayEffect();
        })

        .controller('MyAdsCtrl', function($scope, $stateParams, $timeout, ionicMaterialInk, ionicMaterialMotion) {
            $scope.$parent.searchScreen.searchBoxVisible = false;
            $scope.$parent.showHeader();
            $scope.$parent.clearFabs();
            $scope.isExpanded = true;
            $scope.$parent.setExpanded(true);
            $scope.$parent.setHeaderFab(false);

            // Activate ink for controller
            ionicMaterialInk.displayEffect();

            ionicMaterialMotion.pushDown({
                selector: '.push-down'
            });
            ionicMaterialMotion.fadeSlideInRight({
                selector: '.animate-fade-slide-in .item'
            });

        })
        
        .controller('SearchCtrl', function($scope, $stateParams, $timeout, ionicMaterialMotion, ionicMaterialInk) {
            $scope.$parent.searchScreen.searchBoxVisible = false;
            // Set Header
            $scope.$parent.showHeader();
            $scope.$parent.clearFabs();
            $scope.isExpanded = false;
            $scope.$parent.setExpanded(false);
            $scope.$parent.setHeaderFab(false);

        //     // Set Motion
            $timeout(function() {
                ionicMaterialMotion.slideUp({
                    selector: '.slide-up'
                });
            }, 300);

            $timeout(function() {
                ionicMaterialMotion.fadeSlideInRight({
                    startVelocity: 3000
                });
            }, 700);

            // Set Ink
            ionicMaterialInk.displayEffect();
        })

        ;
