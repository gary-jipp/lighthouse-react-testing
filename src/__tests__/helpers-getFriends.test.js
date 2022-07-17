const {getNewFriends} = require("helpers");
jest.mock('helpers');

const data = [
  {name: "Betty White", uid: "1"},
  {name: "Freddy Mercury", uid: "2"},
  {name: "James Holden", uid: "3"},
  {name: "Tom Cruise", uid: "4"},
];

describe('Helper Async tests', () => {

  // Coverage - getNewFriends (async/await)
  test("getNewFriends axios mock returns the same 4 friends", async () => {

    getNewFriends.mockResolvedValueOnce(data);

    const friends = await getNewFriends(4);  // returns res
    expect(friends.length).toBe(4);

    const tom = {name: "Tom Cruise", uid: "4"};
    expect(friends).toContainEqual(tom);

    expect(getNewFriends).toHaveBeenCalled(); // axios was never called
  });


});
