import crudProvider from 'ra-data-nestjsx-crud';
import { fetchUtils } from 'react-admin';

const fetchJson = (url: string, options: fetchUtils.Options = {}) => {
  const customHeaders = (options.headers ||
      new Headers({
          Accept: 'application/json',
      })) as Headers;
  // add your own headers here
  customHeaders.set('credentials', 'include');
  customHeaders.set('Sec-Fetch-Site', 'cross-site');
  options.headers = customHeaders;
  return fetchUtils.fetchJson(url, options);
}

export default crudProvider('http://localhost:3000/', fetchJson);