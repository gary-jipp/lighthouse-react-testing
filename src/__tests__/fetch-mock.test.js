const {getNewFriends} = require("helpers/fetch");
jest.mock('helpers/fetch');

const data = [
  {name: "Betty White", uid: "1"},
  {name: "Freddy Mercury", uid: "2"},
  {name: "James Holden", uid: "3"},
  {name: "Tom Cruise", uid: "4"},
];

describe('getNewFriends Mock tests', () => {

  // getNewFriends (async/await)
  test("getNewFriends returns the same 4 friends", async () => {

    console.log(getNewFriends);
    getNewFriends.mockResolvedValueOnce(data);

    const friends = await getNewFriends(4);  // returns res
    expect(friends.length).toBe(4);

    const tom = {name: "Tom Cruise", uid: "4"};
    expect(friends).toContainEqual(tom);

    expect(getNewFriends).toHaveBeenCalled(); // getNewFriends was called
  });


});
