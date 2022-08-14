import axios from 'axios';

export function getNewFriends(num) {
  return axios.get(`https://random-data-api.com/api/name/random_name?size=${num}`)
    .then(res => {
      return res.data;
    });
}