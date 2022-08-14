
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