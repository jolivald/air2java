import crudProvider from 'ra-data-nestjsx-crud';
import simpleRest from 'ra-data-simple-rest';

import { fetchUtils } from 'react-admin';

const fetchJson = (url: string, options: fetchUtils.Options = {}) => {
  const customHeaders = (options.headers ||
      new Headers({
        'Accept': 'application/json'
      })) as Headers;
  // add your own headers here
  customHeaders.set('credentials', 'include');
  customHeaders.set('Content-Type', 'application/json');
  customHeaders.set('Access-Control-Request-Method', 'GET, HEAD, POST, PUT, PATCH, DELETE, OPTIONS');
  customHeaders.set('Access-Control-Request-Headers', 'Accept, Content-Type, Authentication, Cookie, credentials');
  options.headers = customHeaders;
  return fetchUtils.fetchJson(url, options);
}

//export default crudProvider('https://127.0.01:3000/', fetchJson);
export default simpleRest('https://127.0.01:3000/', fetchJson);