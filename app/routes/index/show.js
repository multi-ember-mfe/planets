import Route from '@ember/routing/route';

export default class IndexShowRoute extends Route {
   model(params) {
    return this.store.findRecord('planet',params.id);
  }
}
