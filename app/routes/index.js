import Route from '@ember/routing/route';

export default class IndexRoute extends Route {
  async model() {
    const planets = await this.store.findAll('planet');
    return { planets };
  }
}
