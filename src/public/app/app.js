//require statements are loaded via browserify
//if browserify doesn't support a file, load it with file path
//angular dependencies
require('angular');
require('angular-ui-router');
require('./auth/auth.js');
require('./create/create.js');
require('./main/main.js');
require('./main/container/container.js');
require('./main/container/slide/slide.js');
require('./main/container/video/video.js');
require('./main/flyout/flyout.js');
require('./main/toolbar/toolbar.js');
require('./services.js');

//other dependencies
require('../../../node_modules/socket.io-client/socket.io.js');
require('../../../node_modules/jquery/dist/jquery.js');

//LearnSyncly
angular.module('lsync', [
  'ui.router',
  'lsync.auth',
  'lsync.create',
  'lsync.main',
  'lsync.container',
  'lsync.flyout',
  'lsync.slide',
  'lsync.video',
  'lsync.services',
  'lsync.toolbar'
])
.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/main');
  $stateProvider
    .state('login', {
      url:'/login',
      templateUrl: 'app/auth/login.html',
      controller: 'AuthController'
    })
    .state('register', {
      url:'/register',
      templateUrl: 'app/auth/register.html',
      controller: 'AuthController'
    })
    .state('create', {
      abstract:true,
      url: '/create',
      templateUrl: 'app/create/create.html',
      controller: 'CreateController',
    })
    .state('main',{
      url:'/main',
      views: {
        'video':{
          templateUrl:'app/main/container/video/video.html',
          controller:'VideoController'
        },
        'slide':{
          templateUrl:'app/main/container/slide/slide.html',
          controller:'SlideController'
        },
        'flyout':{
          templateUrl:'app/main/flyout/flyout.html',
          controller:'FlyoutController'
        },
        'toolbar':{
          templateUrl:'app/main/toolbar/toolbar.html',
          controller:'ToolbarController'
        }
      }
    })
    
    ////TODO REMOVE ONCE ROUTES ARE WORKING!
    .state('slide', {
      url: '/slide',
      templateUrl: 'app/main/container/slide/slide.html',
      controller: 'SlideController'
    });
 });
