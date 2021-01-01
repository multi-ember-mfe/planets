import JSONAPIAdapter from '@ember-data/adapter/json-api';
import config from 'planets/config/environment';

export default class ApplicationAdapter extends JSONAPIAdapter {
  host = config.host;
  headers = {
    'accept': 'application/json',
  };
}
