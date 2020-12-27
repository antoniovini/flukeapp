import axios from 'axios';
import { serverUrl } from '../../package.json';

/**
 * Fetch user consumption data
 * @param {Date} startDate - consumption start date
 * @param {Date} endDate - consumption end date
 * @return {Promise<any>} Http request response
 */
export const fetchConsumption = (startDate, endDate) => {
  if(!startDate || !endDate) {
    throw "Missing arguments (startDate or endDate)";
  }
  
  return axios({
    method: 'get',
    url: `${serverUrl}usage/records/?startDate=${startDate.toISOString().slice(0,10)}&endDate=${endDate.toISOString().slice(0, 10)}`
  })
  .then(res => res.data);
}