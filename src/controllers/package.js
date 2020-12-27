import axios from 'axios';
import { serverUrl } from '../../package.json';

export const fetchPackage = () => {
  return axios({
    method: 'get',
    url: `${serverUrl}usage/packageInformation/`
  })
  .then(res => res.data);
}