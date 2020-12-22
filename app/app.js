import Application from '@ember/application';
import Resolver from 'ember-resolver';
import loadInitializers from 'ember-load-initializers';
import config from './config/environment';

import singleSpaEmber from 'single-spa-ember';
import singleSpaLeakedGlobals from 'single-spa-leaked-globals';

export default class App extends Application {
  modulePrefix = config.modulePrefix;
  podModulePrefix = config.podModulePrefix;
  Resolver = Resolver;
}

loadInitializers(App, config.modulePrefix);

const emberLifecycles = singleSpaEmber({
  App,
  appName: 'planets',
  createOpts: {
    rootElement: '#planets',
  }
});

const leakedGlobalsLifecycles = singleSpaLeakedGlobals({
  globalVariableNames: ['Ember'],
})
export const bootstrap = [
  leakedGlobalsLifecycles.bootstrap,
  emberLifecycles.bootstrap,
]

export const mount = [
  leakedGlobalsLifecycles.mount,
  emberLifecycles.mount,
]
export const unmount = [
  leakedGlobalsLifecycles.mount,
  emberLifecycles.unmount,
]
