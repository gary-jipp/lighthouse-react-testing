import axios from 'axios';

export function loadNewFriends(num) {
  return axios.get(`https://random-data-api.com/api/name/random_name?size=${num}`)
    .then(res => {
      return res.data;
    });
}