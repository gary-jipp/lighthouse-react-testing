const {loadNewFriends} = require("helpers/load");
jest.mock('helpers/load');

const data = [
  {name: "Betty White", uid: "1"},
  {name: "Freddy Mercury", uid: "2"},
  {name: "James Holden", uid: "3"},
  {name: "Tom Cruise", uid: "4"},
];

describe('loadNewFriends Mock tests', () => {

  // getNewFriends (async/await)
  test("loadNewFriends returns the same 4 friends", async () => {

    console.log(loadNewFriends);
    loadNewFriends.mockResolvedValueOnce(data);

    const friends = await loadNewFriends(4);  // returns res
    expect(friends.length).toBe(4);

    const tom = {name: "Tom Cruise", uid: "4"};
    expect(friends).toContainEqual(tom);

    expect(loadNewFriends).toHaveBeenCalled(); // loadNewFriends was called
  });


});
