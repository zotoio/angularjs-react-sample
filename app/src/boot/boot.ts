/// <reference path='../../../typings/index.d.ts' />

// Import our Angular dependencies
import * as angular from 'angular';
import 'angular-animate';
import 'angular-aria';
import 'angular-material';
import 'angular-messages';
import 'angular-sanitize';
import 'react';
import 'react-dom';
import 'ngreact';
import {react2angular} from 'react2angular';

import {AppComponent} from '../components/start-app/start-app.component.ts';
import {UsersListComponent} from '../users/components/users-list/users-list.component.ts';
import {UserDetailsComponent} from '../users/components/user-details/user-details.component.ts';
import {SampleController} from '../controllers/sample.controller.ts';

import {Users} from '../users/users.ts';
import {MyReactComponentOne} from '../react/MyReactComponentOne.react.tsx';
import {MyReactComponentTwo} from '../react/MyReactComponentTwo.react.tsx';

module MaterialStart {
  'use strict';

  // Register our module and it's dependencies
  angular.module('MaterialStart', ['ngMaterial', 'ngSanitize', 'react', Users.name])
    .config(function ($mdIconProvider:angular.material.IIconProvider, $mdThemingProvider:angular.material.IThemingProvider) {
      // Register the user `avatar` icons
      $mdIconProvider
        .defaultIconSet('./assets/svg/avatars.svg', 128)
        .icon('menu', './assets/svg/menu.svg', 24)
        .icon('share', './assets/svg/share.svg', 24)
        .icon('google_plus', './assets/svg/google_plus.svg', 24)
        .icon('hangouts', './assets/svg/hangouts.svg', 24)
        .icon('twitter', './assets/svg/twitter.svg', 24)
        .icon('phone', './assets/svg/phone.svg', 24);

      $mdThemingProvider.theme('default')
        .primaryPalette('brown')
        .accentPalette('red');
    })

    // Register all of our components
    .component(AppComponent.componentName, AppComponent.componentConfig)
    .component(UsersListComponent.componentName, UsersListComponent.componentConfig)
    .component(UserDetailsComponent.componentName, UserDetailsComponent.componentConfig)
    .controller('SampleController', SampleController)

    // #### sample one #### using an angular 1.5+ component type
    .component('myReactComponentOne', react2angular(MyReactComponentOne, ['foo', 'bar', 'person'], ['$http']))

    // #### sample two #### using a directive for further backwards compatibility
    .value('MyReactComponentTwo', MyReactComponentTwo);

  ;
}