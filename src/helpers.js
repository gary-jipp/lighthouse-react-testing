import axios from 'axios';
import uniqid from 'uniqid';

export function getNewFriends(num) {
  return axios.get(`https://random-data-api.com/api/name/random_name?size=${num}`)
    .then(res => res.data);
}

export function getFriendCount(list) {
  if (!list) {
    return -1;
  }

  return list.length;
}

export function addFriend(list, name) {
  if (!list) {
    return [];
  }

  const uid =  uniqid();
  return [...list, {name, uid}];
}

export function removeFriend(list, uid) {
  if (!list) {
    return [];
  }

  return list.filter(item => item.uid !== uid);
}

export function getFriendNames(list) {
  if (!list) {
    return [];
  }

  return list.map(item => item.name);
}