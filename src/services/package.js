import axios from 'axios';
import { serverUrl } from '../../package.json';

/**
 * Fetch user package data
 * @return {Promise<any>} Http request response
 */
export const fetchPackage = () => {
  return axios({
    method: 'get',
    url: `${serverUrl}usage/packageInformation/`
  })
  .then(res => res.data);
}