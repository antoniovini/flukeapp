import axios from 'axios';
import { serverUrl } from '../../package.json';

export const fetchConsumption = (startDate, endDate) => {
  return axios({
    method: 'get',
    url: `${serverUrl}usage/records/?startDate=${startDate.toISOString().slice(0,10)}&endDate=${endDate.toISOString().slice(0, 10)}`
  })
  .then(res => res.data);
}