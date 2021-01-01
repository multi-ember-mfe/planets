import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import singleSpaEmber from './single-spa-ember';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);


const loaderAliases = {
  require: 'planetsRequire',
  requirejs: 'planetsRequireJS'
};

loader.noConflict(loaderAliases);

const emberLifecycles = singleSpaEmber({
  App,
  appName: 'planets',
  createOpts: {
    rootElement: '#planets',
  },
  loaderAliases
  
});


export const { bootstrap, mount, unmount } = emberLifecycles;
