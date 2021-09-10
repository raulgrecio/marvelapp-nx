import axios from 'axios';

import { config } from './marvel.client.config';
import { getHash } from './marvel.client.utils';

const ts = 1000;

const client = axios.create({
  baseURL: config.baseURL,
  responseType: 'json',
  withCredentials: false,
});

client.interceptors.request.use(
  function (requestConfig) {
    const hash = getHash(ts, config.publicKey, config.privateKey);

    if (hash) {
      requestConfig.params = {
        ...requestConfig.params,
        ts,
        apikey: config.publicKey,
        hash,
      };
    }

    return requestConfig;
  },
  function (error) {
    return Promise.reject(error);
  }
);

export { client };
