/* Blitz */

angular.module('blitz', ['templates', 'ui.router'])

.config(['$stateProvider', '$urlRouterProvider',

($stateProvider, $urlRouterProvider) => {

  $stateProvider
    .state('index', {
      url: '',
      templateProvider: ($templateCache) => {
        return $templateCache.get('index.html');
      }
    });

}

])
