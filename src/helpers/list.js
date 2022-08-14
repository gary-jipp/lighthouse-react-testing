import uniqid from 'uniqid';

export function getFriendCount(list) {
  if (!list) {
    return -1;
  }

  return list.length;
}

export function addFriend(list, name, uid=uniqid()) {
  if (!list) {
    return [];
  }

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