import uniqid from 'uniqid';

export function getFriendCount(list) {
  if (!list) {
    return -1;
  }

  return list.length;
}

export function getFriendNames(list) {
  if (!list) {
    return [];
  }

  return list.map(item => item.name);
}

export function addFriend(list, name) {
  if (!list) {
    return [];
  }

  const uid = uniqid();
  return [...list, {name, uid}];
}

export function removeFriend(list, uid) {
  if (!list) {
    return [];
  }

  return list.filter(item => item.uid !== uid);
}